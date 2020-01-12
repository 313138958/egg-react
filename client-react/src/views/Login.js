import React, { Component } from 'react'
import { Form, Icon, Input, Button} from 'antd';
import md5 from 'md5'
class Login extends Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
            values.password = md5(values.password)
                this.Api('post','/login',values).then(res=>{
                    if(res.data.code!==1){
                      alert(res.data.msg)
                      return
                    }
                    alert(res.data.msg)
                    localStorage.setItem('user',values.username)
                    localStorage.setItem('token',res.data.token)
                    this.props.history.push('/home')
                })
          }
        });
      }
      handleClick(){
        this.props.history.push('/register')
      }
    render() {
        const { getFieldDecorator } = this.props.form;
        const tailFormItemLayout = {
            wrapperCol: {
              xs: {
                span: 12,
                offset: 0,
              },
              sm: {
                span:6,
                offset: 9,
              },
            },
          }
        return (
            <div className="box">
            <h2>登录界面 <small>DENGLU</small> </h2>
            <Form {...tailFormItemLayout} onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your 用户名!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="用户名"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your 密码!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="密码"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登录
          </Button>
          <Button type="primary" className="m15" onClick={this.handleClick.bind(this)}>
            注册
          </Button>
        </Form.Item>
      </Form>
            </div>
        )
    }
}
export default Form.create({ name: 'normal_login' })(Login)