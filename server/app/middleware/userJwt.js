
const url = require('url')
const jwt = require('jsonwebtoken')
function verifytoken(token,keys){
    return new Promise(res=>{
        jwt.verify(token,keys,(error,result)=>{
            if(error) throw error
            res(result)
        })
    })
}
module.exports = options => {
    return async (ctx, next) =>{
        
        if(options.includes(url.parse(ctx.url).pathname)){
            await next()
            return
        }
        
        let token = ctx.get('token')

        if(!token){
            ctx.body={code:0,msg:'权限不足,请登录'}
            return
        }
        let info 
        try{
          info =  await verifytoken(token,ctx.app.config.keys)
        }
        catch (error) {
            ctx.body={code:0,msg:'权限不足,请登录'}
            return
        }

        ctx.info = info 
        await next()
    }
  };