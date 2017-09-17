

import React from 'react'

import { Table, message } from 'antd';

const columns = [
  { title: '用户名', width: 100, dataIndex: 'name', key: 'name', fixed: 'left' },
  { title: 'userid', width: 100, dataIndex: 'userid', key: 'age', fixed: 'left' },
  { title: '手机号', dataIndex: 'phone', key: '1' },
  { title: '创建时间', dataIndex: 'cdata', key: '2' },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => <a href="javascript:;" onClick={()=>message.success('o(>﹏<)o千万别')}>删除</a>,
  },
];

const data = [{
  key: '1',
  name: 'John Brown',
  userid: 32,
  phone: '18121262781',
  cdata: '2017-09-09'
}, {
  key: '2',
  name: 'Jim Green',
  userid: 40,
  phone: '131****1234',
  cdata: '2017-09-09'
}];

class Userinfo extends React.Component{
    // constructor(props){
    //     super(props)
    // }
    render(){
        console.log(this.props)
        return(
            <Table columns={columns} dataSource={data} scroll={{ x: 1300 }} />
        )
    }
}

export default Userinfo

