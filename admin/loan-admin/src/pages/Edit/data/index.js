import React,{ Component } from 'react'
import { connect } from 'dva';
import { Row, Col, Icon, Card, Tabs, Table, Radio, Menu, notification } from 'antd';
import moment from 'moment'
import numeral from 'numeral'
import PageHeaderLayout from '../../../layouts/PageHeaderLayout';
import HeadSift from '../../../components/HeadSift'
import fetch, { obj2params } from '../../../utils/fetch'
import API from '../../../constant/api'
import { getTimeDistance } from '../../../utils/utils';

const { TabPane } = Tabs;
import styles from './index.less'





const ldata = {
  ps:'10',
  pn:'1',
  startDate:'',
  endDate:''
}
let cData = {
  ...ldata
}
@connect(state => ({
  dataAll: state.dataAll,
}))
export default class ReadData extends Component {
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
  async fetch(){
    const { dispatch } = this.props;
    dispatch({
      type: 'dataAll/fetch',
      payload: cData,
    });
  }
  /**
   * @param pagination {Object}   {current: 2, pageSize: 10}//当前第几页 和一页多少条
   * @param sorter {Object}       {order: "descend", columnKey: "arpu"}//ascend 升序 descend 降序
   */
  handleTableChange = (pagination, filters, sorter) => {
    let pn = pagination.current;
    let ps = pagination.pageSize;
    Object.assign(cData, {
      pn,
      ps
    })
    this.fetch();
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
  edit(){
    notification.open({
      message: '',
      description: '待开发.',
    });
  }
  render(){
    
    let { 
      dataAll: { list, loading, total, ps },
    } = this.props;
    const columns = [{
      title: '日期',
      dataIndex: 'date',
      key: 'date',
      width: 120,
      fixed: 'left',
    },{
      title: '充值金额(万)',
      dataIndex: 'recharge',
      key: 'recharge',
    },{
      title: '新增用户',
      dataIndex: 'add',
      key: 'add',
    },{
      title: '申请认证用户',
      dataIndex: 'apply',
      key: 'apply',
    },{
      title: '消费用户',
      dataIndex: 'buy',
      key: 'buy',
    },{
      title: '充值用户',
      dataIndex: 'recharge_user',
      key: 'recharge_user',
    },{
      title: '净收入(万)',
      dataIndex: 'profit',
      key: 'profit',
    },{
      title: '退款',
      dataIndex: 'refund',
      key: 'refund',
    },{
      title: '操作',
      dataIndex: 'operation',
      fixed: 'right',
      width: 100,
      render: (text, record) => {return <a href="javascript:;" onClick={this.edit.bind(this, record)} >编辑 <Icon type="edit" style={{ fontSize: 5 }} /></a>}
    }]
    let dataSource = list.map((v, index) => {
      return {
        date: v.start_date+'~'+v.end_date,
        ...v,
        recharge: numeral(+v.recharge).format('0,0'),
        profit: numeral(+v.profit).format('0,0'),
      }
    })
    return (
      <div className={styles.add_user}>
        <PageHeaderLayout
          content={<HeadSift selDate={this.selDate.bind(this)} />}
        >
        <Card bordered={false}>
          <Table columns={columns}
            rowKey={(v)=>v.recharge}
            dataSource={dataSource}
            loading={loading}
            onChange={this.handleTableChange}
            bordered
            scroll={{ x: 900 }}
            pagination={{
              style: { marginBottom: 0 },
              showQuickJumper: true,
              showSizeChanger: true,
              pageSize: +ps,
              total: total,
              showTotal: (t)=><div>共{t}条</div>
            }}
          />
        </Card>
        </PageHeaderLayout>
      </div>
    )
  }
}
