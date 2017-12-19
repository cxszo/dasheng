import API from '../constant/api'
import fetch from '../utils/fetch'

export default {
  namespace: 'allTrendList',

  state: {
    trendList:[],
    trendLine:[]
  },

  effects: {
    *fetchTrendList({ payload }, { call, put }) {
      const response = yield call(fetch.post, API.dataTrendList,payload);
      yield put({
        type: 'saveList',
        payload: response,
      });
    },
    *fetchTrendLine({ payload }, { call, put }) {
        const response = yield call(fetch.post, API.dataTrendLine,payload);
        yield put({
          type: 'saveLine',
          payload: response,
        });
      },
  },

  reducers: {
    saveList(state, {payload}) {
      return {
        ...state,
        trendList: payload,
      };
    },
    saveLine(state, {payload}) {
        return {
          ...state,
          trendLine: payload,
        };
      },
  },
};
