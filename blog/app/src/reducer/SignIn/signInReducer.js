import * as types from '../../constant/SignIn/signInType.js'
const initialState = {
   SignInData:''
}
export default  function SignIn(state=initialState,action){
    switch(action.type){
        //登录
        case types.SIGNIN_DATA:
        return Object.assign({},state,{SignInData:action.data})
        break;

        default:
        return state

    }
}

