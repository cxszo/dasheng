import'./index.scss'
import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
let local_accessToken = localStorage.getItem('accessToken') || '';
class Wj extends React.Component{
	constructor(props) {
		super(props);
		this.state={
           show:false,
           setShow:'',
           setBtn :false,//是否显示设置按钮
           poupShow:false,//修改文集名称层
           modfiyId:''
        }
      
	}
    componentDidMount(){
        
    }
    show(){//是否渲染新建文集的dom
        this.setState({
            show:true
         })
         if(this.state.show == true){
            this.setState({
                show:false
             })
         }
    }
    submit(){//提交文集
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
    cacel(){//取消新建文集
        this.setState({
            show:false
         })
    }
    setShow(i){//触发actions,传当前文集id
        let {actions} = this.props;
        actions.filter(i);//过滤文章
        this.setState({
            setShow:i
        })
    }
    delName(i){//删除文集
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
    setBtn(){//是否显示设置按钮
        this.setState({
            setBtn:true
         })
         if(this.state.setBtn == true){
            this.setState({
                setBtn:false
             })
         }
    }
    modfiyName(i){//显示修改弹层
        this.setState({
            poupShow:true,
            modfiyId:i,
            setBtn:false
        })
    }
    submitName(){//提交新的修改名称
        let{actions} =this.props;
        let modfiy_Input = this.refs.modfiyInput;
        let val = modfiy_Input.value;
        let data ={
            id:this.state.modfiyId,
            name:val,
            accessToken:local_accessToken
        }
        actions.modifyName(data);
        this.setState({
            poupShow:false
        })
    }
    cancelName(){//取消修改文集名称
        this.setState({
            poupShow:false
        })
    }
    backIndex(){//返回首页
        hashHistory.push('/Home')
    }
    toReycle(){
        hashHistory.push('/Recycle')
    }
	render(){
		return (
        <div className="wj-n">
            <div className="home-wrap">
                <a onClick={this.backIndex.bind(this)}>回到首页</a>
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
                            <li key={i} onClick={this.setShow.bind(this,v.id)}>
                                <a href="javascript:void(0)" className={this.state.setShow == v.id || (this.state.setShow=='' && i==0) ? 'active' :''}>
                                    {v.name}
                                    <i onClick = {this.setBtn.bind(this)}></i>  
                                </a>
                                {   
                                    this.state.setShow == v.id ? 
                                    <ul className={this.state.setBtn ? 'dropdown-menu':' dropdown-menu hide'}>
                                        <li onClick={this.modfiyName.bind(this,v.id)}>
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
            <div className="commercial" onClick = {this.toReycle.bind(this)}>
                <a>
                    <i></i>
                    回收站
                </a>
            </div>
            <div className={this.state.poupShow ? 'poup' : 'poup hide'}>
                <div className="poup-wrap">
                    <div className="poup-title">
                        <h3>修改文集内容</h3>
                    </div>
                    <div className="poup-text">
                        <input type="text" ref="modfiyInput"/>
                    </div>
                    <div className="poup-btn">
                        <span onClick={this.cancelName.bind(this)}>取消</span>
                        <cite onClick={this.submitName.bind(this)}>提交</cite>
                    </div>
                </div>
            </div>
        </div>
		)
	}
}
export default Wj