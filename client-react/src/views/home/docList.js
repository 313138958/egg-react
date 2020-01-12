import React, { Component } from 'react'
import { Table, Divider , Button} from 'antd';
import Delete from '../../components/Delete'
class Doclist extends Component {
    state = {
        list:[]
    }
    render() {
        const {list} = this.state
        const columns = [
            {
              title: 'Title',
              dataIndex: 'title',
              key: 'title',
            },
            {
              title:'Time',
              dataIndex:'time',
              key:'time'
            },
            {
              title:'user',
              dataIndex:'user',
              key:'user'
            },
            {
                title: 'Action',
                key: 'action',
                render: (text, record) => (
                  <div className="boxx">
                    <Button onClick={this.handlepush.bind(this,record)}>查看</Button>
                    <Divider type="vertical" />
                    <Delete type="doc" record={record} getlist={this.getlist.bind(this)}></Delete>
                  </div>
                ),
            }
        ]
        return (
            <div>
                <Table rowKey='id' columns={columns} dataSource={list} />
            </div>
        )
    }
    handlepush(data){
        this.props.history.push({
            pathname:'/home/lookList',
            state:data
        })
    }
    componentDidMount(){
        this.getlist()
    }
    getlist(){
        this.Api('get','/getdoclist').then(res=>{
            console.log(res)
            this.setState({
                list:res.data.result
            })
        })
    }
}

export default Doclist