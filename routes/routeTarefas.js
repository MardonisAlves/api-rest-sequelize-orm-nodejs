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
}