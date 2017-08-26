import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
class Index extends React.Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <div>
                {this.props.children}
            </div>
        )
    }
    componentDidMount(){

    }
    componentWillReceiveProps(nextProps){

    }
}
export default Index