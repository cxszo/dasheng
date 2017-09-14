

import React from 'react';


let bannerLogo = [require('../img/banner2.jpg'), require('../img/banner3.jpg'), require('../img/banner6.jpg')]

class Banner extends React.Component{
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render(){
        let index = Math.floor(Math.random()*3);
        let banner_opt = {backgroundImage: `url(${bannerLogo[index]})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}
        return (
            <div className="banner">
                <div className="banner-contain" style={banner_opt}></div>
            </div>
        )
    }
    componentWillMount(){

    }
}



export default Banner