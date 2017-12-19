import API from '../constant/api'
import fetch, { obj2params } from '../utils/fetch'

export default {
  namespace: 'dataAll',

  state: {
    list: [],
    loading: true,
    total:0,
    ps: 10
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      yield put({
        type: 'changeLoading',
        payload: true,
      });
      const response = yield call(fetch.get, `${API.dataAll}?${obj2params(payload)}`);
      let { data=[], total=0, ps=10 } = response
      yield put({
        type: 'save',
        payload: data,
        loading: false,
        total,
        ps
      });
    },
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        list: action.payload,
        loading: action.loading,
        total: action.total,
        ps: action.ps
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
