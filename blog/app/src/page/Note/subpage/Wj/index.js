import'./index.scss'
import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
let local_accessToken = localStorage.getItem('accessToken') || '';
class Wj extends React.Component{
	constructor(props) {
		super(props);
		this.state={
           show:false
		}
	}
    componentDidMount(){
        
    }
    newWj(){
    
    }
    show(){
        this.setState({
            show:true
         })
         if(this.state.show == true){
            this.setState({
                show:false,
                setShow:'0',
               
             })
         }
    }
    submit(){
        let {actions,code,desc} =this.props;
        var input = this.refs.nameInput;
        var inputValue = input.value;
        if(!inputValue){
            return alert('请输入文集名称')
        }
        let data = {
            name:inputValue,
            accessToken:local_accessToken,
            seq:'-1'
        }
        actions.getNewData(data);//新建文集
        this.setState({
            show:false
        })
        
    }
    cacel(){
        this.setState({
            show:false
         })
    }
    setShow(i){
        this.setState({
            setShow:i
        })
    }
	render(){
		return (
        <div className="wj-n">
            <div className="home-wrap">
                <a>回到首页</a>
            </div>
            <div className="new-notebook">
                <a onClick={this.show.bind(this)}>+新建文集</a>
            </div>
            <div className={this.state.show? 'new-wj' :'new-wj hide'}>
                <input type="text" ref="nameInput" placeholder="请输入文集名..."/>
                <div className="new-wj-btn">
                    <span onClick ={this.submit.bind(this)}>提交</span>
                    <cite onClick ={this.cacel.bind(this)}>取消</cite>
                </div>
            </div>
            <ul className="note-bookes">
                {
                    this.props.data.length == '' ? '' :
                    this.props.data.map((v,i)=>{
                        return (
                            <li key={i} onClick={this.setShow.bind(this,i)}>
                                <a href="javascript:void(0)" className={!!this.state.setShow == i ? 'active' :''}>
                                    {v.name}
                                    <i></i>
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
            <div className="commercial">
                <a>
                    <i></i>
                    回收站
                </a>
            </div>
        </div>
		)
	}
}
export default Wj