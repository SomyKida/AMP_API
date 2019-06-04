const jwt = require('jsonwebtoken')
const helper = require(base_path + '/app/helper/helper.js')


module.exports = {
  jwt_middleware: function (req, res, next) {
    // Get auth header value
    const bearerHeader = req.headers['authorization'];
    // Check if bearer is undefined
    if (typeof bearerHeader !== 'undefined') {
      // Split at the space
      const bearer = bearerHeader.split(' ');
      // Get token from array
      const bearerToken = bearer[1];
      // Set the token
      req.token = bearerToken;
      // Next middleware

      jwt.verify(req.token, 'amp_secret', (err, authData) => {
        if (err) {
          console.log(err)
          helper.sendErrorWCode(res, "Please Login or Signup first", 403)
        } else {
          req.authData = authData;
          next();
        }
      });
    } else {
      // Forbidden
      helper.sendErrorWCode(res, "No authorization code found", 403)
      return
    }
  }
}
