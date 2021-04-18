const {Users} = require('../models')

module.exports.emailUser= (req ,  res ) => {

    const em = Users.findOne({
        where: {
            email: req.body.email
        }
    }).then((result) => {
        if (result.email == req.body.email) {
           return res.json({ 'result': 'Email ja existe' })
        }
    }).catch((error) => {
        console.log(error)
    })

    return em
}