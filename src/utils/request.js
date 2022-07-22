import axios from "axios";
import { ElMessage  } from 'element-plus'

//默认请求头
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
// 创建axios实例
export const service = axios.create({
    // axios中请求配置有baseURL选项，表示请求URL公共部分
    baseURL: process.env.VUE_APP_BASE_API,
    // 超时
    timeout: 10000,
    //携带认证信息cookie
    withCredentials: true
})
//请求拦截
service.interceptors.request.use(config=>{

})
//响应拦截
/**
 * get方式请求，url传参
 * @param url 请求url
 * @param params 参数
 * @param level 0:无加密，1：参数加密，2: 签名+时间戳； 默认0
 */
const get = (url, params, level) => service(getConfig(url, 'get', true, params, level)).then(res => successback(res)).catch(error => errback(error));
/**
 * post方式请求 json方式传参
 * @param url 请求url
 * @param params 参数
 * @param level 0:无加密，1：参数加密，2: 签名+时间戳； 默认0
 */
const postJson = (url, params, level) => service(getConfig(url, 'post', true, params, level)).then(res => successback(res)).catch(error => errback(error));
/**
 * post方式请求 表单传参
 * @param url 请求url
 * @param params 参数
 * @param level 0:无加密，1：参数加密，2: 签名+时间戳； 默认0
 */
const post = (url, params, level) => service(getConfig(url, 'post', false, params, level)).then(res => successback(res)).catch(error => errback(error));
/**
 * delete方式请求 url传参
 * @param url 请求url
 * @param params 参数
 * @param level 0:无加密，1：参数加密，2: 签名+时间戳； 默认0
 */
const del = (url, params, level) => service(getConfig(url, 'delete', true, params, level)).then(res => successback(res)).catch(error => errback(error));
/**
 * put方式请求 json传参
 * @param url 请求url
 * @param params 参数
 * @param level 0:无加密，1：参数加密，2: 签名+时间戳； 默认0
 */
const putJson = (url, params, level) => service(getConfig(url, 'put', true, params, level)).then(res => successback(res)).catch(error => errback(error));
/**
 * put方式请求 表单传参
 * @param url 请求url
 * @param params 参数
 * @param level 0:无加密，1：参数加密，2: 签名+时间戳； 默认0
 */
const put = (url, params, level) => service(getConfig(url, 'put', false, params, level)).then(res => successback(res)).catch(error => errback(error));


// 参数转换
const param2String = data => {
    console.log('data', data);
    if (typeof data === 'string') {
        return data;
    }
    let ret = '';
    for (let it in data) {
        let val = data[it];
        if (typeof val === 'object' && //
            (!(val instanceof Array) || (val.length > 0 && (typeof val[0] === 'object')))) {
            val = JSON.stringify(val);
        }
        ret += it + '=' + encodeURIComponent(val) + '&';
    }
    if (ret.length > 0) {
        ret = ret.substring(0, ret.length - 1);
    }
    return ret;
};

// 错误回调函数
const errback = error => {
    if ('code' in error) {
        // 未登录
        if (error.code === 30001) {
            sessionStorage.clear();
            window.location.href = '/';
            return;
        }
        return Promise.reject(error);
    }
    // 网络异常,或链接超时
    ElMessage({
        message: error.message,
        type: 'error'
    });
    return Promise.reject({data: error.message});
};
// 成功回调函数
const successback = res => {
    if (res.status === 200 && res.data.code !== 20000) {
        let errMsg = {'30002': '对不起无权限', '30003': '验签失败'};
        let msg = errMsg[res.data.code];
        if (msg) {
            ElMessage({
                message: errMsg[res.data.code],
                type: 'error'
            });
        }
        return Promise.reject(res.data);
    }
    return res.data;
};

/**
 * @param url 请求url
 * @param method get,post,put,delete
 * @param isjson 是否json提交参数
 * @param params 参数
 * @param level 0:无加密，1：参数加密，2: 签名+时间戳； 默认0
 */
const getConfig = (url, method, isjson, params, level = 0) => {
    let config_ = {
        url,
        method,
        // params, data,
        headers: {
            level
        }
    };
    // 时间戳
    if (level === 1) { // 加密
        params = {encrypt: aes.en(JSON.stringify(params))};
    } else if (level === 2) { // 签名
        let timestamp = new Date().getTime();
        // 获取token
        let token = store.state.token;
        if (!token) {
            token = JSON.parse(sessionStorage.getItem('user')).token;
            store.state.token = token;
        }
        // 签名串
        let signstr = sign(token, timestamp, params);
        console.log('token', token);
        console.log('signstr', signstr);
        config_.headers = {
            level,
            timestamp,
            signstr
        };
    }
    // 表单提交参数
    if (!isjson) {
        config_.headers['Content-Type'] = 'application/x-www-form-urlencoded';
        config_.responseType = 'text';
        config_.transformRequest = [function (data) {
            return param2String(data);
        }];
    }
    // 设置参数
    if (method in {'get': true, 'delete': true}) {
        config_.params = params;
    } else if (method in {'post': true, 'put': true}) {
        config_.data = params;
    }
    return config_;
};

// 统一方法输出口
export {
    get,
    postJson,
    post,
    del,
    putJson,
    put
};
