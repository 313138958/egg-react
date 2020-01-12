
import Login from '../views/Login'
import Register from '../views/Register'
import Home from '../views/Home'
import Doclist from '../views/home/docList'
import Docadd from '../views/home/docAdd'
import Moklist from '../views/home/mokList'
import Mokadd from '../views/home/mokAdd'
import Userlist from '../views/home/userList'
import LookList from '../views/home/lookList'
const routerConfig = [ 
    {
        path:'/home',
        component:Home,
        children:[
            {
                path:'/home/docList',
                component:Doclist
            },
            {
                path:'/home/docAdd',
                component:Docadd
            },
            {
                path:'/home/mokList',
                component:Moklist
            },
            {
                path:'/home/mokAdd',
                component:Mokadd
            },
            {
                path:'/home/userList',
                component:Userlist
            },
            {
                path:'/home/lookList',
                component:LookList
            },
            {
                from:'/home',
                to:'/home/userList'
            }
        ]
    },
    {
        path:'/login',
        component:Login,
    },
    {
        path:'/register',
        component:Register,
    },
    {
        from:'/',
        to:'/login'
    }
]

export default routerConfig