import request from '../utils/request'


function login({username,password}){
    const url = '/login'
    request.post(url,{
        username,
        password
    })
}

export default {
    login
}