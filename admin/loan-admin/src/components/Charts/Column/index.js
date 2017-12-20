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
    isState: true, 
    title: '万元'
  }
  static propTypes = {
    height: PropTypes.number,
    isState: PropTypes.bool,
    title: PropTypes.string
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
    let { height, dv, isState, title } = props;
    
    this.chart && this.chart.destroy();
    
    const chart = new G2.Chart({
      container: this.node,
      forceFit: true,
      height: height
    });
    chart.source(dv);
    chart.tooltip({
      crosshairs: {
        type: 'line'
      },
      showTitle: true,
      itemTpl: `<li style="margin-bottom: 4px;"><span style="width: 7px; height: 7px; border-radius: 50%; border: 1px solid rgb(255, 255, 255); display: inline-block; margin-right: 8px; background-color: {color};" class="g2-tooltip-marker"></span>{name}: {value}${title == '人次'? '人': title}</li>`

    });
    chart.legend(true, {
      offsetY: 0,
      layout: 'horizontal',
      position: 'top'
    });
    chart.axis('月份', {
      label: {
        textStyle: {
          rotate: 45,
          fontWeight: 'bold',
          textAlign: 'start',
          fill: '#404040'
        },
        autoRotate: false
      },
    });
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
    const { height, title } = this.props;

    return (
      <div className={styles.Column} style={{ height}}>
        <h4 className={styles.h4}>({title})</h4>
        <div ref={this.handleRef} />
      </div>
    );
  }
}