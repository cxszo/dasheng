import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './index.scss'

import Header from '../../components/Header/'
import Msg from './subpage/Msg/'
import Tab from './subpage/Tab/'
import Introduce from './subpage/Introduce/'
class Following extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                关注
            </div>
        )
    }
}
export default Following