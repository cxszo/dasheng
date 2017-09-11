

import React from 'react';

class Sign_in extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            name:'Sign_in'
        }
    }
    render(){

        return (
            <div> 
                <div>{this.state.name}</div>
                <div>{JSON.stringify(this.props.match, null, '\t')}</div>
            </div>
        )
    }
    componentWillMount(){

    }
}



export default Sign_in