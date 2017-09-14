

import { call, fork, take, select, put, cancel } from 'redux-saga/effects';
import { takeEvery, takeLatest } from 'redux-saga';
import types from '../constant/actionTypes';
import { TOKEN } from '../constant/local'
import API from '../constant/api';
import * as fetch from '../fetch'


const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ium9kOWkqeWkp-WcoyIsInBhc3N3b3JkIjoibG92ZW1lIiwiaWF0IjoxNTA0MTA2NTcxLCJleHAiOjE1NjQ1ODY1NzF9.iaaV422XNemhr4kioCWGt5b0RgLKEkKCf_fTQpEeuic'

//获取用户信息
function* gainUserInfo() {
    try {
        const res = yield call(fetch.get, `${API.getUserInfo}?accessToken=${localStorage[TOKEN]}`)
        yield put({type: types.FETCH_SUCCEED_USERINFO, res});
    } catch (err) {
        yield put({type: types.FETCH_FAILURE_USERINFO, res: {code:'400'}});
    }
}

//登录
function* goLogin({ payload:{account:username, password} }){
    password = btoa(password)
    try {
        const res = yield call(fetch.post, `${API.goLogin}`, {username, password})
        yield put({type: types.FETCH_SUCCEED_LOGIN, res})
    } catch (err) {
        yield put({type: types.FETCH_FAILURE_LOGIN, res: {code:'400'}})
    }
}
//注册
function* goRegister({ payload:{username, callphone, password}}){
    password = btoa(password)
    try {
        const res = yield call(fetch.post, `${API.goRegister}`, {username, callphone, password})
        yield put({type: types.FETCH_SUCCEED_REGISTER, res})
    } catch (err) {
        yield put({type: types.FETCH_FAILURE_REGISTER, res: {code:'400'}})
    }
}



export default function* rootSaga() {
    yield [
        takeLatest(types.FETCH_USERINFO, gainUserInfo),
        takeLatest(types.FETCH_SIGNIN, goLogin),
        takeLatest(types.FETCH_SIGNUP, goRegister)
    ]

}


