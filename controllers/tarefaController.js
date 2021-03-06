const { Op } = require("sequelize");
const { param } = require('express-validator')
const { Tarefas } = require('../models')
const {Users} = require('../models')

module.exports.listall = (req, res) => {
    const id = req.params.id
    Tarefas.findAll({
      include:{
          model:Users
        } 
    })
        .then((result) => {
            return res.json(result)
        }).catch((error) => {
            console.log(error)
        })
}



module.exports.list = (req, res) => {
    const id = req.params.id
    Tarefas.findAll({
        where: {
            UserId: id
        }

    }).then((result) => {
        return res.json(result)
    }).catch((error) => {
        return res.json(error)
        })
}

module.exports.listId = (req, res) => {
    const id = req.params.id
    Tarefas.findAll({
        where: {
            id: id
        }

    }).then((result) => {
        return res.json(result)
    }).catch((error) => {
        return res.json(error)
        })
}


module.exports.newtarefa = (req, res) => {

    const nome = req.body.nome
    const valor = req.body.valor
    const local = req.body.local
    const UserId = req.body.UserId
    const data = req.body.data
    const status = req.body.situacao
    console.log(req.body.nomeDatarefa)

    Tarefas.create(
        { UserId: UserId, nome: nome, valor: valor, data: data, status: status, local: local }
    ).then((result) => {
        res.json({ 'sms': 'Tarefa cadastrado com sucesso!' })
    }).catch((error) => {
        console.log(error)
    })



}


module.exports.update = (req, res) => {
    const status = req.body.status
    const id = req.params.id
    const nome = req.body.nome
    const valor = req.body.valor
    const data = req.body.data
    const local = req.body.local
    Tarefas.update({ status: status, nome: nome, valor: valor, data: data, local: local }, {
        where: {
            id: id
        }
    }).then((result) => {
        res.send({ user: 'User atualizado com sucesso!' })
    }).catch((error) => {
        console.log(error)
    })

}


module.exports.delete = (req, res) => {
    const id = req.params.id
    Tarefas.destroy({
        where: {
            id: id
        }
    }).then((result) => {
        res.json({ terfa: 'Terefa deletada com sucesso!' })
    }).catch((error) => {
        console.log(error)
    })
}

module.exports.pendentes = (req, res) => {
    const id = req.params.id
    Tarefas.count({
        where: {
            status: 0,
            UserId:id
        }
    }).then((result) => {
        return res.json(result)
    }).catch((error) => {
        return res.json(error)
    })
}


module.exports.totallista = (req, res) => {
    const id = req.params.id
    Tarefas.count({where:{UserId:id}}).then((result) => {
        return res.json(result)
    }).catch((error) => {
        return res.json(error)
    })
}

module.exports.concluidas = (req, res) => {
    const id = req.params.id
    Tarefas.count({
        where:{
            status:1,
            UserId:id
        }
    }).then((result) => {
        return res.json(result)
    }).catch((error) => {
        return res.json(error)
    })
}

module.exports.valortotal = (req, res) => {
    const id = req.params.id
    Tarefas.sum('valor' , {where: {UserId:id}})
    .then((result) => {
        return res.json(result)
    }).catch((error) => {
        return res.json(error)
    })
}

module.exports.searchTarefas = (req, res) =>{
    const nome = req.params.nome
    
    Tarefas.findAll({
        where:{
            nome:{
               [Op.like]:'%' + nome + '%'
            }
         }
    })
    .then((result) => {
        return res.json(result)
    }).catch((error) => {
        return res.json(error)
    })  
}
