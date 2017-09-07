import {combineReducers} from 'redux'

import {routerReducer} from 'react-router-redux'

import BlogList from './Home/homeReducer'
import BlogDetail from './Detail/detailReducer'
import BlogCenter from './Center/centerReducer'

const rootReducer =combineReducers(
	{BlogList,BlogDetail,BlogCenter}
)
export default rootReducer;
