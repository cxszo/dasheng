import * as types from '../../constant/Sign/signType.js'
import{Util} from '../../util/util.js'
// 登陆
export const signInData = param =>{
    let _param = param || {};
    return dispatch =>{
        Util.post('http://data.9188.group/signin',_param,(data)=>{
                dispatch(signIn(data,{code:data.code,desc:data.desc,_data:data.data}))
            },(err)=>{
                console.log(err)
            }
        )
    }   
 }
 const signIn=(data,login)=>({
         type: types.SIGNIN_DATA,
         data,
         code:login.code,
         desc:login.desc,
         _data:login._data
 })
 
 //注册
 export const signUpData = param =>{
    let _param = param || {};
    return dispatch =>{
        Util.post('http://data.9188.group/signup',_param,(data)=>{
                dispatch(signUp(data,{code:data.code,desc:data.desc,_data:data.data}))
            },(err)=>{
                console.log(err)
            }
        )
    }   
 }
 const signUp=(data,login)=>({
         type: types.SIGNUP_DATA,
         data,
         code:login.code,
         desc:login.desc,
         _data:login._data
 })
 //清除登录信息
export const clearUserInfo = () =>({
    type:types.CLEAR_USERINFO
})