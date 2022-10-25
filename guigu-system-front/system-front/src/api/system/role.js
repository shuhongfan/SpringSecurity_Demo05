import request from '@/utils/request'

//常量
const api_name = '/admin/system/sysRole/'

export default {
    //列表
    getPageList(page,limit,searchObj) {
        return request({
            //接口路径
            url: `${api_name}/${page}/${limit}`,
            method: 'get', //提交方式
            //参数
            params: searchObj
        })
    },
    //删除
    removeId(id) {
        return request({
            //接口路径
            url: `${api_name}/remove/${id}`,
            method: 'delete' //提交方式
        })
    },
    //添加
    saveRole(role) {
        return request({
            //接口路径
            url: `${api_name}/save`,
            method: 'post', //提交方式
            //传递json格式
            data: role
        })
    },
    //根据id查询
    getRoleId(id) {
        return request({
            //接口路径
            url: `${api_name}/findRoleById/${id}`,
            method: 'post' //提交方式
        })
    },
    //修改的方法
    update(role) {
        return request({
            //接口路径
            url: `${api_name}/update`,
            method: 'post', //提交方式
            data: role
        })
    },
    //批量删除
    batchRemove(idList) {
        return request({
            //接口路径
            url: `${api_name}/batchRemove`,
            method: 'delete', //提交方式
            data: idList
        })
    },
    //根据用户id查询用户已分配的角色
    getRolesByUserId(userId) {
        return request({
        url: `${api_name}/toAssign/${userId}`,
        method: 'get'
        })
    },
    //分配角色
    assignRoles(assginRoleVo) {
        return request({
        url: `${api_name}/doAssign`,
        method: 'post',
        data: assginRoleVo
        })
    }
}