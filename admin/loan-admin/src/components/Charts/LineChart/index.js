import React,{ Component } from 'react'
import G2 from '@antv/g2';
import { Icon } from 'antd'
import PropTypes from 'prop-types'
import Debounce from 'lodash-decorators/debounce';
import Bind from 'lodash-decorators/bind';
import numeral from 'numeral'
import equal from '../equal';
import styles from './index.less'

export default class LineChart extends Component {
  static defaultProps = {
    height: 400,
    title: '人次',
  }
  static propTypes = {
    height: PropTypes.number,
    title: PropTypes.string,
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
    let { height, dv, title } = props;
    
    this.chart && this.chart.destroy();
    
    const chart = new G2.Chart({
      container: this.node,
      forceFit: true,
      height: height
    });
    chart.source(dv, {
      week: {
        // range: [ 0, 1 ]
      }
    });
    chart.tooltip({
      crosshairs: {
        type: 'line'
      },
      showTitle: true,
      title: 'week',
      itemTpl: `<li style="margin-bottom: 4px;"><span style="width: 7px; height: 7px; border-radius: 50%; border: 1px solid rgb(255, 255, 255); display: inline-block; margin-right: 8px; background-color: {color};" class="g2-tooltip-marker"></span>{name}: {value}${title == '人次'? '人': title}</li>`
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
      offsetY: 0,
      layout: 'horizontal',
      position: 'top'
    });
    chart.axis('week', {
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