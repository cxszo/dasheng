
import { createAction } from 'redux-actions';

import types from '../constant/actionTypes'


//获取用户信息
export const getUserInfo = createAction(types.FETCH_USERINFO);
//清除登录信息
export const clearUserInfo = ()=>{
    return { type: types.CLEAR_USERINFO }
}



//登录
export const goLogin = createAction(types.FETCH_SIGNIN);


//注册
export const goRegister = createAction(types.FETCH_SIGNUP);
