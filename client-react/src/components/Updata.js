import React, { Component } from 'react'
import { Modal, Button ,Input } from 'antd';
class Updata extends Component {
    state = { 
      visible: false,
      username:this.props.record.username,
      password:this.props.record.password,
      nickname:this.props.record.nickname,
      address:this.props.record.address
    };
    showModal = () => {
        this.setState({
          visible: true,
        });
      };
    
      handleOk = e => {
        const { record,getlist} = this.props
        const {password,address,nickname } = this.state
        this.Api('put','/uplist',{
          id:record.id,
          password,
          address,
          nickname
        }).then(res=>{
          alert(res.data.msg)
          getlist()
        })
        this.setState({
          visible: false,
        });

      };
    
      handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      }
      handleChange(key,e){
          this.setState({
            [key]:e.target.value
          })
      }
    render() {

        const {username,password,address,nickname } = this.state
        return (
            <div>
            <Button type="primary" onClick={this.showModal}>
            编辑
          </Button>
          <Modal
            title="Basic Modal"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
          <div>
          <p>用户名:{username}</p>
          <p>密码:  {password}</p>
          <p>昵称:<Input size="small" value={nickname}onChange={this.handleChange.bind(this,'nickname')}/></p>
          <p>地址:<Input size="small" value={address} onChange={this.handleChange.bind(this,'address')}/></p>
          
          </div>
          </Modal>
            </div>
        )
    }
}
export default Updata