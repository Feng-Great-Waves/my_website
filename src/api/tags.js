// 查询列表
import request from "@/utils/request";

export const listTagHeader=() =>{
    return request({
        url: '/website/tags/listheader',
        method: 'get',
    })
}
