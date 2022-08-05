import request from "@/utils/request";

// 查询列表
export const listShare=(query) =>{
    return request({
        url: '/website/share/list',
        method: 'get',
        params: query
    })
}

export const selectShare=(id)=> {
    return request({
        url: '/website/share/share/'+id,
        method: 'get',
    })
}
