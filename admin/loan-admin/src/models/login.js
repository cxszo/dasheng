import { routerRedux } from 'dva/router';
import fetch from '../utils/fetch'
import API from '../constant/api'
import { TOKEN } from '../constant/localKey'
export default {
  namespace: 'login',

  state: {
    status: undefined,
  },

  effects: {
    //用户密码登录
    *submit({ payload }, { call, put }) {
      yield put({
        type: 'changeSubmitting',
      });
      const response = yield call(fetch.post, API.login, payload);
      if(response.token){
        localStorage.setItem(TOKEN, response.token)
      }
      yield put({
        type: 'changeLoginStatus',
        payload: response,
      });
    },
    //对此登录
    *logout(_, { put }) {
      localStorage.removeItem(TOKEN)
      yield put({
        type: 'changeLoginStatus',
        payload: {
          status: false,
        },
      });
      yield put(routerRedux.push('/user/login'));
    },
  },

  reducers: {
    changeLoginStatus(state, { payload }) {
      return {
        ...state,
        status: payload.status,
        submitting: false,
      };
    },
    changeSubmitting(state, { payload }) {
      return {
        ...state,
        submitting: payload,
      };
    },
  },
};
