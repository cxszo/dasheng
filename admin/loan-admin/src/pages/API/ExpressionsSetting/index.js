import React,{ Component } from 'react'
import { connect } from 'dva';
import { Select, Row, Col, Icon, Card, Form, Input, Table, DatePicker, Modal, message } from 'antd';
import numeral from 'numeral';
import { yuan, ChartCard, Field } from '../../../components/Charts';
import HeadSift from '../../../components/HeadSift'
import PageHeaderLayout from '../../../layouts/PageHeaderLayout';
import NumberInfo from '../../../components/NumberInfo';
import { getTimeDistance } from '../../../utils/utils';
import fetch, { obj2params } from '../../../utils/fetch'
import API from '../../../constant/api'
import styles from './index.less'


const { RangePicker } = DatePicker;
const Option = Select.Option;
const FormItem = Form.Item;

//默认数据
let dData = {
  defaultPro: '',//默认全部产品
  hidden: '',//默认上下架的产品都查
  pageNum: 1,
  pageSize: 10
}
let cData = {
  product: dData.defaultPro,
  hidden: dData.hidden,//0-上架，1-下架
  pageNum: dData.pageNum,
  pageSize: dData.pageSize
}
@connect(state => ({
  expressions: state.expressions,
}))
@Form.create()
export default class ExpressionSettingApi extends Component {

  state= {
    visible: false,//是否显示 修改弹窗
    isOkLoading: false,//修改操作 请求状态
    proId: '',//待修改的产品id
  }
  componentDidMount() {
    this.fetch();
  }
  fetch() {
    if(!cData.product){
      delete cData.product
    }
    if(!cData.hidden){
      delete cData.hidden
    }
    const { dispatch } = this.props;
    dispatch({
      type: 'expressions/fetch',
      payload: cData,
    });
  }
  handleTableChange = (pagination) => {
    let pageSize = pagination.pageSize;
    let pageNum = pagination.current;
    Object.assign(cData, {pageNum, pageSize})
    this.fetch();
  }
  edit({id:proId, name:proName, type, op}) {//产品id 产品名 结算方式 修改人

    this.props.form.setFields({
      name: { value: proName }
    });
    this.setState({
      visible: true,
      proId,
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
    validateFields(['money'], {first:false}, async (err, value)=>{
      if(err) return ;
      this.setState({isOkLoading: true});
      let res = await fetch.get(`${API.modify}?${obj2params({productId:this.state.proId, amount:value.money})}`)
      let { code } = res;
      this.modifyCancel()
      resetFields();
      if( code == '1' ){
        message.success('修改成功');
        this.fetch()
      }else{
        message.error('修改失败');
      }
      
    })
  }
  selProduct( id ) {
    Object.assign(cData, {product: id})
    this.fetch()
  }
  handleChange([ state ]) {
    Object.assign(cData, {hidden:state})
    this.fetch()
  }
  render(){
    let { 
      expressions: { list, total, loading }
    } = this.props;
    let dataSource = list.map((v, i)=>{
      return {
        key:i,
        id: v.productId,
        name: v.product,
        state: v.hidden,
        type: v.amount+' * '+v.type,
        date: v.editTime || '',
        op: v.editId, 
      }
    })
    const pageHeaderContent = (
      <Row gutter={24}>
        <Col span={12}>
          <HeadSift isShowDate={false} selProduct={this.selProduct.bind(this)} defaultPro={dData.defaultPro} />
        </Col>
        <Col span={12}>
          状态：
          <Select
            style={{ width: 150 }}
            placeholder="Select a state"
            optionFilterProp="children"
            onChange={this.handleChange.bind(this)}
            defaultValue={'全部'}
          >
            <Option value="">全部</Option>
            <Option value="0">已上架</Option>
            <Option value="1">已下架</Option>
          </Select>
        </Col>
      </Row>
    )
    const columns = [{
      title: '产品id',
      dataIndex: 'id',
      key: 'id',
    },{
      title: '产品名称',
      dataIndex: 'name',
      key: 'name',
    },{
      title: '状态',
      dataIndex: 'state',
      key: 'state',
    },{
      title: '结算方式',
      dataIndex: 'type',
      key: 'type',
    },{
      title: '修改时间',
      dataIndex: 'date',
      key: 'date',
    },{
      title: '修改人',
      dataIndex: 'op',
      key: 'op',
    },{
      title: '操作',
      key: 'operation',
      render: (text, record) => {return <a href="javascript:;" onClick={this.edit.bind(this, record)} >修改 <Icon type="edit" style={{ fontSize: 5 }} /></a>}
    },]
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
      <div className={styles.expressionSetting}>
        <PageHeaderLayout>
          <Card bordered={false}>
            <div className={styles.op}>
            {pageHeaderContent}
            
            </div>
            <Table columns={columns}
              dataSource={dataSource}
              loading={loading}
              onChange={this.handleTableChange}
              bordered
              pagination={{
                style: { marginBottom: 0 },
                showQuickJumper: true,
                showSizeChanger: true,
                pageSize: cData.pageSize,
                total,
                showTotal: (t)=><div>共{t}条</div>
              }}
            />
          </Card>
        </PageHeaderLayout>
        <Modal
          title="修改结算方式"
          width={400}
          maskClosable={false}
          confirmLoading={this.state.isOkLoading}
          visible={this.state.visible}
          onOk={this.modifyOk.bind(this)}
          onCancel={this.modifyCancel.bind(this)}
        >
          <Row>
            <Col span={20}>
              <Form>
                <FormItem
                  {...formItemLayout}
                  label="贷款名称"
                >
                  {getFieldDecorator('name', {
                    rules: [{
                      type: 'string', message: '',
                    }, {
                       message: '请输入贷款名称',
                    }],
                  })(
                    <Input />
                  )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="进价单价(元)"
                >
                  {getFieldDecorator('money', {
                    rules: [{
                      type: 'string', message: '',
                    }, {
                      required: true, message: '请输入进价单价',
                    }],
                  })(
                    <Input />
                  )}
                </FormItem>
              </Form>
            </Col>
            <Col span={4}></Col>
          </Row>
          
        </Modal>
      </div>
    )
  }
}