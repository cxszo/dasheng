import React from 'react'
import './index.scss'
 class Loading extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="poup-spinner">
                <div className="spinner">
                    <div className="bounce1"></div>
                    <div className="bounce2"></div>
                    <div className="bounce3"></div>
                </div>
            </div>
        )
    }

 }
 export default Loading