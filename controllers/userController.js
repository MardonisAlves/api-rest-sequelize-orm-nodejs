const { Users } = require('../models')
var bcrypt  = require('bcrypt')

module.exports.list = (req, res) => {
    Users.findAll()
        .then((result) => {
            
            res.json({ 'list': result })
        })
        .catch((error) => {
            console.log(error)
        })
}


module.exports.new = (req, res) => {
    //validar o email se ja existe
    const saltRounds = 10;
    const nome = req.body.nome
    const sobrenome = req.body.sobrenome
    const email = req.body.email
    const password = bcrypt.hashSync(req.body.password , saltRounds)

    Users.create({ name: nome, sobrenome: sobrenome, email: email, password: password })
        .then(( result) => {
            res.send({ 'sms': 'User cadastrado com sucesso!' })
        })
        .catch((err) => {
            res.send({ 'sms': err })
        })
}


module.exports.update = (req, res) => {
    const email = req.body.email
    Users.update({ email: email }, {
        where: {
            id: 2
        }
    }).then((result) => {
        res.send({ user: 'User atualizado com sucesso!' })
    }).catch((error) => {
        console.log(error)
    })

}


module.exports.delete = (req, res) => {

    const id = req.body.id

    Users.destroy({
        where: {
            id: id
        }
    }).then((result) => {
        res.send({ users: 'Users deletado com sucesso!' })
    }).catch((error) => {
        console.log(error)
    })
}
