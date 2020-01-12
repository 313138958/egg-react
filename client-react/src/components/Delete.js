import React, { Component } from 'react'
import { Modal, Button } from 'antd';
const { confirm } = Modal;
class Delete extends Component {
  handleHttp(id,url){
    this.Api('delete', url, {id}).then(res => {
      alert(res.data.msg)
      this.props.getlist()
    })
  }
  showDeleteConfirm() {
    confirm({
      title: 'Are you sure delete this task?',
      content: 'Some descriptions',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk: () => {
        if (this.props.type === 'know') {
          this.handleHttp(this.props.record.id,'/knowdelete')
          return
        }
        if (this.props.type === 'user') {
          this.handleHttp(this.props.record.id,'/deletelist')
          return
        }
        if(this.props.type === 'doc'){
          this.handleHttp(this.props.record.id,'/docdel')
          return
        }
      }
    });
  }
  render() {

    return (
      <div>
        <Button onClick={this.showDeleteConfirm.bind(this)} type="solid">
          删除
            </Button>
      </div>
    )
  }
}
export default Delete