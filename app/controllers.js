var app = angular.module('Chat');

//to do 
//realization of controllers
app.controller('homeController', function($timeout,$scope,Version) {
	Version._set($scope);
})
.controller('registrationController', function($scope) {

})
.controller('chatController', function($scope) {

})
.controller('loginController', function($scope) {

})