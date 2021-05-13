const userController = require('../controllers/userController')
const validarUser = require('../helpe/validarUsers')
const fs = require('fs')

const expressJwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const RSA_PUBLIC_KEY = fs.readFileSync('config/public.key');

const checkIfAuthenticated = expressJwt({
    secret: RSA_PUBLIC_KEY,
    algorithms: ['RS256']
}); 

module.exports = (app) => {

    /*
        obs : criar metodo getUser by Id
    */

    app.get('/list/:id', checkIfAuthenticated, (req, res) => {
        userController.listbyId(req, res)
    })

    app.get('/list', (req, res) => {
        userController.list(req, res)
    })

    app.post('/new', validarUser.validate(), (req, res) => {
            validarUser.errors(req, res)
            userController.new(req, res)
        })

    app.put('/upuser/:id',
        validarUser.valIde(),
        validarUser.validate(),
        (req, res) => {
            validarUser.errors(req, res)
            userController.update(req, res)
        })

    app.delete('/delete/:id', validarUser.valIde(),
        (req, res) => {
            validarUser.errors(req, res)
            userController.delete(req, res)
        })
}


