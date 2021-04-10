const  userController  = require('../controllers/userController')

module.exports =  (app) => {

    app.get('/list',  (req, res) => {
        userController.list(req, res)

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