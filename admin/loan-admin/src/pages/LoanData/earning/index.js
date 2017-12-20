import React,{ Component } from 'react'
import { connect } from 'dva';
import { Row, Col, Icon, Card, Tabs, Table, Radio, Menu, Dropdown, Switch } from 'antd';
import moment from 'moment'
import DataSet from '@antv/data-set'
import numeral from 'numeral'
import PageHeaderLayout from '../../../layouts/PageHeaderLayout';
import HeadSift from '../../../components/HeadSift'
import { Column, Donut, Pie } from '../../../components/Charts'
import { getTimeDistance } from '../../../utils/utils';
const { TabPane } = Tabs;
import styles from './index.less'

const { DataView } = DataSet;

const loopColumns = [{
  title: '类型',
  dataIndex: 'type',
  key: 'type',
}, {
  title: '金额',
  dataIndex: 'money',
  key: 'money',
}];

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
    checked: true
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
  onChange( state ){
    this.setState({checked: state})
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
    let data = [], fields = [], earning = {name:'收入金额'}, refund = {name:'退款金额'};
    let loop = [], loop_earning = 0, loop_refund = 0, loopData = [];
    let isData = true;
    list.forEach(v => {
      let week = `${v.start_date.substr(5)}~${v.end_date.substr(5)}`;
      loop_earning += +v.recharge;
      loop_refund += +v.refund;
      earning[week] = Math.round(+v.recharge/100)/100;
      refund[week] = Math.round(+v.refund/100)/100;
      fields.push(week);
    })

    if(loop_earning == 0){
      isData = false
    }

    data = [ earning, refund ]
    const ds = new DataSet();
    const dv = ds.createView().source(data);
    dv.transform({
      type: 'fold',
      fields, // 展开字段集
      key: '月份', // key字段
      value: '收入退款金额', // value字段
    });
    dv.transform({ 
      type: 'reverse',
    });

    loopData.push({type: '净收入', money: '￥'+numeral(loop_earning).format(',')})
    loopData.push({type: '退款', money: '￥'+numeral(loop_refund).format(',')})
    loopData.push({type: '总收入', money: '￥'+numeral(loop_refund+loop_earning).format(',')})

    loop = [
      { item: '净收入', count: +loop_earning },
      { item: '退款', count: +loop_refund },
    ];
    const loop_dv = new DataView();
    loop_dv.source(loop).transform({
      type: 'percent',
      field: 'count',
      dimension: 'item',
      as: 'percent'
    });

    return (
      <div className={styles.earning}>
        <PageHeaderLayout
          content={<HeadSift selDate={this.selDate.bind(this)} />}
        >
          <Card title="净收入&退款" extra={<div>转换形态&nbsp;&nbsp;<Switch size={'small'} defaultChecked={true} checked={this.state.checked} onChange={this.onChange.bind(this)} /></div>} bordered={false} loading={false}>
            <div>
              {
                isData ?
                <Column height={300} dv={dv} isState={this.state.checked}/>
                :<div>暂无数据</div>
              }
            </div>
          </Card>
          <Card title="总额对比" bordered={false} loading={false}>
            <Row gutter={24}>
              <Col span={11}>
              {
                isData ?
                <Pie data={loop_dv} height={295}/>
                :null
              }
              </Col>
              <Col span={5}></Col>
              <Col span={8}>
                <Table dataSource={loopData} rowKey={record => record.type} columns={loopColumns} bordered pagination={false} size="small"/>
              </Col>
            </Row>
          </Card>
        </PageHeaderLayout>
      </div>
    )
  }
}
