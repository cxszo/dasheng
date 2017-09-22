import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import './index.scss'
let local_accessToken = localStorage.getItem('accessToken') || '';
class Recycle extends React.Component{
    constructor(props){
        super(props)
        this.state={
            recycleList:'',
            title:'',
            content:'',
            id:''
        }
    }
    componentDidMount(){
        let recycleArticle = this.props.recycleArticle || '';
        if(!!recycleArticle){
            localStorage.setItem('recycleArticle',JSON.stringify(recycleArticle));
        }
        let recycle = localStorage.getItem('recycleArticle') || '';
        this.setState({
            recycleList:JSON.parse(recycle)
        })
        
    }
    handler(i){
        let recycleArr = this.state.recycleList || '';
        let recycleList= recycleArr.find((v,n)=>{return v.id==i})
        this.setState({
            title:recycleList.title,
            content:recycleList.content,
            id:recycleList.id
        })
    }
    hfArticle(i){//恢复文章
        let{actions} = this.props;
        let data = {
            id:i,
            accessToken:local_accessToken
        }
        actions.hfArticleData(data);

        let local_recycle = localStorage.getItem('recycleArticle') || '';
        let  _local_recycle = JSON.parse(local_recycle);
            let temp =_local_recycle.filter((v,n)=>{
                return v.id != i
            });
            
            localStorage.setItem('recycleArticle',JSON.stringify(temp));
            this.setState({
                title:'',
                recycleList:temp,
                id:'',
                content:''
               
            })
    }
    allDelArticle(i){//彻底删除
        let{actions} = this.props;
        let data = {
            id:i,
            accessToken:local_accessToken
        }
        actions.allDelArticleData(data);

        let local_recycle = localStorage.getItem('recycleArticle') || '';
        let  _local_recycle = JSON.parse(local_recycle);
            let temp =_local_recycle.filter((v,n)=>{
                return v.id != i
            });
            
            localStorage.setItem('recycleArticle',JSON.stringify(temp));
            this.setState({
                title:'',
                recycleList:temp,
                id:'',
                content:''
               
            })
    }
    render(){
       let recycleList = this.state.recycleList || '';
       console.log(typeof recycleList)
        return (
            <div>
                <div className="recycle">
                    <div className='left'>
                        <h3>回收站({recycleList.length })</h3>
                        <ul>
                            {
                                recycleList  == '' ? '' :
                                recycleList.map((v,i)=>{
                                    return (
                                        <li key = {i} onClick={this.handler.bind(this,v.id)}>
                                            <i></i>
                                            {v.title}
                                        </li>
                                    )
                                })
                               
                            }
                            
                        </ul>
                    </div>
                    <div className="right">
                        <div className="title-right">
                            <h3>{this.state.title}</h3>
                        </div>
                        <div className="text-wrap">
                            <p>{this.state.content.replace(/<\/?[^>]*>/g,'')}</p>
                        </div>
                        <div className="btn-del-hf">
                            <span onClick={this.hfArticle.bind(this,this.state.id)}>恢复文章</span>
                            <span onClick={this.allDelArticle.bind(this,this.state.id)}>彻底删除</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Recycle