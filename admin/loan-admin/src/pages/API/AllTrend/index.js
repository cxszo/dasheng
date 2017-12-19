import React,{ Component } from 'react'
import PageHeaderLayout from '../../../layouts/PageHeaderLayout'
import {Form,Select,Card,Row,Col,DatePicker,Tabs,Table} from 'antd'
import { TrendLine } from '../../../components/Charts';
import moment from 'moment'
import PageHeader from '../../../components/HeadSift'
import styles from './index.less'
import methods from '../../../utils/fetch'
import Api from '../../../constant/api'
// import { connect } from 'dva';
const {Option} = Select
const FormItem = Form.Item
const RangePicker = DatePicker.RangePicker
const {TabPane} = Tabs

let prodName =  "全部产品"
let startDate = moment().add(-1,'days').format('YYYY-MM-DD')
let endDate = moment().add(-1,'days').format('YYYY-MM-DD')
let appMgr = ''
let productId = ''
let pageSize = 30
let total = 0
let type = 1
const tabList = [{
  tab: '独立UA',
  key: '1',
},{
  tab: '资料完成',
  key: '2',
},{
  tab: '推送订单',
  key: '3',
},{
  tab: '接单审核',
  key: '4',
},{
  tab: '审核通过',
  key: '5',
},{
  tab: '签约完成',
  key: '6',
},{
  tab: '放款成功',
  key: '7',
},{
  tab: '放款金额',
  key: '8',
},{
  tab: '预估收入',
  key: '9',
},{
  tab: 'APPU',
  key: '10',
},{
  tab: '放款成本',
  key: '11',
}]
const columns = [
  {
    title:'日期',
    dataIndex: 'time'
  },
  {
    title:'产品名称',
    dataIndex: 'prodName'
  },
  {
    title:'独立UV',
    dataIndex: 'uv'
  },
  {
    title:'资料完成',
    dataIndex: 'preOrder'
  },
  {
    title:'推送订单',
    dataIndex: 'pushOrder'
  },
  {
    title:'接单审核',
    dataIndex: 'audOrder'
  },
  {
    title:'审核通过',
    dataIndex: 'passOrder'
  },
  {
    title:'签约完成',
    dataIndex: 'signOrder'
  },
  {
    title:'放款成功',
    dataIndex: 'loanOrder'
  },
  {
    title:'放款金额',
    dataIndex: 'amount'
  },
  {
    title:'预估收入',
    dataIndex: 'totalProfit'
  },
  {
    title:'APPU',
    dataIndex: 'appu'
  },
  {
    title:'放款成本',
    dataIndex: 'loanCost'
  },
]
const tabListDetail = [{
  tab: '全部渠道',
  key: ''
  },{
  tab: '点滴贷',
  key: '3',
},{
  tab: '惠刷卡',
  key: '1',
},{
  tab: '有鱼信用',
  key: '2',
},{
  tab: '其他',
  key: '0',
}]
// @connect((state) => ({
//   trendList: state.allTrendList,
//   // trendLine: state.allTrendList.trendLine
// }))
export default class AllTrendApi extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataSource: null,
      dataTrendLine: null
    }
  }
  init = ()=> {
    prodName =  "全部产品"
    startDate = moment().add(-1,'days').format('YYYY-MM-DD')
    endDate = moment().add(-1,'days').format('YYYY-MM-DD')
    appMgr = ''
    productId = ''
    pageSize = 30
    total = 0
    type = 1
  }
  componentDidMount() {
    this.init()
    const params = {
      startDate,
      endDate
    }
    
    this.getDataList(params,prodName)
    this.getDataLine(params)
  }
  async getDataList({startDate,endDate,productId,pageSize=30,pageNum=1,appMgr},prodName){
    const {post} = methods
    const {dataTrendList} = Api
    let data = {
      startDate,
      endDate,
      sortValue:"asc",
      sortName:"time",
      pageNum,
      pageSize,
    }
    appMgr && (data = {...data,appMgr})
    productId && (data = {...data,productId})
    const res = await post(dataTrendList,data)
    // console.log(res)
    let dataSource = []
    if(res && res.code == 1) {
      const data = res.data
      total = data.total
      const dataTrendList = !!data && (data.dataTrendlList || [])
      dataTrendList && dataTrendList.forEach((item, index) => {
        // console.log(item)
        const {amount,appu,audOrder,loanCost,loanOrder,passOrde,preOrder,pushOrder,signOrder,time,totalProfit,uv} = item
        dataSource.push({
          key: index
          ,prodName
          ,amount:  amount ? `￥${amount}` :''
          ,appu: appu ? `￥${appu}` : ''
          ,audOrder
          ,loanCost: loanCost ? `￥${loanCost}` : ''
          ,loanOrder
          ,passOrde
          ,preOrder
          ,pushOrder
          ,signOrder
          ,time
          ,totalProfit: totalProfit ? `￥${totalProfit}` : ''
          ,uv
        })
      })
      this.setState({
        dataSource,
      })
    }
  }
  async getDataLine({startDate,endDate,type=1,productId}){
    const {post} = methods
    const {dataTrendLine} = Api
    let data = {
      startDate,
      endDate,
      type,
    }
    productId && (data = {...data,productId})
    const res = await post(dataTrendLine,data)
    if(res && res.code == 1) {
      // console.log(res)
      const data = res.data
      const dataTrendLine = !!data && (data.dataTrendlLine || [])
      this.setState({
        dataTrendLine: [...dataTrendLine]
      })
    }
  }
  handleTabClickByType= (id)=> {
    this.getDataLine({
      startDate,
      endDate,
      type: id,
      productId
    })
    type = id
  }
  handleTabClickByChannelId = (id) => {
    let params = {
      startDate,
      endDate,
      productId,
      pageSize
    }
    id && (params = {...params,appMgr:id})
    this.getDataList(params,prodName)
    appMgr = id
  }
  handleClickPage = (pageNum,Size) => {
    pageSize = Size    
    // console.log(pageSize)
    const params = {
      startDate,
      endDate,
      productId,
      appMgr,
      pageNum,
      pageSize,
    }
    this.getDataList(params,prodName)
  }
  onSelectProd =(id,name)=> {
    const params = {
      startDate,
      endDate,
      appMgr,
      productId:id,
      pageSize
    }
    this.getDataList(params,name)
    this.getDataLine({
      startDate,
      endDate,
      type,
      productId: id
    })
    productId = id
    prodName = name
  }
  onSelectDate = (dates) => {
    if(dates) {
      startDate = dates[0].format('YYYY-MM-DD')
      endDate = dates[1].format('YYYY-MM-DD')
      const params = {
        startDate,
        endDate,
        productId,
        appMgr,
        pageSize
      }
      this.getDataList(params,prodName)
      this.getDataLine({
        startDate,
        endDate,
        type,
        productId
      })
    }
  }
  render(){
    let {dataSource,dataTrendLine} = this.state
    dataTrendLine = dataTrendLine || []
    return (
      <PageHeaderLayout title='整体趋势'>
        <Card bordered={false}>
          <PageHeader margin20={true} selProduct={this.onSelectProd} selDate={this.onSelectDate}/>
          <Tabs type='card' defaultActiveKey='1' onTabClick={this.handleTabClickByType} style={{minHeight:400}}>
              {
                tabList.map((item,index) =>  (<TabPane tab={item.tab} key={item.key}>{dataTrendLine.length ?  <TrendLine data={dataTrendLine}/> : null}</TabPane>))
              }
          </Tabs>  
          <h1 className={styles.detailTitle}>详细数据</h1>
          <Tabs type='card' defaultActiveKey='' animated={true} onTabClick={this.handleTabClickByChannelId} style={{minHeight:420,padding: '20px 0'}}>
              {
                tabListDetail.map((item,index) => {
                  return (<TabPane tab={item.tab} key={item.key}><Table columns={columns} dataSource={dataSource} pagination={{showSizeChanger: true,
                    showQuickJumper: true,
                    onChange:this.handleClickPage,showTotal(total){return (<strong>{`共${total}条`}</strong>)},
                    onShowSizeChange:this.handleClickPage,
                    total,
                    pageSize
                  }}
                  rowClassName={function(record,index){
                    if(index%2 != 0) {
                        return styles.row02Fa
                    }
                  }}
                  ></Table></TabPane>)
                })
              }
              
          </Tabs> 
        </Card>
      </PageHeaderLayout>
    )
  }
}