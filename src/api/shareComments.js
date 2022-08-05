import request from "@/utils/request";

// 查询评论列表
export const listShareComments=(id) =>{
    return request({
        url: '/website/sharecomments/list/'+id,
        method: 'get',
    })
}

export const addShareComments=(data) =>{
    return request({
        url: '/website/sharecomments/add',
        method: 'post',
        data:data
    })
}
