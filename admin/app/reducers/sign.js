



import Immutable from 'immutable';


import types from '../constant/actionTypes'


const initialState = Immutable.fromJS({
    userinfo: { isLoading: false},
    loginInfo: {},
    registerInfo: {}

});
export default function userinfo (state = initialState, action) {
    switch (action.type) {
        case types.FETCH_USERINFO:
            return {
                userinfo: {isLoading: true}
            }
        case types.CLEAR_USERINFO:
            return {
                userinfo: {isLoading: false}
            }
        case types.FETCH_SUCCEED_USERINFO:
            return {
                userinfo: {
                    isLoading: false,
                    ...action.res
                }
            }
        case types.FETCH_FAILURE_USERINFO:
            return {
                userinfo: {
                    isLoading: false,
                    ...action.res
                }
            }
        case types.FETCH_SUCCEED_LOGIN:
            return {
                loginInfo: action.res
            }
        case types.FETCH_FAILURE_LOGIN:
            return {
                loginInfo: action.res
            }
        case types.FETCH_SUCCEED_REGISTER:
            return {
                registerInfo: action.res
            }
        case types.FETCH_FAILURE_REGISTER:
            return {
                registerInfo: action.res
            }
        default:
            return state
    }
}
