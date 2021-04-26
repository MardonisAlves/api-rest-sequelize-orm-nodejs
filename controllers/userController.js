const { Users } = require('../models')
const  verificaEmail  = require('../helpe/vericarUsers')
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

module.exports.listbyId = (req, res) => {
    const id = req.params.id
    Users.findAll({
        where: {
            id:id
        }
    })
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
      
    verificaEmail.emailUser(req , res)

    Users.create({ name: nome, sobrenome: sobrenome, email: email, password: password })
        .then(( result) => {
            res.json({ 'sms': 'User cadastrado com sucesso!' })
        })
        .catch((err) => {
            res.send({ 'sms': err })
        })
}


module.exports.update = (req, res) => {
    const id = req.params.id
    const email = req.body.email
    const nome = req.body.nome
    const sobrenome = req.body.sobrenome

    Users.update({name:nome , sobrenome:sobrenome ,  email: email }, {
        where: {
            id: id
        }
    }).then((result) => {
        res.json({ user: 'User atualizado com sucesso!' })
    }).catch((error) => {
        console.log(error)
    })

}


module.exports.delete = (req, res) => {

    const id = req.params.id

    Users.destroy({
        where: {
            id: id
        }
    }).then((result) => {
        res.json({ user: 'Users deletado com sucesso!' })
    }).catch((error) => {
        console.log(error)
    })
}
