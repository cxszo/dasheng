import React,{ Component } from 'react'
import G2 from '@antv/g2';
import Debounce from 'lodash-decorators/debounce';
import Bind from 'lodash-decorators/bind';
import numeral from 'numeral'
import equal from '../equal';
import styles from './index.less'
import DataSet from '@antv/data-set'
export default class TrendLine extends Component {
  state = {
    autoHideXLabels: false,
  }
  componentDidMount() {
    this.renderChart(this.props);
    this.resize();
    window.addEventListener('resize', this.resize);
  }

  componentWillReceiveProps(nextProps) {
    if (!equal(this.props, nextProps)) {
      this.renderChart(nextProps);
    }
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
    if (this.chart) {
      this.chart.destroy();
    }
    this.resize.cancel();
  }
  @Bind()
  @Debounce(300)
  resize() {
    
  }

  renderChart(props) {
    this.node.innerHTML = ''    
    const { data, height=400 } = props;
    if(!data || (data && data.length < 1)) {
      return
    }
    const chart = new G2.Chart({
      container: this.node,
      forceFit: true,
      height: height
    });
    chart.source(data, {
      time: {
        type: 'timeCat',
        nice: true,
        mask: 'MM-DD',
      }
    });
    
    chart.axis('value', {
      label: {
        formatter: val => {
          if(!val) val = 0;
          return val + 'k';
        }
      }
    });
    chart.line().position('time*value').color('mgr');
    chart.point().position('time*value').color('mgr').size(4).shape('circle').style({
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
    const { height=400, title } = this.props;

    return (
      <div className={styles.chart} style={{ height }}>
        <div ref={this.handleRef} />
      </div>
    );
  }
}