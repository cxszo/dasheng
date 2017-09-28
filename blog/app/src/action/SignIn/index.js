import * as types from '../../constant/SignIn/signinType.js'
import{Util} from '../../util/util.js'
// 登陆
export const signInData = param =>{
    let _param = param || {};
    return dispatch =>{
        Util.post('http://data.9188.group/signin',_param,(data)=>{
                dispatch(signIn(data))
            },(err)=>{
                console.log(err)
            }
        )
    }   
 }
 const signIn=data=>({
         type: types.SIGNIN_DATA,
         data
 })
 