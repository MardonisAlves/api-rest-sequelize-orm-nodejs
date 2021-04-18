
const { Tarefas } = require('../models')

module.exports.listall = (req, res) => {
    const id = req.params.id
      Tarefas.findAll()
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
    const nome = req.body.nome
    Tarefas.update({ name: nome}, {
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
