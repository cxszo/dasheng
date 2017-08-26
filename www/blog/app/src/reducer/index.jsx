import {combineReducers} from 'redux'

import {routerReducer} from 'react-router-redux'

import BlogList from './Home/homeReducer'


const rootReducer =combineReducers(
	{BlogList}
)
export default rootReducer;
