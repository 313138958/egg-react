'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async login(username) {
    const results = await this.app.mysql.select('user',{where:{username}})
    return results
}
  async registry ({username}){
    const results = await this.app.mysql.select('user',{where:{username}})
    return results
  }
  async register ({username,password,role="访客",nickname,address}){
    const results = await this.app.mysql.insert('user',{username,password,role,nickname,address})
    return results
  }
  async getlist(){
    const results = await this.app.mysql.select('user')
    return results
  }
  async getlistRole(username){
    const results = await this.app.mysql.select('user',{where:{username}})
    return results
  }
  async deletelist({id}){
    const results = await this.app.mysql.delete('user',{id})
    return results
  }
  async uplist(id,nickname,address){
    const results = await this.app.mysql.update('user',{id,nickname,address})
    return results
  }
}

module.exports = UserService;