import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './index.scss'

import Header from '../../components/Header/'
import Msg from './subpage/Msg/'
import Tab from './subpage/Tab/'
import Introduce from './subpage/Introduce/'
class Center extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <Header/>
                <div className="center-wrap">
                    <div className= "left">
                       <Msg/>
                       <Tab/>
                    </div>
                    <div className='right'>
                        <Introduce/>
                    </div>
                </ div>
            </div>
        )
    }
}
export default Center