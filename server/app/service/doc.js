'use strict';

const Service = require('egg').Service;

class DocService extends Service {
  async getdoclist(user) {
    const results = await this.app.mysql.select('docx',{where:{user}})
    return results
}
 async add(obj){
  const results = await this.app.mysql.insert('docx',obj)
  return results
 }
 async docdel(id){
   const results = await this.app.mysql.delete('docx',id)
   return results
 }
 
}

module.exports = DocService;