import React,{ Component } from 'react'
import G2 from '@antv/g2';

import PropTypes from 'prop-types'
import Debounce from 'lodash-decorators/debounce';
import Bind from 'lodash-decorators/bind';
import numeral from 'numeral'
import equal from '../equal';
import styles from './index.less'

export default class Column extends Component {
  static defaultProps = {
    height: 300,
    isState: true
  }
  static propTypes = {
    height: PropTypes.number,
    isState: PropTypes.bool
  }
  state = {
    
  }
  componentDidMount() {
    this.renderChart(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (!equal(this.props, nextProps)) {
      this.renderChart(nextProps);
    }
  }
  componentWillUnmount() {
    if (this.chart) {
      this.chart.destroy();
    }
  }

  renderChart(props) {
    let { height, dv, isState } = props;
    
    this.chart && this.chart.destroy();
    
    const chart = new G2.Chart({
      container: this.node,
      forceFit: true,
      height: height
    });
    chart.source(dv);
    
    if( isState ) {
      chart.intervalStack()
      .position('月份*收入退款金额')
      .color('name');
    }else{
      chart.interval().position('月份*收入退款金额').color('name').adjust([{
        type: 'dodge',
        marginRatio: 1 / 32
      }]);
    }
    
    chart.render();

    this.chart = chart;
  }
  handleRef = (n) => {
    this.node = n;
  }
  render() {
    const { height } = this.props;

    return (
      <div className={styles.Column} style={{ height}}>
        <h4 className={styles.h4}>(万元)</h4>
        <div ref={this.handleRef} />
      </div>
    );
  }
}