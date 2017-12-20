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
    data: PropTypes.array, 
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
      animate: true
    });
    chart.source(data);
    chart.coord('theta', {
      radius: 1,
      innerRadius: 0.7
    });
    chart.guide().html({
      position: [ '50%', '50%' ],
      html: `<div style="color:#8c8c8c;font-size: 14px;text-align: center;width: 10em;">${total.name||''}<br><span style="color:#8c8c8c;font-size:20px">&yen;${numeral(total.value||0).format('0,0')}</span></div>`,
      alignX: 'middle',
      alignY: 'middle'
    });
    chart.intervalStack()
      .position('count')
      .color('item')
      .label('count', {
        formatter: (val, item) => {
          return item.point.item + ': ' + val;
        }
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