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
  User.find(req.body).exec(function(err, data) {
    if (data && data.length > 0) {
      req.session.authenticated = true;
      return res.ok({msg  : 'Logged in successfully'})
    }
    return res.status(400).json({msg : "wrong login or password"});
  })
},

  /**
  * status authentification
  */
  status : function(req, res) {
    if ( ! req.session.authenticated)
       req.session.authenticated = false
    return res.status(200).json({status :  req.session.authenticated})
  },
  /**
   * `UserController.logout()`
   */
  logout: function (req, res) {
  req.session.authenticated = false;
  return res.json({msg : "logged out"})
},


   
  appVersion : function(req, res) {
    res.status(200).json({version : VESION_APP.replace("\n", "")});
  },
  statistic : function(req, res, next) {
    //todo
  }
};

