import API from '../constant/api'
import fetch, { obj2params } from '../utils/fetch'

export default {
  namespace: 'repay',

  state: {
    res: {},
    loading: true,
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(fetch.get, `${API.repay}?${obj2params(payload)}`);
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
        res: action.payload,
        loading: action.loading
      };
    },
  },
};
