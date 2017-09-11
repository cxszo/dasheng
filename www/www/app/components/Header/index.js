
import './index.scss'

import React from 'react';

class Home extends React.Component{
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render(){

        return (
            <div className="header"> 
                头部
            </div>
        )
    }
    componentWillMount(){
        console.log('componentWillMount')

    }
}



export default Home