import axios from 'axios'

export default (method,url,data=[])=>{
    let config = {}
    config.method = method
    let type = method==="get"?"parmas":"data"
    config.url = url
    config[type] = data
    config.headers = {
        token:localStorage.getItem('token')
    }


    return axios(config).catch(error=>{
        
    })

}