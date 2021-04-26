const tarefaController = require('../controllers/tarefaController')
const validarTarefas = require('../helpe/validarUsers')

/*
    obs : criar help para validar tarefas
*/

module.exports = (app) => {
    app.get('/tarefas', (req, res) => {
        tarefaController.listall(req, res)
    })


    app.get('/tarefas/:id', (req, res) => {
        tarefaController.list(req, res)
    })

    app.post('/tarefa', validarTarefas.validarTarefa(), (req, res) => {
        validarTarefas.errors(req, res)
        tarefaController.newtarefa(req, res)
    })


    app.put('/uptarefa/:id', (req, res) => {
        tarefaController.update(req, res)
    })


    app.delete('/deltarefa/:id', (req, res) => {
        tarefaController.delete(req, res)
    })
}