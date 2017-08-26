import './index.scss'
import React from 'react'
let ImageSrc=require('./img/qcode.png')
class Tjian extends React.Component{
    render(){
        return (
            <div className="Tjian">
                <a>
                    <span>
                        <img src={ImageSrc}/>
                    </span>
                    <span>
                        <div className="info">
                            <p>欢迎关注我们的公众平台</p>
                            <p>随时随地发现写作的魅力</p>
                        </div>
                    </span>
                </a>
            </div>
        )
    }
}
export default Tjian