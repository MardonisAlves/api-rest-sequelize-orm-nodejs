const userController = require('../controllers/userController')
const validarUser = require('../helpe/validarUsers')

module.exports = (app) => {

    /*
        obs : criar metodo getUser by Id
    */

    app.get('/list/:id', (req, res) => {
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


