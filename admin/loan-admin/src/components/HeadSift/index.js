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
    defaultDate: 'halfyear',//默认半年
    defaultPro: '',//productId 默认全部产品
    isShowDate: true,//是否显示日期筛选
  };
  static propTypes = {
    margin20: PropTypes.bool,
    shortcut: PropTypes.bool,
    selDate: PropTypes.func,
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
  }
  componentWillUnmount(){

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
  
  selectDate = (type) => {
    this.setState({
      rangePickerValue: getTimeDistance(type),
    }, ()=>{
      this.props.selDate(this.state.rangePickerValue)
    });
  }
 
  render() {
    let { margin20, shortcut, defaultDate, isShowDate } = this.props;
    let { rangePickerValue=[], defaultPro } = this.state;
    const salesExtra = (
      <div className={styles.salesExtraWrap}>
        {
          shortcut?
          <div className={styles.salesExtra}>
            
            <a className={this.isActive('month')} onClick={() => this.selectDate('month')}>
              本月
            </a>
            <a className={this.isActive('premonth')} onClick={() => this.selectDate('premonth')}>
              上月
            </a>
            <a className={this.isActive('halfyear')} onClick={() => this.selectDate('halfyear')}>
              半年
            </a>
            <a className={this.isActive('year')} onClick={() => this.selectDate('year')}>
              今年
            </a>
            <a className={this.isActive('all')} onClick={() => this.selectDate('all')}>
              ∞
            </a>
          </div>
          : '选择日期 '
        }
        <RangePicker
          value={rangePickerValue.length ? rangePickerValue:getTimeDistance(defaultDate) }
          onChange={this.handleRangePickerChange}
          style={{ width: 256, textAlign:'center' }}
        />
      </div>
    );
    return (
      <div className={
        classNames(styles.pageHeaderContent, {[styles.margin20]: margin20})
      }>
        {isShowDate?salesExtra:null}
      </div>
    );
  }
}

