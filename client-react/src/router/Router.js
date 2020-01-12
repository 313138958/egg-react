import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom'

function Router (props){
    const {routers} = props
    return <Switch>
        {
            routers.map((item,key)=>{
                if(item.from!==undefined) return <Redirect key={key} from={item.from} to={item.to} exact />
                return <Route key={key} path={item.path} render={message =><item.component {...message} routers={item.children}/>}></Route>
            })
        }
    </Switch>
}

export default Router