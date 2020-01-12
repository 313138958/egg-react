'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  //用户登录,注册,获取用户列表
  router.post('/login',controller.user.login) //登录
  router.post('/registry',controller.user.registry)//注册
  router.get('/getlist',controller.user.getlist)//获取用户列表
  router.delete('/deletelist',controller.user.deletelist)//删除用户
  router.put('/uplist',controller.user.uplist)//更新用户信息
  //tab列表 鉴权role角色鉴定
  router.get('/tablist',controller.list.index)

  //文档列表,创建列表
  router.get('/getdoclist',controller.doc.getdoclist)//获取文档列表
  router.post('/addDoc',controller.doc.add)//创建文档
  router.delete('/docdel',controller.doc.docdel)
  //知识库,创建知识库,知识库列表
  router.get('/getknowlist',controller.know.index)
  router.delete('/knowdelete',controller.know.knowdelete)//删除知识库
  router.post('/addknow',controller.know.addknow)//创建知识库
};
