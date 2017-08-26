import {createStore,applyMiddleware} from 'redux'
import rootReducer from '../reducer'
import thunk from 'redux-thunk'


let createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
let store = createStoreWithMiddleware(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store