var jwt = require('jsonwebtoken');
const fs = require('fs')
const RSA_PRIVATE_KEY = fs.readFileSync('config/private.key');
const { Users } = require('../models')
var bcrypt  = require('bcrypt')

module.exports.loginRoute = (req, res) => {

    const Useremail = Users.findOne(
        {
            where: {
                email: req.body.email
            }
        }).then(function (data) {
            // validar a senha
            if (data != null) {
                const verificarPass = bcrypt.compare(req.body.password , data.password,(err , result) => {
                    if(result){
            // criar token
                        const jwtBearerToken = jwt.sign({}, RSA_PRIVATE_KEY, {
                            algorithm: 'RS256',
                            subject: data.email
                        })
                        res.status(200).json({
                            idToken: jwtBearerToken,
                            expiresIn: 15000,
                            id: data.id,
                            nome:data.name,
                            sobrenome:data.sobrenome,
                            typeuser:data.typeuser
                        })
                    }else{
                        res.status(401).json({'password': 'senha invalida'})
                    }
                })

                verificarPass
            } else {
                res.status(401).json({'email': 'email invalido'})
            }

        }).catch(function (err) {
            console.log(err)
        })
}




