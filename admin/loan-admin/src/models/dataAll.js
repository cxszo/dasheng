import API from '../constant/api'
import fetch, { obj2params } from '../utils/fetch'

export default {
  namespace: 'dataAll',

  state: {
    list: [],
    loading: true,
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(fetch.get, `${API.dataAll}?${obj2params(payload)}`);
      yield put({
        type: 'save',
        payload: response,
        loading: false
      });
    },
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        list: action.payload,
        loading: action.loading
      };
    },
  },
};
