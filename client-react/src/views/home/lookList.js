import React, { Component } from 'react'

class LookList extends Component {
    state = this.props.location.state
    render() {
        console.log(this.props)
        return (
            <div>
                <div>标题:{this.state.title} </div>
                <div ref="cont"></div>
                <div>作者:{this.state.user}</div>
                <div>创建时间:{this.ftime(this.state.time)} </div>
            </div>
        )
    }
    componentDidMount(){
        this.refs.cont.innerHTML = '内容:'+ this.state.count
    }
    ftime= (timer)=>{
        let time = JSON.stringify(new Date(parseInt(timer)))
            console.log(time)
            time = time.slice(1,11)+' '+time.slice(12,20)
        return time
    }
}

export default LookList