const jwt = require("jsonwebtoken");
const { auth } = require("../model");
const secretToken = `09f26e402586e2faa8da4c98a35f1
  b20d6b033c6097befa8be3486a829587fe2f90a832bd3ff9
  d42710a4da095a2ce285b009f0c3730cd9b8e1af3eb84df6611`

function authenticateToken(req, res, next) {

    if(req.originalUrl.includes('/users')) {
        next();
        return;
    }

    const authHeader = req.headers['authorization']


    jwt.verify(authHeader, secretToken, (err, user) => {
      console.log(err)
      if (err) return res.sendStatus(401)
      req.user = user
      next() 
    })
}

module.exports = {
    authenticateToken
}
