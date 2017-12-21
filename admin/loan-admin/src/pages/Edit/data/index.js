import React,{ Component } from 'react'
import { connect } from 'dva';
import { Row, Col, Icon, Card, Tabs, Table, Radio, Menu, notification, Modal, Form, Input } from 'antd';
import moment from 'moment'
import numeral from 'numeral'
import PageHeaderLayout from '../../../layouts/PageHeaderLayout';
import HeadSift from '../../../components/HeadSift'
import fetch, { obj2params } from '../../../utils/fetch'
import API from '../../../constant/api'
import { getTimeDistance } from '../../../utils/utils';

const { TabPane } = Tabs;
const FormItem = Form.Item;
import styles from './index.less'



// {"recharge":"589400 ","add":"1181","apply":"1492","buy":"3659","recharge_user":"2299","profit":"628197 ","refund":"137540 ","start_date":"2017-12-11","end_date":"2017-12-17"}


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
@Form.create()
export default class ReadData extends Component {
  state = {
    visible: false,
    isOkLoading: false
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
 
  edit({ date, recharge, buy, apply, recharge_user, refund, profit, add  }) {//产品id 产品名 结算方式 修改人
    this.props.form.setFields({
      date: { value: date },
      recharge: { value: recharge.replace(/,/g, '') },
      buy: { value: buy },
      add: { value: add },
      apply: { value: apply },
      recharge_user: { value: recharge_user },
      refund: { value: refund.replace(/,/g, '') },
      profit: { value: profit.replace(/,/g, '') },
    });
    this.setState({
      visible: true,
    });
  }
  modifyCancel = (e) => {
    this.setState({
      visible: false,
      isOkLoading: false,
    });
  }
  modifyOk(e){
    const { validateFields, resetFields } = this.props.form;
    validateFields(['date', 'recharge', 'add', 'apply', 'buy', 'recharge_user', 'profit', 'refund'], {first:false}, async (err, value)=>{
      if(err) return ;
      this.setState({isOkLoading: true});
      let res = await fetch.post(API.edit, value)
      let { status } = res;
      this.modifyCancel()
      resetFields();
      if( status == 'ok' ){
        notification.open({
          message: 'hi~',
          description: '修改成功.',
        });
        this.fetch()
      }else{
        notification.open({
          message: 'hi~',
          description: '修改失败.',
        });
      }
    })
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
      title: '充值金额(元)',
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
      title: '净收入(元)',
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
        refund: numeral(+v.refund).format('0,0')
      }
    })
    const formItemLayout = {
      labelCol: {
        xs: { span: 10 },
        sm: { span: 10 },
      },
      wrapperCol: {
        xs: { span: 14 },
        sm: { span: 14 },
      },
    };
    const { getFieldDecorator, getFieldsValue, getFieldValue } = this.props.form;
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

        <Modal
          title="修改结算方式"
          width={700}
          maskClosable={false}
          confirmLoading={this.state.isOkLoading}
          visible={this.state.visible}
          onOk={this.modifyOk.bind(this)}
          onCancel={this.modifyCancel.bind(this)}
        >
          <Row>
            <Col span={11}>
              <Form>
                <FormItem
                  {...formItemLayout}
                  label="日期"
                >
                  {getFieldDecorator('date')(
                    <Input disabled/>
                  )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="新增用户"
                >
                  {getFieldDecorator('add', {
                    rules: [{
                      type: 'string', message: '',
                    }, {
                      required: true, message: '请输入新增用户',
                    }],
                  })(
                    <Input />
                  )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="消费用户"
                >
                  {getFieldDecorator('buy', {
                    rules: [{
                      type: 'string', message: '',
                    }, {
                      required: true, message: '请输入消费用户',
                    }],
                  })(
                    <Input />
                  )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="净收入"
                >
                  {getFieldDecorator('profit', {
                    rules: [{
                      type: 'string', message: '',
                    }, {
                      required: true, message: '请输入净收入',
                    }],
                  })(
                    <Input />
                  )}
                </FormItem>
              </Form>
            </Col>
            <Col span={12}>
              <Form>
                <FormItem
                  {...formItemLayout}
                  label="充值金额"
                >
                  {getFieldDecorator('recharge', {
                    rules: [{
                      type: 'string', message: '',
                    }, {
                      required: true, message: '请输入充值金额',
                    }],
                  })(
                    <Input />
                  )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="申请认证用户"
                >
                  {getFieldDecorator('apply', {
                    rules: [{
                      type: 'string', message: '',
                    }, {
                      required: true, message: '请输入申请认证用户',
                    }],
                  })(
                    <Input />
                  )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="充值用户"
                >
                  {getFieldDecorator('recharge_user', {
                    rules: [{
                      type: 'string', message: '',
                    }, {
                      required: true, message: '请输入充值用户',
                    }],
                  })(
                    <Input />
                  )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="退款"
                >
                  {getFieldDecorator('refund', {
                    rules: [{
                      type: 'string', message: '',
                    }, {
                      required: true, message: '请输入退款',
                    }],
                  })(
                    <Input />
                  )}
                </FormItem>
              </Form>
            </Col>
          </Row>
        </Modal>
      </div>
    )
  }
}
