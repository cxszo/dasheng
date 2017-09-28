import {combineReducers} from 'redux'

import {routerReducer} from 'react-router-redux'

import BlogList from './Home/homeReducer'
import BlogDetail from './Detail/detailReducer'
import BlogCenter from './Center/centerReducer'
import BlogNote from './Note/noteReducer'
import SignIn from './SignIn/signInReducer'

const rootReducer =combineReducers(
	{BlogList,BlogDetail,BlogCenter,BlogNote,SignIn}
)
export default rootReducer;
