import React, { Component } from 'react'
import {
    Form,
    Input,
    Tooltip,
    Icon,
    Button,
  } from 'antd';
import md5 from 'md5'
class Register extends Component {
    state = {
            confirmDirty: false,
            autoCompleteResult: [],
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
            values.password = md5(values.password)
            this.Api('post','/registry',values).then(res=>{
                if(res.data.code !==1){
                   alert(res.data.msg)
                   return
                }
                alert(res.data.msg)
                this.props.history.push('/login')
            })
          }
        });
      };
    render() {
        const { getFieldDecorator } = this.props.form;
      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      };
      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 12,
            offset: 8,
          },
        },
      };
        return (
            <div>
            <Form {...formItemLayout} {...tailFormItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item label="用户名">
            {getFieldDecorator('username', {
              rules: [
                {
                  required: true,
                  message: 'Please input your 用户名!',
                },
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="密码" hasFeedback>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: 'Please input your password!',
                },
                {
                  validator: this.validateToNextPassword,
                },
              ],
            })(<Input.Password />)}
          </Form.Item>
          <Form.Item label="确认密码" hasFeedback>
            {getFieldDecorator('confirm', {
              rules: [
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                {
                  validator: this.compareToFirstPassword,
                },
              ],
            })(<Input.Password onBlur={this.handleConfirmBlur} />)}
          </Form.Item>
          <Form.Item
            label={
              <span>
                Nickname&nbsp;
                <Tooltip title="What do you want others to call you?">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>
            }
          >
            {getFieldDecorator('nickname', {
              rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="地址">
            {getFieldDecorator('address', {
              rules: [
                {
                  required: true,
                  message: 'Please input your 地址!',
                },
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              注册
            </Button>
          </Form.Item>
        </Form>
            </div>
        )
    }
}
export default Form.create({ name: 'register' })(Register)

  
  

  
