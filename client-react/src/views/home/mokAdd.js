import React, { Component } from 'react'
import { Input ,Button } from 'antd';
const { TextArea } = Input;
 class Mokadd  extends Component {
    render() {
        return (
            <div>
            Mokadd
            <div>
                知识库标题
                <Input placeholder="点这里,点这里" ref='title' />
            </div>
            <div>
            知识库描述
            <TextArea rows={6} ref='content'/>
            </div>
            <div>
            <Button type="primary" onClick={this.handleClick.bind(this)}>提交</Button>
            </div>
            </div>
        )
    }
    handleClick(){
        let datalist = {
            name:this.refs.title.input.value,
            describe:this.refs.content.state.value
        }
        this.Api('post','/addknow',datalist).then(res=>{
            alert(res.data.msg)
            if(res.data.code===1){
                this.props.history.push('/home/mokList')
            }
        })
    }
}
export default Mokadd