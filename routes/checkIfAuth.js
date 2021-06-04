const fs = require('fs')
const expressJwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const RSA_PUBLIC_KEY = fs.readFileSync('config/public.key');

module.exports.auth = () => {
    const checkIfAuthenticated = expressJwt({
        secret: RSA_PUBLIC_KEY,
        algorithms: ['RS256']
    });

    return checkIfAuthenticated
}
