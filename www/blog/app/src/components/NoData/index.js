import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './index.scss'
class NoData extends React.Component{
    render(){
        return (
            <div className="nodata">
              暂无文章哟~
            </div>
        )
    }
}
export default NoData