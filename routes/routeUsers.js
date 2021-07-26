const userController = require('../controllers/userController')
const validarUser = require('../helpe/validarUsers')
const checkIfAuthenticated = require('../routes/checkIfAuth')
const { body, validationResult, param } = require('express-validator');
module.exports = (app) => {
    app.get('/list/:id', checkIfAuthenticated.auth(), (req, res) => {
        userController.listbyId(req, res)
    })

    app.get('/list', (req, res) => {
        userController.list(req, res)
    })
    /* OBS A VALIDAÇÃO ESTA CAUSANDO E*/
    app.post('/new',
        body('email').isEmail().normalizeEmail().withMessage('E-mail esta invalido'),
        body('password').trim().escape().isLength({ min: 8 }).withMessage('Password deve ter no minimo 8 caracteres'),
        body('nome').trim().escape().notEmpty().withMessage('Nome é obrigatorio'),
        body('sobrenome').trim().escape().notEmpty().withMessage('Sobrenome é obrigatório'),
        (req, res) => {
            const errors = validationResult(req);
           
            if (!errors.isEmpty()) {
                return res.status(400).json({ list: errors.array() });
            }
            userController.new(req, res)
        })

    app.put('/upuser/:id',
        validarUser.valIde(),
        validarUser.validate(),
        checkIfAuthenticated.auth(),
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


