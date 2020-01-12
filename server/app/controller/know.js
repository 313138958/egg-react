'use strict';

const Controller = require('egg').Controller;

class KnowController extends Controller {
  async index() {
    const { ctx } = this;
    const result = await ctx.service.know.index()
    if(result.length===0){
        ctx.body={code:0,msg:'失败'}
        return
    }
    ctx.body ={
        code:1,
        msg:'',
        result
    }
  }
  async knowdelete (){
    const { ctx} = this
    const result = await ctx.service.know.knowdelete(ctx.request.body)
    if(result.affectedRows>0){
      ctx.body = { 
        code:1,
        msg:'操作成功'
      }
    }
  }
  async addknow(){
    const { ctx } = this
    const result = await ctx.service.know.addknow(ctx.request.body)
    console.log(result)
    if(result.affectedRows>0){
      ctx.body = { 
        code:1,
        msg:'操作成功'
      }
    }
  }
}

module.exports = KnowController;
