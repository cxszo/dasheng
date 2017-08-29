import {combineReducers} from 'redux'

import {routerReducer} from 'react-router-redux'

import BlogList from './Home/homeReducer'
import BlogDetail from './Detail/detailReducer'


const rootReducer =combineReducers(
	{BlogList,BlogDetail}
)
export default rootReducer;
