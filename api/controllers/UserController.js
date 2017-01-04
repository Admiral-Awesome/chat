/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

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
}
};

