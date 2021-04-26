const  tarefaController  = require('../controllers/tarefaController')
const { body, validationResult } = require('express-validator');

/*
    obs : criar help para validar tarefas
*/

module.exports =  (app) => {

    app.get('/tarefas',  (req, res) => {
        tarefaController.listall(req, res )

    })

    app.get('/tarefas/:id',  (req, res) => {
        tarefaController.list(req, res )

    })

    app.post('/tarefa',  
        body('nometarefa').not().isEmpty().withMessage('Qual o nome da tarefa'),
        body('valor').not().isEmpty().withMessage('Qual valor ?'),
        body('local').not().isEmpty().withMessage('Informe o local'),
        (req, res) => {
        
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
              return res.status(400).json({ errors: errors.array() });
            }

        tarefaController.newtarefa(req, res)
    })

    app.put('/uptarefa/:id' , (req , res) => {
        tarefaController.update(req , res)
    })

    app.delete('/deltarefa/:id' , (req , res) => {
        tarefaController.delete(req , res)
    })
}