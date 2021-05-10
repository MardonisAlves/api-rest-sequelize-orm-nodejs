const {loginRoute} = require('./loginJwt')


module.exports = (app) => {
    app.post('/login',loginRoute ,(req , res , next) => { 
    })
}