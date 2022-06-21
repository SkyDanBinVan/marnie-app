module.exports = (req, res, next) => {

    // -----------------------------------------------------------------------
    // authentication middleware
  
    const auth = {login: 'apollo', password: 'greasydishes'} // change this
  
    // parse login and password from headers
    const b64auth = (req.headers.authorization)
    if (!b64auth) return res.status(401).send({
        error: "Access denied, no auth recieved."
    })
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':')
  
    // Verify login and password are set and correct
    if (login && password && login === auth.login && password === auth.password) {
      // Access granted...
      return next()
    } else {
        return res.status(401).send({
            error: "Access denied"
        })
    }
  }