import React,{ Component } from 'react'
import { connect } from 'dva';
import { Select, Row, Col, Icon, Card, Tabs, Tooltip, Table, Radio, DatePicker, Menu, Dropdown } from 'antd';
import numeral from 'numeral';
import moment from 'moment'
import { yuan, ChartCard, Field } from '../../../components/Charts';
import HeadSift from '../../../components/HeadSift'
import PageHeaderLayout from '../../../layouts/PageHeaderLayout';
import NumberInfo from '../../../components/NumberInfo';
import { getTimeDistance } from '../../../utils/utils';

import styles from './index.less'

const { TabPane } = Tabs;
const { RangePicker } = DatePicker;
const Option = Select.Option;


let defaultDate = 'week';
let defaultPro = '';
let cData = {
  startDate: '',
  endDate: '',
  proId: '',
}
@connect(state => ({
  repay: state.repay,
}))
export default class RepaymentApi extends Component {

  componentDidMount() {
    let date = getTimeDistance(defaultDate);
    cData = {
      startDate: moment(date[0]).format('YYYY-MM-DD'),
      endDate: moment(date[1]).format('YYYY-MM-DD'),
      proId: defaultPro
    }
    this.fetch()
  }
  fetch(){
    let productId = {}
    if(cData.proId){
      productId = {product:cData.proId}
    }
    const { dispatch } = this.props;
    dispatch({
      type: 'repay/fetch',
      payload: {
        startTime: cData.startDate,
        endTime: cData.endDate,
        ...productId
      },
    });
  }

  selDate( date ) {
    cData.startDate = moment(date[0]).format('YYYY-MM-DD')
    cData.endDate = moment(date[1]).format('YYYY-MM-DD')
    this.fetch()
  }
  selProduct( id='' ) {
    cData.proId = id;
    this.fetch()
  }
  render(){
    const topColResponsiveProps = {
      xs: 24,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 6,
      style: { marginBottom: 24 },
    };
    let {
      repay:{ res, loading }
    } = this.props;
    console.log(res)
    let { code, data='' } = res;
    let { appMgr, delayRepayNum, delayRepaySuccessNum, productId, repayNum=0, repaySuccessNum } = data;
  //     "data": {
  //         "appMgr": 0, //渠道，0表示全部渠道
  //         "delayRepayNum": 9, //逾期单数
  //         "delayRepaySuccessNum": 7, //逾期已付款单数
  //         "productId": 0, //产品ID 0表示全部产品
  //         "repayNum": 23, //应还款数
  //         "repaySuccessNum": 77 //贷款无逾期结清单数 正常还款成功数
  //     }


    return (
      <div className={styles.repayment}>
        <PageHeaderLayout>
          <Card bordered={false} loading={loading}>
            <HeadSift margin20={true} shortcut={false} selDate={this.selDate.bind(this)} selProduct={this.selProduct.bind(this)} defaultDate={defaultDate} defaultPro={defaultPro} />
            {
              code =='1' ?
              <Row gutter={24}>
                <Col {...topColResponsiveProps}>
                  <ChartCard
                    title="应还款数"
                    action={<Tooltip title="应还款数"><Icon type="info-circle-o" /></Tooltip>}
                    total={repayNum}
                    //footer={<Field label="日均销售额" value={`￥${numeral(12423).format('0,0')}`} />}
                    contentHeight={46}
                  >
                  </ChartCard>
                </Col>
                <Col {...topColResponsiveProps}>
                  <ChartCard
                    title="正常还款成功"
                    action={<Tooltip title="正常还款成功"><Icon type="info-circle-o" /></Tooltip>}
                    total={numeral(repaySuccessNum).format('0,0')}
                    //footer={<Field label="日访问量" value={numeral(1234).format('0,0')} />}
                    contentHeight={46}
                  >
                  </ChartCard>
                </Col>
                <Col {...topColResponsiveProps}>
                  <ChartCard
                    title="逾期还款成功"
                    action={<Tooltip title="逾期还款成功"><Icon type="info-circle-o" /></Tooltip>}
                    total={numeral(delayRepaySuccessNum).format('0,0')}
                    //footer={<Field label="转化率" value="60%" />}
                    contentHeight={46}
                  >
                  </ChartCard>
                </Col>
                <Col {...topColResponsiveProps}>
                  <ChartCard
                    title="逾期未还款"
                    action={<Tooltip title="逾期未还款"><Icon type="info-circle-o" /></Tooltip>}
                    total={delayRepayNum}
                    //footer={ <div style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>该还钱了</div> }
                    contentHeight={46}
                  >
                  </ChartCard>
                </Col>
              </Row>
              :
              <Row type="flex" justify="center">无数据</Row>
            }
          </Card>
        </PageHeaderLayout>
      </div>
    )
  }
}