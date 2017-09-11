

import React from 'react';


import Header from '../../components/Header'


class Home extends React.Component{
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render(){

        return (
            <div className="home"> 
                <Header />
                aaa



            </div>
        )
    }
    componentWillMount(){
        console.log('componentWillMount')

    }
}



export default Home