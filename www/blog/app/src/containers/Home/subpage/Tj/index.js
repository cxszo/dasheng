import './index.scss'
import React from 'react'

class Tj extends React.Component{
    render(){
        return (
            <div className="tj">
                <a>
                    <span>
                        <img src="http://cdn2.jianshu.io/assets/web/download-app-qrcode-0257cd2c1d094cba9caa7bdc9e5a1393.png"/>
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
export default Tj