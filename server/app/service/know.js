'use strict';

const Service = require('egg').Service;

class KnowService extends Service {
  async index() {
    const results = await this.app.mysql.select('knowlist')
    return results
}
 async knowdelete({id}){
    const results = await this.app.mysql.delete('knowlist',{id})
    return results
 }
 async addknow(obj){
   const results = await this.app.mysql.insert('knowlist',obj)
   return results
 }
}

module.exports = KnowService;