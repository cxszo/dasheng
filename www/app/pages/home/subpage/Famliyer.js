

import React from 'react'


const xxx = require('../img/tuhao.png')

const famliyer_logo = [
    'http://img.mukewang.com/57d76ed50001443502000267-100-100.jpg',
    'http://img.mukewang.com/559db1e70001ee0d01800180-100-100.jpg',
    'http://img.mukewang.com/577baef700019c4501400140-100-100.jpg',
    'http://img.mukewang.com/5458659400017f0802190220-100-100.jpg',
    'http://img.mukewang.com/591fadcb000104ef05390959-100-100.jpg',
    'http://img.mukewang.com/58d9c48f0001ad0304070270-100-100.jpg',
    'http://img.mukewang.com/569f432c00013fe201000100-100-100.jpg',
    'http://img.mukewang.com/533e4cf4000151f602000200-100-100.jpg',
    'http://img.mukewang.com/533e55d10001c34d02000200-100-100.jpg',
    'http://img.mukewang.com/56effec20001602301000100-100-100.jpg',
    'http://img.mukewang.com/597c3ae9000167a705000335-100-100.jpg'
]
const x20 = new Array(22).fill('');

class Famliyer extends React.Component{
    constructor(props){
        super(props)

    }
    render(){
        return (
            <div className="famliyer">
                <div className="famliyer-contain">
                    <h3 className="types-title">			
                        <span className="tit-icon tit-icon icon-star-l tit-icon-l"></span>
                        <em>吃</em>／<em>瓜</em>／<em>群</em>／<em>众</em>
                        <span className="tit-icon icon-star-r tit-icon-r"></span>		
                    </h3>
                    <div>
                        <dl className="famou-top">
                            <dd>                                
                                <div className="lead-item-photo">                                    
                                    <a target="_blank" href="javascript:;">
                                        <img src="http://img.mukewang.com/592530b40001e68809880996-100-100.jpg" />
                                    </a>                                    
                                    <span className="purple"></span>                                
                                </div>                                
                                <p className="lead-item-name ellipsis">old坛酸菜</p>                                
                                <p className="lead-item-tit">公积金一霸</p>                            
                            </dd>
                            <dd>                                
                                <div className="lead-item-photo">                                    
                                    <a target="_blank" href="javascript:;">
                                        <img src="http://img.mukewang.com/570b610500015c6802630250-100-100.jpg" />
                                    </a>                                    
                                    <span className="green"></span>                                
                                </div>                                
                                <p className="lead-item-name ellipsis">秋田云</p>                                
                                <p className="lead-item-tit">🔍</p>                            
                            </dd>
                            <dd>                                
                                <div className="lead-item-photo">                                    
                                    <a target="_blank" href="javascript:;">
                                        <img src="http://img.mukewang.com/5642da820001d11301000100-100-100.jpg" />
                                    </a>                                    
                                    <span className="blue"></span>                                
                                </div>                                
                                <p className="lead-item-name ellipsis">火影超</p>                                
                                <p className="lead-item-tit">ReactNative小王子</p>                            
                            </dd>
                            <dd>                                
                                <div className="lead-item-photo">                                    
                                    <a target="_blank" href="javascript:;">
                                        <img src={`${xxx}`} />
                                    </a>                                    
                                    <span className="yellow"></span>                                
                                </div>                                
                                <p className="lead-item-name ellipsis">xxx</p>                                
                                <p className="lead-item-tit">xxxx</p>                            
                            </dd>
                        </dl>
                        <dl className="famous-bottom">
                            {
                                x20.map((item, index)=>{
                                    return (
                                        <dd className="other-item purple" key={index}>                                
                                            <a href="javascript:;">                                
                                                <img src={`${famliyer_logo[Math.floor(Math.random()*11)]}`} /> 
                                            </a>                            
                                        </dd>
                                    )
                                })
                            }
                        </dl>
                    </div>
                </div>
            </div>
        )
    }
}

export default Famliyer

