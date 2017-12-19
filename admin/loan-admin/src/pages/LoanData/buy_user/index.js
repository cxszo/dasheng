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
export default class BuyUser extends Component {
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
      { week: 'Jan', Tokyo: 7.0, London: 3.9 },
      { week: 'Feb', Tokyo: 6.9, London: 4.2 },
      { week: 'Mar', Tokyo: 9.5, London: 5.7 },
      { week: 'Apr', Tokyo: 14.5, London: 8.5 },
      { week: 'May', Tokyo: 18.4, London: 11.9 },
      { week: 'Jun', Tokyo: 21.5, London: 15.2 },
      { week: 'Jul', Tokyo: 25.2, London: 17.0 },
      { week: 'Aug', Tokyo: 26.5, London: 16.6 },
      { week: 'Sep', Tokyo: 23.3, London: 14.2 },
      { week: 'Oct', Tokyo: 18.3, London: 10.3 },
      { week: 'Nov', Tokyo: 13.9, London: 6.6 },
      { week: 'Dec', Tokyo: 9.6, London: 4.8 }
    ];

    const data = [
      { week: '6/26', count: 2745 },
      { week: '7/3', count: 2941 },
      { week: '7/10', count: 3174 },
      { week: '7/17', count: 3706 },
      { week: '7/24', count: 3475 },
      { week: '7/31', count: 3598 },
      { week: '8/7', count: 3469 },
      { week: '8/14', count: 3258 },
      { week: '8/21', count: 3221 },
      { week: '8/28', count: 3781 },
      { week: '9/4', count: 4182 },
      { week: '9/11', count: 4143 },
      { week: '9/18', count: 3653},
      { week: '9/25', count: 2981},
      { week: '10/2', count: 1380},
      { week: '10/9', count: 3411 },
      { week: '10/16', count: 3480 },
      { week: '10/23', count: 3348 },
      { week: '10/30', count: 3828 },
      { week: '11/6', count: 3751 },
      { week: '11/13', count: 3407 },
      { week: '11/20', count: 3522 },
      { week: '11/27', count: 4001 },
      { week: '12/4', count: 3900 },
      { week: '12/11', count: 3659 }
    ];

    const ds = new DataSet();
    const dv = ds.createView().source(data);
    dv.transform({
      type: 'rename',
      map: {
        count: '消费人数',
      }
    });
    dv.transform({
      type: 'fold',
      fields: [ '消费人数' ], // 展开字段集
      key: 'city', // key字段
      value: 'temperature', // value字段 y轴
    });
    return (
      <div className={styles.buy_user}>
        <PageHeaderLayout
          content={<HeadSift  />}
        >
          <Card title="消费用户_周变化曲线" bordered={false} loading={false}>
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
