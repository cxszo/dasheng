import {combineReducers} from 'redux'

import {routerReducer} from 'react-router-redux'

import BlogList from './Home/homeReducer'
import BlogDetail from './Detail/detailReducer'
import BlogCenter from './Center/centerReducer'
import BlogNote from './Note/noteReducer'
import BlogSign from './Sign/signReducer'

const rootReducer =combineReducers(
	{BlogList,BlogDetail,BlogCenter,BlogNote,BlogSign}
)
export default rootReducer;
