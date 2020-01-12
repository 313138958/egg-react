'use strict'
const whitelist = ['/login','/registry','getdoclist']
module.exports = options => {
    return async function (ctx, next) {
      const url = ctx.request.path
      const clienttoken = ctx.request.header.token
      const servertoken = ctx.session.usertoken
      if(!whitelist.includes(url)){
          if(!clienttoken){
              ctx.status = 401
              ctx.body={
                  code:0,
                  msg:'没有登录,请登录'
              }
          }else if(servertoken===undefined){
            ctx.status = 401
              ctx.body={
                  code:0,
                  msg:'登录超时,请重新登录'
              }
          }else if(servertoken !== clienttoken){
              ctx.status = 401
              ctx.body ={
                  code:0,
                  msg:'身份不通过,请重新登录验证身份'
              }
          }else{
              await next()
          }
      }else{
        await next()
      }
      
    }
  }