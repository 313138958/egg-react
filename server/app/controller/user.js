'use strict';

const Controller = require('egg').Controller;
const jwt = require('jsonwebtoken')
const md5 = require('md5')
class UserController extends Controller {
  async login() {
    const { ctx,app } = this;
    const { username,password} = ctx.request.body
    const result = await ctx.service.user.login(username)
    if(result.length===0){
        ctx.body={code:0,msg:'没有此账号,请注册'}
        return
    }
    if(result[0].password !==password){
        ctx.body={code:0,msg:'密码错误'}
        return
    }
    const token = jwt.sign({...result[0]},app.config.keys)
    ctx.session.usertoken = token
    ctx.body = {
        code:1,
        msg:'登录成功',
        user:result[0].username,
        token
    }
  }
  async registry (){
      const { ctx } = this
      const ssw = await ctx.service.user.registry(ctx.request.body)
      if(ssw.length>0){
          ctx.body={code:0,msg:'用户名已存在'}
          return
      }

      const result = await ctx.service.user.register(ctx.request.body)
      if(result.affectedRows>0){
        ctx.body={
            code:1,
            msg:'注册成功,跳转登录界面'
        }
      }
      
  }
  async getlist(){
    const { ctx } = this
    if(ctx.info.role === '管理员'){
      const result = await ctx.service.user.getlist()
      ctx.body ={code:1,result}
      return
    }
    const result = await ctx.service.user.getlistRole(ctx.info.username)
    ctx.body ={code:1,result}
  }
  async deletelist(){
    const { ctx } = this;
    const result = await ctx.service.user.deletelist(ctx.request.body)
    if(result.affectedRows>0){
      ctx.body={code:1,msg:'操作成功'}
    }
  }
  async uplist(){
    const { ctx} = this
    const {id, nickname,address} = ctx.request.body

    if(nickname===""){
      ctx.body={code:0,msg:'参数不能为空'}
      return
    }
    if(address===""){
      ctx.body={code:0,msg:'参数不能为空'}
      return
    }
    const result = await ctx.service.user.uplist(id,nickname,address)
    if(result.affectedRows>0){
      ctx.body={code:1,msg:'操作成功'}
    }
  }
}

module.exports = UserController;