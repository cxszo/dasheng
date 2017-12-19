import React,{ Component } from 'react'
import { connect } from 'dva';
import { Row, Col, Icon, Card, Tabs, Table, Radio, Menu, Dropdown } from 'antd';
import moment from 'moment'
import DataSet from '@antv/data-set'

import PageHeaderLayout from '../../../layouts/PageHeaderLayout';
import HeadSift from '../../../components/HeadSift'
import { LineChart } from '../../../components/Charts'
import { getTimeDistance } from '../../../utils/utils';
const { TabPane } = Tabs;
import styles from './index.less'

const ldata = {
  startDate:'',
  endDate:''
}
let cData = {
  ...ldata
}
@connect(state => ({
  dataAll: state.dataAll,
}))
export default class AddUser extends Component {
  state = {
  }
  componentDidMount() {
    let date = getTimeDistance('year');
    let startDate = moment(date[0]).format('YYYY-MM-DD');
    let endDate = moment(date[1]).format('YYYY-MM-DD')
    Object.assign(cData, {
      startDate,
      endDate
    })
    this.fetch()
   
  }
  componentWillUnmount() {

  }
  fetch(){
    const { dispatch } = this.props;
    dispatch({
      type: 'dataAll/fetch',
      payload: cData,
    });
  }
  
  render(){


    const data1 = [
      { week: '6/26-7/2', add: 1364, apply: 1186 },
      { week: '7/3-7/9', add: 1525, apply: 1269 },
      { week: '7/10-7/16', add: 1720, apply: 1469 },
      { week: '7/17-7/23', add: 1842, apply: 1625 },
      { week: '7/24-7/30', add: 1633, apply: 1447 },
      { week: '7/31-8/6', add: 1982, apply: 1666 },
      { week: '8/7-8/13', add: 1798, apply: 1578 },
      { week: '8/14-8/20', add: 1733, apply: 1479 },
      { week: '8/21-8/27', add: 1526, apply: 1304 },
      { week: '8/28-9/3', add: 1413, apply: 1152 },
      { week: '9/4-9/10', add: 1728, apply: 1377 },
      { week: '9/11-9/17', add: 1565, apply: 1297 },
      { week: '9/18-9/24', add: 1037, apply: 777 },
      { week: '9/25-10/1', add: 1174, apply: 979 },
      { week: '10/2-10/8', add: 227, apply: 131 },
      { week: '10/9-10/15', add: 1636, apply: 1313 },
      { week: '10/16-10/22', add: 1591, apply: 1283 },
      { week: '10/23-10/29', add: 1386, apply: 1171 },
      { week: '10/30-11/5', add: 1537, apply: 1212 },
      { week: '11/6-11/12', add: 1827, apply: 1477 },
      { week: '11/13-11/19', add: 1816, apply: 1440 },
      { week: '11/20-11/26', add: 1709, apply: 1399 },
      { week: '11/27-12/3', add: 1524, apply: 1162 },
      { week: '12/4-12/10', add: 1685, apply: 1374 },
      { week: '12/11-12/17', add: 1492, apply: 1181 }
    ];
    const data = [
      { week: '6/26', add: 1364, apply: 1186 },
      { week: '7/3', add: 1525, apply: 1269 },
      { week: '7/10', add: 1720, apply: 1469 },
      { week: '7/17', add: 1842, apply: 1625 },
      { week: '7/24', add: 1633, apply: 1447 },
      { week: '7/31', add: 1982, apply: 1666 },
      { week: '8/7', add: 1798, apply: 1578 },
      { week: '8/14', add: 1733, apply: 1479 },
      { week: '8/21', add: 1526, apply: 1304 },
      { week: '8/28', add: 1413, apply: 1152 },
      { week: '9/4', add: 1728, apply: 1377 },
      { week: '9/11', add: 1565, apply: 1297 },
      { week: '9/18', add: 1037, apply: 777 },
      { week: '9/25', add: 1174, apply: 979 },
      { week: '10/2', add: 227, apply: 131 },
      { week: '10/9', add: 1636, apply: 1313 },
      { week: '10/16', add: 1591, apply: 1283 },
      { week: '10/23', add: 1386, apply: 1171 },
      { week: '10/30', add: 1537, apply: 1212 },
      { week: '11/6', add: 1827, apply: 1477 },
      { week: '11/13', add: 1816, apply: 1440 },
      { week: '11/20', add: 1709, apply: 1399 },
      { week: '11/27', add: 1524, apply: 1162 },
      { week: '12/4', add: 1685, apply: 1374 },
      { week: '12/11', add: 1492, apply: 1181 }
    ];
    const ds = new DataSet();
    const dv = ds.createView().source(data);
    dv.transform({
      type: 'rename',
      map: {
        add: '新增用户',
        apply: '申请认证用户' 
      }
    });
    dv.transform({
      type: 'fold',
      fields: [ '新增用户', '申请认证用户' ], // 展开字段集
      key: 'city', // key字段
      value: 'temperature', // value字段 y轴
    });
    return (
      <div className={styles.add_user}>
        <PageHeaderLayout
          content={<HeadSift  />}
        >
          <Card title="新增认证用户及申请认证用户_周变化曲线" bordered={false} loading={false}>
            <div>
              <LineChart height={300} dv={dv}/>
            </div>
          </Card>
        </PageHeaderLayout>
      </div>

      
    )
  }
}

/**

 */
