

import React from 'react'

const zs = require('../img/ico2.jpg')
class Worker extends React.Component{
    constructor(props){
        super(props)

    }
    render(){
        return (
            <div className="worker">	
                <div className="container-types">		
                    <h3 className="types-title">			
                        <span className="tit-icon icon-star-l tit-icon-l"></span>
                        <em>码</em>／<em>砖</em>／<em>同</em>／<em>学</em>
                        <span className="tit-icon icon-star-r tit-icon-r"></span>		
                    </h3>		
                    <div className="lecturer-list">																		
                        <a href="javascript:;" className="lecturer-item">					
                            <img className="lecturer-uimg" src="https://avatars1.githubusercontent.com/u/30589347?v=4&amp;s=200" />
                            <span className="lecturer-name">么么茶</span>					
                            <span className="lecturer-title">程序员</span>					
                            <span className="lecturer-p">
                                电影中角色也会有不同
                            </span>				
                        </a>
                        <a href="javascript:;" className="lecturer-item">					
                            <img className="lecturer-uimg" src={`${zs}`} />
                            <span className="lecturer-name">大大大山</span>					
                            <span className="lecturer-title">前端工程师</span>					
                            <span className="lecturer-p">
                                每一个小人物也拥有小的梦
                            </span>				
                        </a>
                    </div>
                </div>
            </div>
        )
    }

}

export default Worker