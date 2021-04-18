const userController = require('../controllers/userController')


const validarInputs = require('../helpe/inputsValidate')

module.exports = (app) => {

    app.get('/list', (req, res) => {
        userController.list(req, res)
    })

    app.post(
        '/new', validarInputs.validate(),
        (req, res) => {
            validarInputs.errors(req, res)
            userController.new(req, res)
        })

    app.put('/upuser/:id',
        validarInputs.valIde(),
        validarInputs.validate(),
        (req, res) => {
            validarInputs.errors(req, res)
            userController.update(req, res)
        })

    app.delete('/delete/:id', validarInputs.valIde(),
        (req, res) => {
            validarInputs.errors(req, res)
            userController.delete(req, res)
        })
}


