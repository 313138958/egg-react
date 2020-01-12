'use strict';

const Controller = require('egg').Controller;
const tabList = require('../../config/tabList')
class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const result = await ctx.service.role.index(ctx.info.role)
    let newArr = result.map(item=>tabList[item.menu])

    let list = []

    newArr.forEach(item=>{
      let index = list.findIndex(jtem=>jtem.nameType === item.nameType)
      if(index !== -1){
        list[index].sub.push({
             name:item.name,
             key:item.key,
             to:item.to
        })
        return
      }
       list.push({
         nameType:item.nameType,
         key:'sub'+item.key,
         icon:item.icon,
         sub:[
           {
             name:item.name,
             key:item.key,
             to:item.to
           }
         ]
       })
    })
    ctx.body={
        code:1,
        msg:'',
        list
    }
  }
}

module.exports = HomeController;