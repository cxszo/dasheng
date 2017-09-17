



import Immutable from 'immutable';


import types from '../constant/actionTypes'


const initialState = {
    data: false,//默认 左侧导航是打开的
};
export default function side (state = initialState, action) {
    switch (action.type) {
        case types.CHANGE_SIDE_STATE:
            return {
                data: action.data
            }
        default:
            return state
    }
}
