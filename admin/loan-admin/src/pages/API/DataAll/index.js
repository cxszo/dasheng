import React,{ Component } from 'react'
import { connect } from 'dva';
import { Row, Col, Icon, Card, Tabs, Table, Radio, Menu, Dropdown } from 'antd';
import moment from 'moment'
import { yuan, Donut, Bar } from '../../../components/Charts';
import HeadSift from '../../../components/HeadSift'
import PageHeaderLayout from '../../../layouts/PageHeaderLayout';
import NumberInfo from '../../../components/NumberInfo';
import { xround, getTimeDistance } from '../../../utils/utils'
import styles from './index.less'

const { TabPane } = Tabs;


const incomeColumns = [{
  title: '渠道',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '收入',
  dataIndex: 'earning',
  key: 'earning',
}, {
  title: '占比',
  dataIndex: 'rate',
  key: 'rate',
}];
const arpuColumns = [{
  title: '渠道',
  dataIndex: 'name',
  key: 'name',
}, {
  title: 'arpu',
  dataIndex: 'arpu',
  key: 'arpu',
}];
const uvColumns = [{
  title: '渠道',
  dataIndex: 'name',
  key: 'name',
}, {
  title: 'uv',
  dataIndex: 'uv',
  key: 'uv',
}, {
  title: '占比',
  dataIndex: 'rate',
  key: 'rate',
}];
const loanColumns = [{
  title: '渠道',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '放款人数',
  dataIndex: 'loan',
  key: 'loan',
}, {
  title: '占比',
  dataIndex: 'rate',
  key: 'rate',
}];

let defaultProduct = '';//默认全部产品
let defaultDate = 'yesterday';//默认日期
let cData;//接口需要的数据

@connect(state => ({
  dataAll: state.dataAll,
}))
export default class DataAllApi extends Component {
  state = {
  }
  componentDidMount() {

    let date = getTimeDistance(defaultDate);
    cData = {
      startDate: moment(date[0]).format('YYYY-MM-DD'),
      endDate: moment(date[1]).format('YYYY-MM-DD'),
      proId: defaultProduct
    }
    this.fetch()
  }
  componentWillUnmount() {

  }
  fetch(){
    let productId = {}
    if(cData.proId){
      productId = {productId:cData.proId}
    }
    const { dispatch } = this.props;
    dispatch({
      type: 'dataAll/fetch',
      payload: {
        startDate: cData.startDate,
        endDate: cData.endDate,
        ...productId
      },
    });
  }
  selDate(date) {
    cData.startDate = moment(date[0]).format('YYYY-MM-DD')
    cData.endDate = moment(date[1]).format('YYYY-MM-DD')
    this.fetch();
  }
  selProduct( id, name ) {
    cData.proId = id;
    this.fetch();
  }
  render(){
    const {
      dataAll: { list, loading },
    } = this.props;
    let { code, data, desc } = list;
    let incomeData=[], arpudata=[], uvData=[], loanData=[];
    let incomeTotal=0, uvTotal=0, loanTotal=0;
    let incomeTabData = [], arpuTabData=[], uvTabData = [], loanTabData = [];
    if(data){
      let { inComeList=[], loanList=[], uVList=[] } = data;//收入 放款人数 uv arpu自己算
      let inComeObj = {}//用来算arpu {'有鱼贷王':'total', ...} 
      inComeList.forEach(v => {
        incomeTotal += +v.totalProfit
        incomeData.push({item:v.mgr, count: +v.totalProfit})
        inComeObj[v.mgr] = +v.totalProfit;
      });
      inComeList.forEach((v, i) => {
        incomeTabData.push({key:i, name:v.mgr, earning: v.totalProfit, rate: xround(v.totalProfit/incomeTotal*100, 2) +'%'})
      })
      uVList.forEach((v, i) => {
        uvTotal += +v.uv;
        uvData.push({item:v.mgr, count: +v.uv})

        if(inComeObj[v.mgr]){
          let arpu = xround(inComeObj[v.mgr]/+v.uv, 2);
          arpudata.push({x:v.mgr, y: arpu})
          arpuTabData.push({key:i, name:v.mgr, arpu:arpu})
        }
      })
      uVList.forEach((v, i) => {
        uvTabData.push({key:i, name:v.mgr, uv:v.uv, rate: xround(+v.uv/uvTotal*100, 2)+'%'})
      })
      loanList.forEach(v => {
        loanTotal += +v.loanTotal;
        loanData.push({item:v.mgr, count: +v.loanTotal})
      })
      loanList.forEach((v, i) => {
        loanTabData.push({key:i, name:v.mgr, loan:v.loanTotal, rate: xround(+v.loanTotal/loanTotal*100, 2)+'%'})
      })
    }
    return (
      <div className={styles.data_all}>
      <PageHeaderLayout
        content={<HeadSift selProduct={this.selProduct.bind(this)} selDate={this.selDate.bind(this)} defaultDate={defaultDate} defaultPro={defaultProduct} />}
      >
        <Card title="收入" bordered={false} loading={loading}>
          <Row gutter={24}>
            <Col span={11}>
            {
              incomeData.length?
              <Donut data={incomeData} height={295} total={{name:'总收入', value:incomeTotal}} />
              :null
            }
            </Col>
            <Col span={5}></Col>
            <Col span={8}>
              <Table dataSource={incomeTabData} columns={incomeColumns} bordered pagination={false} size="small"/>
            </Col>
          </Row>
        </Card>
        <Card title="arpu" bordered={false} loading={loading}>
          <Row gutter={24}>
            <Col span={11}>
            {
              arpudata.length?
              <Bar height={295} data={arpudata} />
              :null
            }
            </Col>
            <Col span={5}></Col>
            <Col span={8}>
              <Table dataSource={arpuTabData} columns={arpuColumns} bordered pagination={false} size="small"/>
            </Col>
          </Row>
        </Card>
        <Card title="uv" bordered={false} loading={loading}>
          <Row gutter={24}>
            <Col span={11}>
            {
              uvData.length?
              <Donut data={uvData} height={295} total={{name:'UV总量', value: uvTotal}} />
              :null
            }
            </Col>
            <Col span={5}></Col>
            <Col span={8}>
              <Table dataSource={uvTabData} columns={uvColumns} bordered pagination={false} size="small"/>
            </Col>
          </Row>
        </Card>
        <Card title="放款人数" bordered={false} loading={loading}>
          <Row gutter={24}>
            <Col span={11}>
              {
                loanData.length?
                <Donut data={loanData} height={295} total={{name:'放款人数', value: loanTotal}} />
                :null
              }
            </Col>
            <Col span={5}></Col>
            <Col span={8}>
              <Table dataSource={loanTabData} columns={loanColumns} bordered pagination={false} size="small"/>
            </Col>
          </Row>
        </Card>
      </PageHeaderLayout>
      </div>
    )
  }
}

