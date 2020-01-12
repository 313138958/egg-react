import React, { Component } from 'react'
import Wangeditor from 'wangeditor'
import { Input ,Select , Button} from 'antd';
const { Option } = Select;
class Docadd extends Component {
    state = {
        list:[],
        knowid:null
    }
    handleChange(value) {
        this.setState({knowid:value})
    }
    handleClick(){
        let datalist = {
            title:this.refs.title.input.value,
            count:this.ED.txt.html(),
            knowid:this.state.knowid,
            time:new Date().getTime(),
            user:localStorage.user
        }
        this.Api('post','/addDoc',datalist).then(res=>{
            alert(res.data.msg)
            if(res.data.code===1){
                this.props.history.push('/home/docList')
            }
        })
    }
    render() {
        const { list } = this.state
        return (
            <div >
                <p>文档标题:<Input placeholder="Basic usage" ref="title"/> </p>
                <div id="edits"></div>
                <div>
                    选择知识库
                    <Select defaultValue="请选择" style={{ width: 120 }} onChange={this.handleChange.bind(this)}>
                        {
                            list.map(item=>{
                                return <Option key={item.id} value={item.id}> {item.name}</Option>
                            })
                        }
                    </Select>
                </div>
                <Button onClick={this.handleClick.bind(this)}>提交</Button>
            </div>
        )
    }
    componentDidMount(){
        this.getlist()
        let ED = new Wangeditor('#edits')
        ED.create();
        this.ED = ED
    }
    getlist(){
        this.Api('get','/getknowlist').then(res=>{
            this.setState({list:res.data.result})
        })
    }
}
export default Docadd