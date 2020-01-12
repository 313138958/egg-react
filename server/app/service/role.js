'use strict';

const Service = require('egg').Service;

class RoleService extends Service {
  async index(role) {
    const results = await this.app.mysql.select('tab_list',{where:{role}})
    return results
}
}

module.exports = RoleService;