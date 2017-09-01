import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './index.scss'

import Header from '../../components/Header/'
import Msg from './subpage/Msg/'
import Tab from './subpage/Tab/'
import Introduce from './subpage/Introduce/'
class Followers extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                粉丝
            </div>
        )
    }
}
export default Followers