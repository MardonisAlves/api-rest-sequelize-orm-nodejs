const tarefaController = require('../controllers/tarefaController')
const validarTarefas = require('../helpe/validarUsers')
const  checkIfAuthenticated = require('../routes/checkIfAuth')


module.exports = (app) => {
    app.get('/tarefas', (req, res) => {
        tarefaController.listall(req, res)
    })


    app.get('/tarefas/:id', checkIfAuthenticated.auth(), (req, res) => {
        tarefaController.list(req, res)
    })

    app.get('/tarefa/:id' ,  checkIfAuthenticated.auth()  ,(req , res) => {
        tarefaController.listId(req, res)
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

    app.get('/tarefasPendetes' , (req , res) => {
        tarefaController.pendentes(req,res)
    })

    app.get('/totalTarefas' , (req, res) => {
        tarefaController.totallista(req ,res)
    })

    app.get('/concluidas' , (req, res) => {
        tarefaController.concluidas(req , res)
    })

    app.get('/valortotal' , (req, res) => {
        tarefaController.valortotal(req, res)
    })

    app.get('/searchTarefas/:nome') , (req,res) => {
        tarefaController.searchTarefas(req,res)
    }
}