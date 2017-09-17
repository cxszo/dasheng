
import React from 'react'


class Footer extends React.Component{
    constructor(props){
        super(props)

    }
    render(){

        return(
            <div className="footer">
                <div className="footer-contain">
                    <div className="footer-wrap idx-width">      
                        <div className="footer-sns clear-fix">      	
                            <div className="l">      		
                                <a href="javascript:;" className="footer-sns-weixin wx float-left" title="微信">
                                    <i className="footer-sns-weixin-expand"></i>	        
                                </a>	        
                                <p>官方公众号</p>      	
                            </div>      	
                            <div className="l">      		
                                <a href="javascript:;" className="footer-sns-weibo hide-text float-left" title="新浪微博">
                                    <i className="footer-sns-weixin-expand"></i>	
                                </a>      
                                <p>官方微博</p>      	
                            </div>      
                        </div>    
                    </div>
                    <div className="footer-link">     
                        <a href="javascript:;"  title="企业合作">企业合作</a>      
                        <a href="javascript:;"  title="人才招聘">人才招聘</a>      
                        <a href="javascript:;"  title="联系我们">联系我们</a>            
                        <a href="javascript:;"  title="常见问题">常见问题</a>      
                        <a href="javascript:;"  title="意见反馈">意见反馈</a>     
                        <a href="javascript:;"  title="友情链接">友情链接</a>    
                    </div>
                    <div className="footer-copyright">     
                        <p>©&nbsp;2017&nbsp;9188.group&nbsp;&nbsp;沪ICP备 13046642号-2</p>    
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer