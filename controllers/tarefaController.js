
const { param } = require('express-validator')
const { Tarefas } = require('../models')

module.exports.listall = (req, res) => {
    const id = req.params.id
      Tarefas.findAll({
        where: {
            userid: id
        }
      })
      .then((result) => {
              return res.json(result)
          })
          .catch((error) => {
              console.log(error)
          })
  }

  

module.exports.list = (req, res) => {
  const id = req.params.id
    Tarefas.findAll({
        where: {
            userid: id 
        }

    })
        .then((result) => {
            return res.json(result)
        })
        .catch((error) => {
            return res.json(error)
        })
}


module.exports.newtarefa = (req, res) => {

    const nome = req.body.nome
    const valor = req.body.valor
    const local = req.body.local
    const userid = req.body.userid
    const data = req.body.data
    const status =req.body.situacao
    console.log(req.body.nomeDatarefa)

    Tarefas.create(
        { userid:userid , nome: nome, valor: valor, data: data , status: status ,local: local})
        .then((result) => {
            res.json({ 'sms': 'Tarefa cadastrado com sucesso!' })
        })
        .catch((error) => {
            console.log(error)
        })
        
        

}


module.exports.update = (req, res) => {
    const status = req.body.status
    const id = req.params.id
    Tarefas.update({ status: status}, {
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
