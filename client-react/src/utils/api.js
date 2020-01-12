
import axios from 'axios'

export default (method,url,data=[])=>{
  let configData        = {};
      configData.method = method;
  let type              = method==='get'?'params':'data';
      configData.url    = url;
      configData[type]  = data;
      configData.headers= {
      token:localStorage.getItem('token')
    };
  
    return axios(configData).catch(error=>{
        if(error.response&&error.response.status === 404){
            alert('接口不存在')
            return
        }
        if(error.response&&error.response.status === 500){
          alert('服务器故障')
          return
       }
       if(error.response&&error.response.status === 401){
         if(window.confirm('没有登陆,或权限不足,请重新登录')){
            window.location.href = '/login'
         }
        return
     }
    })
}