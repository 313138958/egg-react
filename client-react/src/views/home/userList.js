import React, { Component } from 'react'
import { Table } from 'antd';
import Delete from '../../components/Delete'
import Updata from '../../components/Updata'
class UserList extends Component {
    state = {
        userlist:[]
    }
    
    onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
  }
    render() {
        const columns = [
            {
              title: 'Name',
              dataIndex: 'username',
              // specify the condition of filtering result
              // here is that finding the name started with `value`
              sorter: (a, b) => a.username.length - b.username.length,
              sortDirections: ['descend'],
            },
            {
              title: 'Nikename',
              dataIndex: 'nickname',
            },
            {
              title: 'Address',
              dataIndex: 'address',
              sorter: (a, b) => a.address.length - b.address.length,
              sortDirections: ['descend', 'ascend'],
            },
            {
              title: 'Role',
              dataIndex: 'role',
            },
            {
                title: 'operation',
                render: (text, record) =>(
                  <div>
                  {this.state.userlist.length===1?<Updata record={record} getlist={this.componentDidMount.bind(this)}></Updata>:
                    <div className="butbig">
                    <Updata record={record} getlist={this.getuserlist.bind(this)}></Updata>
                    <Delete type="user" record={record} getlist={this.getuserlist.bind(this)}></Delete>
                    </div>
                  }
                  </div>
                )
                    
            }
          ]
        return (
            <div>
            UserList
            <Table rowKey="id" columns={columns} dataSource={this.state.userlist} onChange={this.onChange.bind()} />
            </div>
        )
    }
    componentDidMount(){
        this.getuserlist()
    }
    getuserlist(){
      this.Api('get','/getlist').then(res=>{
        this.setState({userlist:res.data.result})
      })
    }
}
export default UserList