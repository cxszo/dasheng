import React,{ Component } from 'react'
import G2 from '@antv/g2';
import PropTypes from 'prop-types'
import Debounce from 'lodash-decorators/debounce';
import Bind from 'lodash-decorators/bind';
import numeral from 'numeral'
import equal from '../equal';
import styles from './index.less'

export default class Donut extends Component {
  static defaultProps = {
    data: [], //图标需要的数据 [{item, count}]
    height: 200, //canvas高度
    total: {} //中间填充内容 {name:'总值', value:'1000'}
  }
  static propTypes = {
    data: PropTypes.any, 
    height: PropTypes.number, 
    total: PropTypes.object
  }
  state = {
    autoHideXLabels: false,
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

  renderChart(nextProps) {
    this.chart && this.chart.destroy();
    const { data, height, total={} } = nextProps;
    
    const chart = new G2.Chart({
      container: this.node,
      forceFit: true,
      height: height,
    });
    chart.source(data, {
      percent: {
        formatter: val => {
          val = Math.round(val * 10000)/100 + '%';
          return val;
        }
      }
    });
    chart.coord('theta', {
      radius: 0.75
    });
    chart.tooltip({
      showTitle: false,
      itemTpl: '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
    });
    chart.intervalStack()
      .position('percent')
      .color('item')
      .label('percent', {
        formatter: (val, item) => {
          return item.point.item + ': ' + val;
        }
      })
      .tooltip('item*percent', (item, percent) => {
        percent = Math.round(percent * 10000)/100 + '%';
        return {
          name: item,
          value: percent
        };
      })
      .style({
        lineWidth: 1,
        stroke: '#fff'
      });
    chart.render();
    this.chart = chart;

  }
  handleRef = (n) => {
    this.node = n;
  }
  render() {
    const { height, title } = this.props;

    return (
      <div className={styles.chart} style={{ height }}>
        <div ref={this.handleRef} />
      </div>
    );
  }
}