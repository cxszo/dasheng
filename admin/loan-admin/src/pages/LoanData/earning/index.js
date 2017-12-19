import React,{ Component } from 'react'
import { connect } from 'dva';
import { Row, Col, Icon, Card, Tabs, Table, Radio, Menu, Dropdown, Switch } from 'antd';
import moment from 'moment'
import DataSet from '@antv/data-set'

import PageHeaderLayout from '../../../layouts/PageHeaderLayout';
import HeadSift from '../../../components/HeadSift'
import { Column } from '../../../components/Charts'
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
export default class Earning extends Component {
  state = {
    checked: false
  }
  componentDidMount() {
    let date = getTimeDistance('year');
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
  onChange( state ){
    this.setState({checked: state})
  }
  render(){

    const data1 = [
      { week: '9/17', earning: 70.0, refund: 14.6},
      { week: '9/24', earning: 60.5, refund: 12.8},
      { week: '10/1', earning: 43.3, refund: 10.9},
      { week: '10/8', earning: 16.0, refund: 3.3},
      { week: '10/15', earning: 60.9, refund: 9.4},
      { week: '10/22', earning: 56.7, refund: 12.1 },
      { week: '10/29', earning: 56.9, refund: 10.5 },
      { week: '11/5', earning: 66.7, refund: 13.3 },
      { week: '11/12', earning: 63.6, refund: 11.8 },
      { week: '11/19', earning: 56.7, refund: 11.5 },
      { week: '11/26', earning: 63.7, refund: 11.9 },
      { week: '12/3', earning: 72.5, refund: 14.3 },
      { week: '12/10', earning: 64.8, refund: 12.9 },
      { week: '12/17', earning: 62.8, refund: 13.8 }
    ]

    let data = [], fields = [], earning = {name:'收入金额'}, refund = {name:'退款金额'};
    data1.forEach(item => {
      earning[item.week] = item.earning;
      refund[item.week] = item.refund;
      fields.push(item.week);
    })
    data = [ earning, refund ]
    const ds = new DataSet();
    const dv = ds.createView().source(data);
    dv.transform({
      type: 'fold',
      fields, // 展开字段集
      key: '月份', // key字段
      value: '收入退款金额', // value字段
    });
    return (
      <div className={styles.earning}>
        <PageHeaderLayout
          content={<HeadSift  />}
        >
          <Card title="充值金额" extra={<div>转换形态&nbsp;&nbsp;<Switch size={'small'} defaultChecked={false} checked={this.state.checked} onChange={this.onChange.bind(this)} /></div>} bordered={false} loading={false}>
            <div>
              <Column height={300} dv={dv} isState={this.state.checked}/>
            </div>
          </Card>
        </PageHeaderLayout>
      </div>
    )
  }
}
