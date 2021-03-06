/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var VESION_APP = "";
var exec = require('child_process').exec;
   exec('git describe',
    (error, stdout, stderr) => { 
       VESION_APP = stdout ? stdout : "unknown"
    })
module.exports = {
	


  /**
   * `UserController.login()`
   */
 login: function (req, res) {
   // res.setHeader("Access-Control-Allow-Origin", "*");
   
res.header('Access-Control-Allow-Credentials', true);
res.header('Access-Control-Allow-Origin', req.headers.origin);
res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');

  User.find(req.body).exec(function(err, data) {
    if (data && data.length > 0) {
      // var userData = req.body;
      // delete userData.password;
      // userData.authenticated = true;
      req.session.authenticated = data[0];
      delete req.session.authenticated.password;
       req.session.authenticated.authenticated = true;
      return res.ok({msg  : 'Logged in successfully',res : req.session.authenticated})
    }
    return res.status(400).json({msg : "wrong login or password"});
  })
},

  /**
  * status authentification
  */
  status : function(req, res) {
    console.log( req.session.authenticated)
   res.header('Access-Control-Allow-Credentials', true);
res.header('Access-Control-Allow-Origin', req.headers.origin);
res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');

    if ( ! req.session.authenticated)
       req.session.authenticated = {authenticated : false};

    return res.status(200).json({status :  req.session.authenticated})
  },
  /**
   * `UserController.logout()`
   */
  logout: function (req, res) {
res.header('Access-Control-Allow-Credentials', true);
res.header('Access-Control-Allow-Origin', req.headers.origin);
res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');

  req.session.authenticated = {authenticated : false}
  return res.json({msg : "logged out"})
},


   
  appVersion : function(req, res) {
    res.setHeader("Access-Control-Allow-Origin", 'http://localhost:8080');

    res.status(200).json({version : VESION_APP.replace("\n", "")});
  },
  statistic : function(req, res, next) {
    //todo
  }
};

