import React,{ Component } from 'react'
import G2 from '@antv/g2';

import PropTypes from 'prop-types'
import Debounce from 'lodash-decorators/debounce';
import Bind from 'lodash-decorators/bind';
import numeral from 'numeral'
import equal from '../equal';
import styles from './index.less'

export default class LineChart extends Component {
  static defaultProps = {
    height: 300
  }
  static propTypes = {
    height: PropTypes.number
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
    let { height, dv } = props;
    
    this.chart && this.chart.destroy();
    
    const chart = new G2.Chart({
      container: this.node,
      forceFit: true,
      height: height
    });
    chart.source(dv, {
      week: {
        range: [ 0, 1 ]
      }
    });
    chart.tooltip({
      crosshairs: {
        type: 'line'
      },
      showTitle: true,
      title: 'week'
    });
    chart.axis('temperature', {
      label: {
        formatter: val => {
          return val + '';
        }
      },
      line: {
        // stroke: '#ff8800'
      }
    });
    chart.legend(true, {
      offsetY: 20,
      layout: 'horizontal',
    });
    chart.axis('week', {
      label: {
        textStyle: {
          rotate: 90,
          fontWeight: 'bold',
          textAlign: 'start',
          fill: '#404040'
        },
        autoRotate: false
      },
      
    });
    chart.line().position('week*temperature').color('city').shape('smooth');
    chart.point().position('week*temperature').color('city').size(4).shape('circle').style({
      stroke: '#fff',
      lineWidth: 1
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
        <h4 className={styles.h4}>({title||'人次'})</h4>
        <div ref={this.handleRef} />
      </div>
    );
  }
}