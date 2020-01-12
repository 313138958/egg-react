import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd';
import Router from '../router/Router'
const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;
class Home extends Component {
    state = {
        collapsed: false,
        myList:[]
    }
    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };
    componentDidMount(){
        this.Api('get','/tablist').then(res=>{
            if(res.data.code ===1){
                this.setState({myList:res.data.list})
                return
            }
            alert(res.data.msg)
        })
    }
    render() {
        let {myList} = this.state
        return (
            <div>
            <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    {
                        myList.map(item =>{
                            return <SubMenu key={item.key} title={<span><Icon type={item.icon} /><span>{item.nameType} </span></span>}>
                             {
                                item.sub.map( val =>{
                                   return <Menu.Item key={val.key} onClick={()=>this.props.history.push(val.to)}> { val.name}</Menu.Item>
                                 })
                             }
                            </SubMenu>
                        })
                    }
                </Menu>
            </Sider>
            <Layout>
                <Header style={{ background: '#fff', paddingRight: '16px',textAlign:'right' }} >
                 <span>{localStorage.user}</span>|<span onClick={()=>{
                     localStorage.clear()
                     this.props.history.push('/login')
                 }}>退出</span> </Header>
                <Content style={{ margin: '0 16px' }}>
                        <Router routers={this.props.routers}></Router>
                </Content>
            </Layout>
        </Layout>
            </div>
        )
    }
}
export default Home





