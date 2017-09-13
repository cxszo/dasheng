import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducers';
import rootSaga from '../sagas';



const sagaMiddleware = createSagaMiddleware();
let enhancer;
if(_dev_){
  const composeEnhancers = typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
  
  enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware),
  );
}else{
  enhancer = applyMiddleware(sagaMiddleware)
}


export default function configureStore() {
  const store = createStore(
    reducer,
    enhancer
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

