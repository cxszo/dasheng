import { fork } from 'redux-saga/effects';
import sign from './sign';

export default function* rootSaga() {
  yield fork(sign);
}
