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
export default class Recharge extends Component {
  state = {
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
    list.reverse();
    let data = list.map(v => {
      return { week: v.start_date.substr(5) , recharge: +v.recharge/10000, recharge_user: +v.recharge_user }
    })
    console.log(data)
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
    return (
      <div className={styles.recharge}>
        <PageHeaderLayout
          content={<HeadSift selDate={this.selDate.bind(this)} />}
        >
          <Card title="充值金额" bordered={false} loading={loading}>
            <div>
              <LineChart height={300} dv={dv} title='万元'/>
            </div>
          </Card>
          <Card title="充值用户" bordered={false} loading={loading}>
            <div>
              <LineChart height={300} dv={dv1}/>
            </div>
          </Card>
        </PageHeaderLayout>
      </div>

      
    )
  }
}

/**

 */
