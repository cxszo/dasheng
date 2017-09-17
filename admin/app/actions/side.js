
import { createAction } from 'redux-actions';

import types from '../constant/actionTypes'


//获取用户信息
export const setSide = (data)=>{
    return {
        type: types.CHANGE_SIDE_STATE,
        data: data
    }
}
