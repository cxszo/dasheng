import './index.scss'

import React from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

import Header from '../../components/Header'

class Nofound extends React.Component{
    constructor(props){
        super(props)


    }
    render(){

        return (
            <div className='box'>
                    <div className='word'>
                        <span className='span1'>404!</span>
                        <span className='span2'>页面，我找不到你，我找不到你啊~</span>
                        <Link to="/">跳转到首页</Link>
                    </div>
            </div>
        )
    }

}

export default Nofound