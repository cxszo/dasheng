import './index.scss'

import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Header from '../../components/Header/'
import Article from './subpage/Article/'
class Detail extends React.Component{
	  constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
	render(){
		return (
			<div>
				<Header/>
				<Article/>
			</div>
		)
	}
}
export default Detail