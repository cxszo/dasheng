import * as types from '../../constant/Sign/signType.js'
const initialState = {
   SignInData:'',
   SignInCode:'',
   SignInDesc:'',
   SignUpData:'',
   SignUpCode:'',
   SignUpDesc:''
}
export default  function BlogSign(state=initialState,action){
    switch(action.type){
        //登录
        case types.SIGNIN_DATA:
        return Object.assign({},state,{SignInData:action._data,SignInCode:action.code,SignInDesc :action.desc})
        break;

        //注册
        case types.SIGNUP_DATA:
        return Object.assign({},state,{SignUpData:action._data,SignUpCode:action.code,SignUpDesc :action.desc})
        break;

         //清除登录信息
         case types.CLEAR_USERINFO:
         return Object.assign({},state,{SignInCode:''})
         break;

        default:
        return state

    }
}

