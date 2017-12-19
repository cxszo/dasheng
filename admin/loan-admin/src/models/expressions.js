import API from '../constant/api'
import fetch, { obj2params } from '../utils/fetch'

export default {
  namespace: 'expressions',

  state: {
    list: [],
    total: 0,
    loading: true,
  },

  effects: {
    *fetch({ payload }, { call, put }) {

      yield put({
        type: 'changeLoading',
        payload: true,
      });
      const response = yield call(fetch.get, `${API.proSettingList}?${obj2params(payload)}`);
      let { code, data='' } = response;
      let { datas=[], total=0 } = data;
      yield put({
        type: 'save',
        payload: datas,
        loading: false,
        total
      });
    },
    *modify({ payload }, { call, put }) {
      const response = yield call(fetch.get, `${API.modify}?${obj2params(payload)}`);
      console.log(response)
      // yield put({
      //   type: 'save',
      //   payload: response,
      //   loading: false
      // });
    },
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        list: action.payload,
        loading: action.loading,
        total: action.total
      };
    },
    changeLoading(state, action) {
      return {
        ...state,
        loading: action.payload,
      };
    },
  },
};
