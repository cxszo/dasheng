





import * as fetch from '../fetch'

const uri = 'http://data.9188.group'



/*
code
400  接口找不到
500  接口500
600  请求超时
*/


//首页接口
const homeApi = {
    getUserInfo: `${uri}/user/userinfo`
}
//登录&注册
const sign = {
    goLogin: `${uri}/signin`,
    goRegister: `${uri}/signup`
}


export default {
    ...homeApi,
    ...sign
}


