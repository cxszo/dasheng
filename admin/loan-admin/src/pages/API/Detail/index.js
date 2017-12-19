import React,{ Component } from 'react'
import { connect } from 'dva';
import { Select, Row, Col, Icon, Card, Tabs, Table, Radio, DatePicker, Menu, Dropdown } from 'antd';
import moment from 'moment'
import { yuan, Donut } from '../../../components/Charts';
import PageHeaderLayout from '../../../layouts/PageHeaderLayout';
import HeadSift from '../../../components/HeadSift';
import { getTimeDistance } from '../../../utils/utils';

import styles from './index.less'
import { dataSource } from './data'

const { TabPane } = Tabs;
const { RangePicker } = DatePicker;
const Option = Select.Option;

let defaultDate = 'week';
let defaultPro = '';
let pageNum = 1;
let pageSize = 10;
let cData = {
  productId: defaultDate,
  startDate: '',
  endDate: '',
  sortName: 'appu', 
  sortValue: 'desc', //asc desc
  pageNum: pageNum,
  pageSize: pageSize,
}
@connect(state => ({
  dataDetail: state.dataDetail,
}))
export default class DetailApi extends Component {
  state= {
    date: ''
  }
  componentDidMount() {
    let date = getTimeDistance(defaultDate);
    let startDate = moment(date[0]).format('YYYY-MM-DD');
    let endDate = moment(date[1]).format('YYYY-MM-DD')
    this.setState({date: startDate+'~'+endDate})
    Object.assign(cData, {
      productId: defaultPro,
      startDate,
      endDate
    })
    this.fetch();
  }
  /**
   * @param pagination {Object}   {current: 2, pageSize: 10}//当前第几页 和一页多少条
   * @param sorter {Object}       {order: "descend", columnKey: "arpu"}//ascend 升序 descend 降序
   */
  handleTableChange = (pagination, filters, sorter) => {
    let pageNum = pagination.current;
    let pageSize = pagination.pageSize;
    let sortName = sorter.columnKey?sorter.columnKey:'';
    let sortValue = sorter.order ?sorter.order.replace(/end$/, ''): '';
    Object.assign(cData, {
      sortName,
      sortValue,
      pageNum,
      pageSize
    })
    this.fetch();
  }

  fetch(){
    const { dispatch } = this.props;
    dispatch({
      type: 'dataDetail/fetch',
      payload: cData,
    });
  }
  
  selDate( date ) {
    let startDate = moment(date[0]).format('YYYY-MM-DD');
    let endDate = moment(date[1]).format('YYYY-MM-DD')
    this.setState({date: startDate+'~'+endDate})
    Object.assign(cData, {
      startDate,
      endDate
    })
    this.fetch()
  }
  selProduct( id ) {
    Object.assign(cData, {
      proId:id,
    })
    this.fetch()
  }
  render(){
    const columns = [{
      title: '日期',
      dataIndex: 'date',
      key: 'date',
      width: 120,
      fixed: 'left'
    }, {
      title: '产品名称',
      dataIndex: 'name',
      key: 'name',
      width: 120,
      fixed: 'left',
      render: text => {return <div>{text} <a href="javascript:alert('跳转');" ><Icon type="edit" /></a></div>}
    }, {
      title: '独立UV',
      dataIndex: 'uv',
      key: 'uv',
      sorter: true,
    }, {
      title: '资料完成预推送',
      dataIndex: 'prePush',
      key: 'preOrder',
      sorter: true,
    }, {
      title: '推送订单',
      dataIndex: 'pushOrder',
      key: 'pushOrder',
      sorter: true,
    }, {
      title: '接单审核',
      dataIndex: 'examine',
      key: 'audOrder',
      sorter: true,
    }, {
      title: '审核通过',
      dataIndex: 'pass',
      key: 'passOrder',
      sorter: true,
    }, {
      title: '签约完成',
      dataIndex: 'signFinish',
      key: 'signOrder',
      sorter: true,
    }, {
      title: '放款成功',
      dataIndex: 'loanSuccess',
      key: 'loanOrder',
      sorter: true,
    }, {
      title: '放款金额',
      dataIndex: 'loanMoney',
      key: 'amount',
      sorter: true,
    }, {
      title: '预估收入',
      dataIndex: 'earning',
      key: 'totalProfit',
      sorter: true,
    }, {
      title: 'ARPU',
      dataIndex: 'arpu',
      key: 'appu',
      sorter: true,
      defaultSortOrder: 'descend'
    }, {
      title: '放款成本',
      dataIndex: 'cost',
      key: 'loanCost',
      sorter: true,
    }];
    let {
      dataDetail: { loading, list=[], total=0 }
    } = this.props;
    let { date } = this.state;
    
    let dataSource = list.map((v, i) => {
      let obj = {
        key: i,
        date,//没有
        name: v.name,
        uv: v.uv,
        prePush: v.preOrder,//预推送
        pushOrder: v.pushOrder,//推送订单
        examine: v.audOrder,//接受审核
        pass: v.passOrder,//审核通过
        signFinish: v.signOrder,//签约完成
        loanSuccess: v.loanOrder,//放款成功
        loanMoney: v.amount,//放款金额
        earning: v.totalProfit,//预估收入
        arpu: v.appu,
        cost: v.loanCost//放款成本
      }
      return obj;
    });
    return (
      <div className={styles.detail}>
        <PageHeaderLayout>
          <Card bordered={false}>
            <HeadSift margin20={true} selDate={this.selDate.bind(this)} selProduct={this.selProduct.bind(this)} defaultDate={defaultDate} defaultPro={defaultPro} />
            <Table columns={columns}
              loading={loading}
              rowKey={record => record.key}
              dataSource={dataSource}
              onChange={this.handleTableChange}
              pagination={{
                style: { marginBottom: 0 },
                showQuickJumper: true,
                showSizeChanger: true,
                pageSize: cData.pageSize,
                total,
                showTotal: (t)=><div>共{t}条</div>
              }}
              scroll={{ x: 1500 }}
              bordered
            />
          </Card>
        </PageHeaderLayout>
      </div>
    )
  }
}