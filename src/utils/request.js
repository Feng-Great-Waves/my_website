import axios from "axios";
import { ElMessage  } from 'element-plus'


//默认请求头
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'


// 创建axios实例
export const service = axios.create({
    // axios中请求配置有baseURL选项，表示请求URL公共部分
    baseURL: '/dev-api',
    // 超时
    timeout: 10000,
})

// request( 请求拦截器 )
// 可以在( 请求发送前 )  对请求做一些处理( 比如加上token，对一些参数统一加密 )   箭头函数：config =>{},error =>{}
service.interceptors.request.use( config => {
        return config;
    }, error => {
        return Promise.reject(error);
    }
);

// response( 响应拦截器 )
// 可以在( 响应后 )  统一处理结果    箭头函数：response =>{},error =>{}
service.interceptors.response.use( response => {
        let res = response.data

        // 如果是返回的文件
        if (response.config.responseType === 'blob') {
            return res
        }

        // 兼容服务端返回的字符串数据
        if (typeof res === 'string') {
            res = res ? JSON.parse(res) : res
        }
        return res
    }, error => {
        console.log('err' + error)  // for debug
        return Promise.reject(error);
    }
);
// 导出自定义函数，参数对象结构赋值
export default ({ url, method = "GET", params, data }) => {
    return service({
        url,
        method: method,
        params: params,
        data: data,
    });
};


