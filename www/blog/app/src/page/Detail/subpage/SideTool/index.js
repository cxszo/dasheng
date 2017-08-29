import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './index.scss'
class SideTool extends React.Component{
    render(){
        return (
            <div className="sidetool">
               <ul>
                   <li>回顶</li>
                   <li>收藏</li>
               </ul>
            </div>
        )
    }
}
export default SideTool