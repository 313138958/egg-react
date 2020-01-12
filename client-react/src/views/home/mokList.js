import React, { Component } from 'react'
import { Table, Divider,Button} from 'antd';
import Delete from '../../components/Delete'
class MokList extends Component {
    state = {
        list:[]
    }
    render() {
        const { list } = this.state
        const columns = [
            {
              title: 'ID',
              dataIndex: 'id',
              key: 'id'
            },
            {
              title:'Name',
              dataIndex:'name',
              key:'name'
            },
            {
              title:'Describe',
              dataIndex:'describe',
              key:'describe'
            },
            {
                title: 'Action',
                key: 'action',
                render: (text, record) => (
                  <span>
                    <Divider type="vertical" />
                    <Delete type="know" record={record} getlist={this.getlist.bind(this)}></Delete>
                  </span>
                )
              }
        ]

        return (
            
            <div>
            <Button type="primary" onClick={this.handleClick.bind(this)}>添加</Button>
            <Table rowKey='id' columns={columns} dataSource={list} />
            </div>
        )
    }
    handleClick(){
      this.props.history.push('/home/mokAdd')
    }
    componentDidMount(){
        this.getlist()
    }
    getlist(){
        this.Api('get','/getknowlist').then(res=>{
            this.setState({list:res.data.result})
        })
    }
}


export default MokList