import'./index.scss'
import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
let local_accessToken = localStorage.getItem('accessToken') || '';
class Wj extends React.Component{
	constructor(props) {
		super(props);
		this.state={
           show:false,
           setShow:'0',
           setBtn :false
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
                show:false
               
               
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
    delName(i){
        let {actions} =this.props;
   
        let data = {
            id:i,
            accessToken:local_accessToken
        }
        actions.delWj(data);//删除文集
        this.setState({
            setBtn:false
         })
    }
    setBtn(){
        this.setState({
            setBtn:true
         })
         if(this.state.setBtn == true){
            this.setState({
                setBtn:false
             })
         }
        
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
                            !v.is_show ? '' :
                            <li key={i} onClick={this.setShow.bind(this,i)}>
                                <a href="javascript:void(0)" className={this.state.setShow == i ? 'active' :''}>
                                    {v.name}
                                    <i onClick = {this.setBtn.bind(this)}></i>
                                </a>
                                {   
                                    this.state.setShow == i ? 
                                    <ul className={this.state.setBtn ? 'dropdown-menu':' dropdown-menu hide'}>
                                        <li>
                                            <cite></cite>
                                            修改名称
                                        </li>
                                        <li className="divider"></li>
                                        <li onClick={this.delName.bind(this,v.id)}>
                                            <cite></cite>
                                            删除文集
                                        </li>
                                    </ul>
                                    :''
                                }
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