import React,{ Component } from 'react'
import { connect } from 'dva';
import { Row, Col, Icon, Card, Tabs, Table, Radio, Menu, Dropdown } from 'antd';
import moment from 'moment'
import DataSet from '@antv/data-set'
import numeral from 'numeral'

import PageHeaderLayout from '../../../layouts/PageHeaderLayout';
import HeadSift from '../../../components/HeadSift'
import { LineChart, yuan } from '../../../components/Charts'
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
export default class Recharge extends Component {
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
    let rechargeUserAll = 0, rechargeAll = 0;
    let data = list.map(v => {
      rechargeUserAll += +v.recharge_user;
      rechargeAll += +v.recharge
      return { week: `${v.start_date.substr(5)}~${v.end_date.substr(5)}` , recharge: +v.recharge/10000, recharge_user: +v.recharge_user }
    })
    const ds = new DataSet();
    const dv = ds.createView().source(data);
    dv.transform({
      type: 'rename',
      map: {
        recharge: '充值金额',
      }
    });
    dv.transform({
      type: 'fold',
      fields: [ '充值金额' ], // 展开字段集
      key: 'city', // key字段
      value: 'temperature', // value字段 y轴
    });
    dv.transform({ 
      type: 'reverse',
    });
    const ds1 = new DataSet();
    const dv1 = ds1.createView().source(data);
    dv1.transform({
      type: 'rename',
      map: {
        recharge_user: '充值人数',
      }
    });
    dv1.transform({
      type: 'fold',
      fields: [ '充值人数' ], // 展开字段集
      key: 'city', // key字段
      value: 'temperature', // value字段 y轴
    });
    dv1.transform({ 
      type: 'reverse',
    });
    return (
      <div className={styles.recharge}>
        <PageHeaderLayout
          content={<HeadSift selDate={this.selDate.bind(this)} />}
        >
          <Card title="充值金额" bordered={false} extra={<div className={styles.title_extra}>累计充值：{numeral(rechargeAll).format('0,0')}</div>} loading={loading}>
            <div>
              <LineChart height={400} dv={dv} title='万元'/>
            </div>
          </Card>
          <Card title="充值用户" bordered={false} extra={<div className={styles.title_extra}>累计充值用户：{numeral(rechargeUserAll).format('0,0')}人</div>} loading={loading}>
            <div>
              <LineChart height={400} dv={dv1}/>
            </div>
          </Card>
        </PageHeaderLayout>
      </div>

      
    )
  }
}

