const { Tarefas } = require('../models')
const { Users } = require('../models')

module.exports.list = (req, res) => {
    Tarefas.findAll({
        where: {
            userid: 1  // req.body.userid
        }

    })
        .then((result) => {
            return res.json(result)
        })
        .catch((error) => {
            console.log(error)
        })
}


module.exports.newtarefa = (req, res) => {
    const nometarefa = req.body.nometarefa
    const valor = req.body.valor
    const local = req.body.local
    const userid = req.body.userid

    Tarefas.create({  userid:userid , nome: nometarefa, valor: valor, local: local })
        .then((result) => {
            res.json({ 'sms': 'Tarefa cadastrado com sucesso!' })
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
