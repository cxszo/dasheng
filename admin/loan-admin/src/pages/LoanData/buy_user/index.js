import React,{ Component } from 'react'
import { connect } from 'dva';
import { Row, Col, Icon, Card, Tabs, Table, Radio, Menu, Dropdown } from 'antd';
import moment from 'moment'
import DataSet from '@antv/data-set'

import PageHeaderLayout from '../../../layouts/PageHeaderLayout';
import HeadSift from '../../../components/HeadSift'
import { LineChart } from '../../../components/Charts'
import { getTimeDistance } from '../../../utils/utils';
const { TabPane } = Tabs;
import styles from './index.less'

const ldata = {
  startDate:'',
  endDate:''
}
let cData = {
  ...ldata
}
@connect(state => ({
  dataAll: state.dataAll,
}))
export default class BuyUser extends Component {
  state = {
  }
  componentDidMount() {
    let date = getTimeDistance('halfyear');
    let startDate = moment(date[0]).format('YYYY-MM-DD');
    let endDate = moment(date[1]).format('YYYY-MM-DD')
    Object.assign(cData, {
      startDate,
      endDate
    })
    this.fetch()
   
  }
  componentWillUnmount() {

  }
  fetch(){
    const { dispatch } = this.props;
    dispatch({
      type: 'dataAll/fetch',
      payload: cData,
    });
  }
  selDate( date ) {
    let startDate = moment(date[0]).format('YYYY-MM-DD');
    let endDate = moment(date[1]).format('YYYY-MM-DD')
    Object.assign(cData, {
      startDate,
      endDate
    })
    this.fetch()
  }
  render(){
    let { 
      dataAll: { list, loading },
    } = this.props;
    let data = list.map(v => {
      return { week: `${v.start_date.substr(5)}~${v.end_date.substr(5)}` , count: +v.buy}
    })

    

    const ds = new DataSet();
    const dv = ds.createView().source(data);
    dv.transform({
      type: 'rename',
      map: {
        count: '消费人数',
      }
    });
    dv.transform({
      type: 'fold',
      fields: [ '消费人数' ], // 展开字段集
      key: 'city', // key字段
      value: 'temperature', // value字段 y轴
    });
    dv.transform({ 
      type: 'reverse',
    });
    return (
      <div className={styles.buy_user}>
        <PageHeaderLayout
          content={<HeadSift selDate={this.selDate.bind(this)} />}
        >
          <Card title="消费用户_周变化曲线" bordered={false} loading={false}>
            <div>
              <LineChart height={300} dv={dv}/>
            </div>
          </Card>
        </PageHeaderLayout>
      </div>

      
    )
  }
}

/**

 */
