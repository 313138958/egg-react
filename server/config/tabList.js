module.exports = {
    1:{
        nameType:"文档管理",
        icon:'file',
        name:'文档列表',
        key:1,
        to:'/home/docList'
    },
    2:{
        nameType:'用户管理',
        icon:'user',
        name:'用户列表',
        key:5,
        to:'/home/userList',
    },
    3:{
        nameType:"文档管理",
        icon:'file',
        name:'创建文档',
        key:2,
        to:'/home/docAdd'
    },
    4:{
        nameType:'知识库管理',
        icon:'team',
        name:'知识库',
        key:3,
        to:'/home/mokList'
    },
    5:{
        nameType:'知识库管理',
        icon:'team',
        name:'创建知识库',
        key:4,
        to:'/home/mokAdd'
    }
}

let ssw = [
    {
        nameType:"文档管理",
        key:'sub1',
        icon:'file',
        sub:[
            {
                name:'文档列表',
                key:1,
                to:'/home/docList'
            },
            {
                name:'创建文档',
                key:2,
                to:'/home/docAdd'
            }
        ]
    },
    {
        nameType:'知识库管理',
        key:'sub2',
        icon:'team',
        sub:[
            {
            name:'知识库',
            key:3,
            to:'/home/mokList'
            },
            {
                name:'创建知识库',
                key:4,
                to:'/home/mokAdd'
            }]
    },
    {
        nameType:'用户管理',
        key:'sub3',
        icon:'user',
        sub:[
            {
                name:'用户列表',
                key:5,
                to:'/home/userList',
            }
        ]
    }
]