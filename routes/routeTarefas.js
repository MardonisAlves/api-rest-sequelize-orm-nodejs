const  tarefaController  = require('../controllers/tarefaController')

module.exports =  (app) => {

    app.get('/tarefas',  (req, res) => {
        tarefaController.list(req, res)

    })

    app.post('/new',  (req, res) => {
        userController.new(req, res)
    })

    app.put('/update' , (req , res) => {
        userController.update(req , res)
    })

    app.delete('/delete' , (req , res) => {
        userController.delete(req , res)
    })
}