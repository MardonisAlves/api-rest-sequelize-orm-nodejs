const userController = require('../controllers/userController')
const { body, validationResult } = require('express-validator');
module.exports = (app) => {

    app.get('/list', (req, res) => {
        userController.list(req, res)

    })

    app.post(
        '/new',
        body('email').isEmail().normalizeEmail().withMessage('E-mail esta invalido'),
        body('password').trim().escape().isLength({ min: 8 }).withMessage('Password deve ter no minimo 8 caracteres'),
        body('nome').trim().escape().notEmpty().withMessage('Nome é obrigatorio'),
        body('sobrenome').trim().escape().notEmpty().withMessage('Sobrenome é obrigatório'),
        (req, res) => {

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
              return res.status(400).json({ errors: errors.array() });
            }

            userController.new(req, res)
        })





    app.put('/update', (req, res) => {
        userController.update(req, res)
    })

    app.delete('/delete', (req, res) => {
        userController.delete(req, res)
    })
}


