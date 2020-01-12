'use strict';

const Controller = require('egg').Controller;

class DocController extends Controller {
  async getdoclist() {
    const { ctx } = this;
    const result = await ctx.service.doc.getdoclist(ctx.info.username)    
    ctx.body = {code:1,msg:'操作成功',result};
  }
  async add(){
    const { ctx } = this;
    const result = await ctx.service.doc.add(ctx.request.body)    
    if(result.affectedRows>0){
      ctx.body = {code:1,msg:'操作成功',result};
    }
  }
  async docdel(){
    const { ctx } = this;
    const result = await ctx.service.doc.docdel(ctx.request.body)
    if(result.affectedRows>0){
      ctx.body = {code:1,msg:'操作成功',result};
    }
    
  }
}

module.exports = DocController;