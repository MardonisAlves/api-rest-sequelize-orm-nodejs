const { body, validationResult, param } = require('express-validator');


module.exports.validate = function () {

    const validar = [
        body('email').isEmail().normalizeEmail().withMessage('E-mail esta invalido'),
        body('password').trim().escape().isLength({ min: 8 }).withMessage('Password deve ter no minimo 8 caracteres'),
        body('nome').trim().escape().notEmpty().withMessage('Nome é obrigatorio'),
        body('sobrenome').trim().escape().notEmpty().withMessage('Sobrenome é obrigatório'),
    ]

    return validar
}


module.exports.validarTarefa = () => {
    const validar = [
        body('nometarefa').not().isEmpty().withMessage('Qual o nome da tarefa'),
        body('valor').not().isEmpty().withMessage('Qual valor ?'),
        body('local').not().isEmpty().withMessage('Informe o local'),
        body('data').not().isEmpty().withMessage('Data esta vazia'),
    ]
    return validar
}

module.exports.valIde = () => {

    const validar = param('id').isInt().withMessage('o id deve ser inteiro')

    return validar
}



module.exports.errors = (req, res) => {

    const errors = validationResult(req, res);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    return errors
}