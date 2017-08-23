import './index.scss'
import React from 'react'
import {hotauthor} from '../../../../fetch/HotAuthor'
class HotAuthor extends React.Component{
    constructor(props){
        super(props);
        this.state={
            list:[]
        }
    }
    componentDidMount(){
        hotauthor(list=>{
            this.setState({
                list:list.data
            })
        })
    }
    render(){
        return (
            <div className="hotauthor">
            <div className="hotauthor-content">
                <div>热门原创者</div>
                <ul>
                    {
                        this.state.list.length == 0 ? null :
                        this.state.list.map((v,i)=>{
                            return (
                                <li key={i}>
                                    <a>
                                        <span><img src={v.headimg}/></span>
                                        <span>
                                            <p>{v.name}</p>
                                            <p>{v.say}</p>
                                        </span>
                                        <em>+关注</em>
                                    </a>
                                </li>
                            )
                        })
                   
                    
                }
                </ul>
            </div>
        </div>
        )
    }
}
export default HotAuthor
