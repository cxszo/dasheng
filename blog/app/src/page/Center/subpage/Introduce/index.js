import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import './index.scss'
let local_accessToken = localStorage.getItem('accessToken') || '';
class Introduce extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            showOff: false
        }
    }
    toLike(i){
        hashHistory.push("/Center/"+i+"/likes");
    }
    saveText(){
        let {actions} = this.props;
        let val = $('#textInput').val();
        let data = {
            accessToken:local_accessToken,
            say:val
        }
        actions.getEdit(data);//保存评论
        //关掉输入框
        this.setState ({
            showOff: false
        })
        //更新列表
        let _data = {
            accessToken:local_accessToken,
            id:this.props.id
        }
        actions.getGuanZhuData(_data);//保存评论

    }
    hideText(){
        this.setState ({
            showOff: false
        })
    }
    showText(){
        this.setState ({
            showOff: true
        })
    }   
    render(){
        return(
            <div className="introduce">
                <div className="jieshao">
                    <div className="jieshao-wrap">
                        <div className="biaoti">
                            <span>个人介绍</span>
                            <em className={!this.props.data.is_me ? 'edit-ico hide' : 'edit-ico'} onClick={this.showText.bind(this)}>编辑</em>
                        </div>
                        {
                            !this.props.data.say ? '' :
                            <article className="desc">{this.props.data.say}</article>
                        }
                       
                        <section className={this.state.showOff ? '' :'hide'}>
                            <textarea id ='textInput'/>
                            <p>
                                <cite className="save" onClick={this.saveText.bind(this)}>保存</cite>
                                <cite className="cancel"  onClick={this.hideText.bind(this)}>取消</cite>
                            </p>
                        </section>
                        
                    </div>
                    
                    <ul>
                        <li>
                            <a>
                                <i className="fl-ico"></i>
                                我关注的专题/文集 
                            </a>
                        </li>
                        <li>
                            <a className="cur" onClick = {this.toLike.bind(this,this.props.id)}>
                                <i className="like-ico-1"></i>
                                我收藏的文章
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="zt">
                    <p>我创建的专题</p>
                    <p>创建一个新专题</p>
                </div>
                <div className="wj">
                    <div className="title">我的文集</div>
                    <ul>
                        <li>
                            <a>随笔</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Introduce