import API from '../constant/api'
import fetch, { obj2params } from '../utils/fetch'

export default {
  namespace: 'dataDetail',

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
      const response = yield call(fetch.get, `${API.dataDetail}?${obj2params(payload)}`);
      let { code, data='', desc } = response;
      let { dataDetailList=[], total=0 } = data;
      yield put({
        type: 'save',
        payload: dataDetailList,
        loading: false,
        total
      });
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
