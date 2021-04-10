const { Users } = require('../models')

module.exports.list = (req, res) => {
    Users.findAll()
        .then((result) => {
            const jsonStringFy = JSON.stringify(result)
            const jsonParse = JSON.parse(jsonStringFy);
            res.send({ 'list': jsonParse })
        })
        .catch((error) => {
            console.log(error)
        })
}


module.exports.new = (req, res) => {
    const nome = req.body.nome
    const sobrenome = req.body.sobrenome
    const email = req.body.email
    const password = req.body.password

    Users.create({ name: nome, sobrenome: sobrenome, email: email, password: password })
        .then((result) => {
            res.send({ 'sms': 'User cadastrado com sucesso!' })
        })
        .catch((error) => {
            console.log(error)
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
