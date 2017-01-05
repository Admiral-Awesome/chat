/**
 * User.js
 *
 * @description :: user model to store
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    login : { type: 'string', 
    unique : true
   },

    password : { type: 'string' }
  },
  name : { type : 'string'},
  surname : { type : 'string'}
};

