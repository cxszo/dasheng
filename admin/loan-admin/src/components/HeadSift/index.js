/**
 * 头部 产品名称 & 时间 筛选
 */
import React, { PureComponent, createElement } from 'react';
import PropTypes from 'prop-types';
import { Select, DatePicker } from 'antd';
import moment from 'moment'
import classNames from 'classnames';
import fetch from '../../utils/fetch';
import API from '../../constant/api'
import { getTimeDistance } from '../../utils/utils';

import styles from './index.less';
const Option = Select.Option;
const { RangePicker } = DatePicker;


export default class PageHeader extends PureComponent {
  static defaultProps = {
    margin20: false,//是否上下margin 20px
    shortcut: true,//是否显示 日期快捷选择入口
    selDate: ()=>{},//更改日期触发
    selProduct: ()=>{},//选择产品
    defaultDate: 'yesterday',//默认昨天
    defaultPro: '',//productId 默认全部产品
    isShowDate: true,//是否显示日期筛选
  };
  static propTypes = {
    margin20: PropTypes.bool,
    shortcut: PropTypes.bool,
    selDate: PropTypes.func,
    selProduct: PropTypes.func,
    defaultDate: PropTypes.string,
    defaultPro: PropTypes.string,
    isShowDate: PropTypes.bool
  };
  state = {
    option: [],
    data: [],
    defaultPro: '',
    rangePickerValue: [],
  }
  componentWillMount(){

  }
  componentDidMount(){
    this.fetch();
  }
  componentWillUnmount(){

  }
  //获取产品列表
  async fetch() {
    let res = await fetch.get(API.proList)
    let { code, data=[] } = res;
    if(code == '1'){
      let option = [];
      let defaultPro = '';
      data.unshift({"product":"全部产品","productId":''})
      data.forEach((element, index) => {
        let { mount, editId, hidden, product, productId, type } = element;
        option.push(<Option value={productId} key={index}>{product}</Option>)
        if(this.props.defaultPro == productId){
          defaultPro = product
        }
      });
      this.setState({option, data, defaultPro})
    }
  }
  handleRangePickerChange = (rangePickerValue) => {
    this.setState({
      rangePickerValue,
    }, ()=>{
      this.props.selDate(this.state.rangePickerValue)
    });
  }
  isActive(type) {
    let  { rangePickerValue } = this.state;
    if( !rangePickerValue.length ){
      let { defaultDate } = this.props;
      rangePickerValue = getTimeDistance(defaultDate)
    }
    const value = getTimeDistance(type);
    if (!rangePickerValue[0] || !rangePickerValue[1]) {//如果 rangePickerValue 没有值 pass
      return;
    }
    if (rangePickerValue[0].isSame(value[0], 'day') && rangePickerValue[1].isSame(value[1], 'day')) {
      return styles.currentDate;
    }
  }
  handleChange( value ){
    let name = ''
    this.state.data.forEach( v =>{
      if(value == v.productId){
        name = v.product;
      }
    })
    this.props.selProduct(value, name)
  }
  selectDate = (type) => {
    this.setState({
      rangePickerValue: getTimeDistance(type),
    }, ()=>{
      this.props.selDate(this.state.rangePickerValue)
    });
  }
  disabledDate(current) {
    let oneTime = 24 * 60 * 60 * 1000;
    let disabledDate = 30;
    return current.valueOf() < ( Date.now() - disabledDate * oneTime ) || current.valueOf() > ( Date.now() + disabledDate * oneTime );
  }
  render() {
    let { margin20, shortcut, defaultDate, isShowDate } = this.props;
    let { rangePickerValue=[], defaultPro } = this.state;
    const salesExtra = (
      <div className={styles.salesExtraWrap}>
        {
          shortcut?
          <div className={styles.salesExtra}>
            <a className={this.isActive('today')} onClick={() => this.selectDate('today')}>
              今日
            </a>
            <a className={this.isActive('yesterday')} onClick={() => this.selectDate('yesterday')}>
              昨日
            </a>
            <a className={this.isActive('week')} onClick={() => this.selectDate('week')}>
              本周
            </a>
            <a className={this.isActive('preweek')} onClick={() => this.selectDate('preweek')}>
              上周
            </a>
            <a className={this.isActive('month')} onClick={() => this.selectDate('month')}>
              本月
            </a>
            <a className={this.isActive('premonth')} onClick={() => this.selectDate('premonth')}>
              上月
            </a>
          </div>
          : '选择日期 '
        }
        <RangePicker
          value={rangePickerValue.length ? rangePickerValue:getTimeDistance(defaultDate) }
          onChange={this.handleRangePickerChange}
          disabledDate={this.disabledDate.bind(this)}
          style={{ width: 256, textAlign:'center' }}
        />
      </div>
    );
    const proName = (
      <div className={styles.select}>
        产品名称：
        {
          this.state.data.length?
          <Select
            showSearch
            style={{ width: 150 }}
            placeholder="Select a product"
            optionFilterProp="children"
            onChange={this.handleChange.bind(this)}
            defaultValue={defaultPro}
          >
            {this.state.option}
          </Select>
          :null
        }
      </div>
    )
    
    return (
      <div className={
        classNames(styles.pageHeaderContent, {[styles.margin20]: margin20})
      }>
        {proName}{isShowDate?salesExtra:null}
      </div>
    );
  }
}

