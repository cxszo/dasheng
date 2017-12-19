import React, { PureComponent } from 'react';
import G2 from 'g2';
import Debounce from 'lodash-decorators/debounce';
import Bind from 'lodash-decorators/bind';
import equal from '../equal';
import styles from '../index.less';
import DataSet from '@antv/data-set'
class TrendBar extends PureComponent {
  state = {
    autoHideXLabels: false,
  }

  componentDidMount() {
    this.renderChart(this.props);
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
  @Debounce(200)
  resize() {
    if (!this.node) {
      return;
    }
    
  }

  handleRef = (n) => {
    this.node = n;
  }

  renderChart(props) {
    this.node.innerHTML = ''    
    const { data, height=350 } = props;
    if(!data || (data && data.length < 1)) {
      return
    }
  const ds = new DataSet();
  const dv = ds.createView().source(data);
  dv.transform({
    type: 'rename',
    map: {
      "audToPass": "接单审核-审核通过",
      "passToSign": "审核通过-签约完成",
      "preToPush": "预推送-推送订单",
      "pushToAud": "推送订单-接单审核",
      "pushToLoan": "推送订单-放款成功",
      "signToLoan": "签约订单-放款成功",
      "uvToPre": "uv-预推送",
      "uvToPush": "uv-推送订单"
    }
  })
  
  dv.transform({
    type: 'fold',
    fields: [
      '接单审核-审核通过',
      "审核通过-签约完成",
      "预推送-推送订单转化",
      "推送订单-接单审核",
      "推送订单-放款成功",
      "签约订单-放款成功",
      "uv-预推送",
      "uv-推送订单"
    ],
    key: 'type',                   // key字段
    value: 'percent',
  })
  dv.transform({
    type: "map",
    callback(row) {
      const p = Number(row.percent) || 0
      row.percent = p*100
      return row
    }
  })
  const chart = new G2.Chart({
    container: this.node,
    forceFit: true,
    height: height,
    padding: {
      bottom: 50
    }
  });
  chart.source(dv.rows,{
    percent: {
      range:[0,1],
      formatter: val => {
        return  val.toFixed(2) + '%'
      }
    }
  });
  chart.legend(false)
  // chart.coord().transpose();
  
  chart.interval().position('type*percent').color('type').label('percent');
  chart.render();
  this.chart = chart;
  }

  render() {
    const { height, title } = this.props;

    return (
      <div className={styles.chart} style={{ height }}>
        <div>
          <div ref={this.handleRef} />
        </div>
      </div>
    );
  }
}

export default TrendBar;
