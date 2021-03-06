import React,{ Component } from 'react'
import { connect } from 'dva';
import { Row, Col, Icon, Card, Tabs, Table, Radio, Menu, Dropdown } from 'antd';
import moment from 'moment'
import DataSet from '@antv/data-set'
import numeral from 'numeral'
import PageHeaderLayout from '../../../layouts/PageHeaderLayout';
import HeadSift from '../../../components/HeadSift'
import { LineChart, Pie } from '../../../components/Charts'
import { getTimeDistance } from '../../../utils/utils';
const { TabPane } = Tabs;
import styles from './index.less'
const { DataView } = DataSet;
const loopColumns = [{
  title: '类型',
  dataIndex: 'type',
  key: 'type',
}, {
  title: '人数',
  dataIndex: 'people',
  key: 'people',
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
export default class AddUser extends Component {
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
    let add_total = 0, apply_total = 0;
    let data = list.map(v => {
      add_total += +v.add;
      apply_total += +v.apply;
      return { week: `${v.start_date.substr(5)}~${v.end_date.substr(5)}` , add: +v.add, apply: +v.apply }
    })
    let isData = true;
    let loopData = [];
    if(!add_total){
      isData = false
    }
    const ds = new DataSet();
    const dv = ds.createView().source(data);
    dv.transform({
      type: 'rename',
      map: {
        add: '新增用户',
        apply: '申请认证用户' 
      }
    });
    dv.transform({
      type: 'fold',
      fields: [ '新增用户', '申请认证用户' ], // 展开字段集
      key: 'city', // key字段
      value: 'temperature', // value字段 y轴
    });
    dv.transform({ 
      type: 'reverse',
    });

    loopData.push({type: '新增人数', people: numeral(add_total).format(',')})
    loopData.push({type: '申请认证人数', people: numeral(apply_total).format(',')})

    let loop = [
      { item: '新增人数', count: +add_total },
      { item: '申请认证人数', count: +apply_total },
    ];
    const loop_dv = new DataView();
    loop_dv.source(loop).transform({
      type: 'percent',
      field: 'count',
      dimension: 'item',
      as: 'percent'
    });

    return (
      <div className={styles.add_user}>
        <PageHeaderLayout
          content={<HeadSift selDate={this.selDate.bind(this)} />}
        >
          <Card title="新增认证用户及申请认证用户_周变化曲线" bordered={false} loading={false}>
            <div>
              <LineChart height={400} dv={dv}/>
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