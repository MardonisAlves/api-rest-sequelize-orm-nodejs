const {loginRoute} = require('./loginJwt')
const loginController = require('../controllers/loginController')

module.exports = (app) => {
    
    app.post('/login',loginRoute ,(req , res ) => {  
    })
}