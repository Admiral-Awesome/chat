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
  return res.login({
    successRedirect: '/'
  });
},


  /**
   * `UserController.logout()`
   */
  logout: function (req, res) {
  req.logout();
  return res.ok('Logged out successfully.');
},


  /**
   * `UserController.signup()`
   */
  signup: function (req, res) {
  User.create(req.params.all()).exec(function (err, user) {
    if (err) return res.negotiate(err);
    req.login(user, function (err){
      if (err) return res.negotiate(err);
      return res.redirect('/welcome');
    });
  });
}, 
  appVersion : function(req, res) {
    res.status(200).json({version : VESION_APP.replace("\n", "")});
  }
};

