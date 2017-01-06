var app = angular.module('Chat');

//to do 
//realization of controllers
app.controller('homeController', function($scope,Version,AuthService) {
	Version._set($scope);
	AuthService._set($scope);
})
.controller('registrationController', function($state,$scope, $http,$timeout) {
	$scope.register = { 
		login : "",
		password : "",
		name : "",
		surname : ""
	};
	$scope.showSuccess = false;
	$scope.registeration = function() {
		$http.post(HOST_CONST + ":" + PORT_CONST+ "/user", $scope.register).then(function(resp) {
			console.log(resp)
			$scope.showSuccess = true;
			$timeout (function() {
				$scope.showSuccess = false;
				$state.go("home")
			},3000)
		}, function(err) {
		
			alert("login is busy")
		})
	}
})
.controller('chatController', function($scope) {

})
.controller('loginController', function(AuthService,$scope, $http,$timeout,$state) {
	$scope.loginData = {
		login : "",
		password : ""
	}
	$scope.err = ""
	$scope.loggedIn = false;
	$scope.validate = function() {
		var checkSession = AuthService._get();
		console.log(checkSession.credits.authentificated)
		if ( AuthService.checkAuth() == true ) {
			console.log("test")
			$scope.loggedIn = true;
			$timeout (function() {
				$scope.loggedIn = false;
				$state.go("chat");
			},3000)
		}
	}
	$scope.validate();
	$scope.login = function() {
		$http.post(HOST_CONST + ":" + PORT_CONST+ "/login", $scope.loginData).then(function(resp) {
			console.log(resp)
			$scope.showSuccess = true;
			$timeout (function() {
				$scope.showSuccess = false;
				$state.go("chat")
			},3000)
		}, function(err) {
			
			$scope.err = err.data.msg;
			$timeout(function() {
				$scope.err = ""
			},2000)
		})
	}
})