import React,{ Component } from 'react'
import PageHeaderLayout from '../../../layouts/PageHeaderLayout'
import {Select,Card,Row,Col,DatePicker,Tabs,Table,List} from 'antd'
import { TrendLine,TrendBar } from '../../../components/Charts';
import moment from 'moment'
import PageHeader from '../../../components/HeadSift'
import styles from './index.less'
import methods from '../../../utils/fetch'
import Api from '../../../constant/api'
// import { connect } from 'dva';
const {Option} = Select
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
const tabList = [
    {
    tab: 'UV-资料填完',
    key: '1',
  },{
    tab: '资料填完-推送订单',
    key: '2',
  },{
    tab: '推送订单-接单审核',
    key: '3',
  },{
    tab: '接单审核-审核通过',
    key: '4',
  },{
    tab: '审核通过-签约完成',
    key: '5',
  },{
    tab: '签约完成-放款成功',
    key: '6',
  },{
    tab: 'UV-推送订单',
    key: '7',
  },{
    tab: '推送订单-放款成功',
    key: '8',
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
    title:'UV-资料填完预推送',
    dataIndex: 'uvToPre'
  },
  {
    title:'资料填完-推送订单',
    dataIndex: 'preToPush'
  },
  {
    title:'推送订单-接单审核',
    dataIndex: 'pushToAud'
  },
  {
    title:'接单审核-审核通过',
    dataIndex: 'audToPass'
  },
  {
    title:'审核通过-签约完成',
    dataIndex: 'passToSign'
  },
  {
    title:'签约完成-放款成功',
    dataIndex: 'signToLoan'
  },
  {
    title:'UV-推送订单',
    dataIndex: 'uvToPush'
  },
  {
    title:'推送订单-放款成功',
    dataIndex: 'pushToLoan'
  }
]
const tabListDetail = [
    {
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
      dataTrendLine: null,
      dataTrendFormList: null,
      transformTrendData: null
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
    this.getTrendForm(params)
  }
  
  async getTrendForm({startDate,endDate,productId}){
    const {post} = methods
    const {dataTrendForm} = Api
    let data = {
      startDate,
      endDate
    }
    productId && (data = {...data,productId})
    const res = await post(dataTrendForm,data)
    // console.log(res)
    if(res && res.code == 1) {
      const data = res.data
      const dataRate = []
      const dataTrend  = data.transformTrendData || null
      data.transformTrendDataRate && dataRate.push({...data.transformTrendDataRate})
      this.setState({
        dataTrendFormList: dataRate,
        transformTrendData: dataTrend
      })

    }
  }
  async getDataList({startDate,endDate,productId,pageSize=30,pageNum=1,appMgr},prodName){
    const {post} = methods
    const {dataTrendFormList} = Api
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
    const res = await post(dataTrendFormList,data)
    // console.log(res)
    let dataSource = []
    if(res && res.code == 1) {
      const data = res.data
      total = data.total
      const dataTrendList = !!data && (data.transformTrendList || [])
      dataTrendList && dataTrendList.forEach((item, index) => {
        // console.log(item)
        const {
        audToPass
        ,passToSign
        ,preToPush
        ,pushToAud
        ,pushToLoan
        ,signToLoan
        ,time
        ,uvToPre
        ,uvToPush} = item
        dataSource.push({
          key: index
          ,prodName
          ,audToPass: audToPass? (100*audToPass).toFixed(2) + '%':null
          ,passToSign: passToSign? (100*passToSign).toFixed(2) + '%':null
          ,preToPush:preToPush? (100*preToPush).toFixed(2) + '%':null
          ,pushToAud:pushToAud? (100*pushToAud).toFixed(2) + '%':null
          ,pushToLoan:pushToLoan? (100*pushToLoan).toFixed(2) + '%':null
          ,signToLoan:signToLoan? (100*signToLoan).toFixed(2) + '%':null
          ,time
          ,uvToPre:uvToPre? (100*uvToPre).toFixed(2) + '%':null
          ,uvToPush:uvToPush? (100*uvToPush).toFixed(2) + '%':null
        })
      })
      this.setState({
        dataSource,
      })
    }
  }
  async getDataLine({startDate,endDate,type=1,productId}){
    const {post} = methods
    let data = {
      startDate,
      endDate,
      type,
    }
    productId && (data = {...data,productId})
    const res = await post(Api.dataTrendFormLine,data)
    if(res && res.code == 1) {
      // console.log(res)
      const data = res.data
      const dataTrendLine = data && (data.transformTrendLine || [])
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
      productId:id+'',
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
      this.getTrendForm({
        startDate,
        endDate,
        productId
      })
    }
  }
  render(){
    let {dataSource,dataTrendLine,dataTrendFormList,transformTrendData} = this.state
    dataTrendLine = dataTrendLine || []
    const listData = [
      {
        title:'UV',
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
      }
    ]
    return (
      <PageHeaderLayout title='转化率趋势'>
        <Card bordered={false}>
          <PageHeader margin20={true} selProduct={this.onSelectProd} selDate={this.onSelectDate}/>
          <h1 className={styles.detailTitle}>整体转化</h1>
          <Row style={{minHeight:400,paddingTop:20,marginBottom:10}} gutter={64}>
            <Col sm={24} md={10}>
            <div
              className={styles.allListWrap}
            >
            <List
              grid={{ column: 4,xs: 1,sm:2,md:3,lg:4 }}
              dataSource={listData}
              renderItem={item => (
                <List.Item>
                  {transformTrendData && <Card title={item.title} style={{textAlign:'center'}} type="inner"> {transformTrendData[item.dataIndex] || '---'}</Card>}
                </List.Item>
              )}
            />
            </div>
            </Col>
            <Col sm={24} md={14}>
              <TrendBar data = {dataTrendFormList}/>
            </Col>
          </Row>
          <h1 className={styles.detailTitle}>转化趋势</h1>
          <Tabs type='card' defaultActiveKey='1' onTabClick={this.handleTabClickByType} style={{minHeight:420,padding: '20px 0'}}>
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