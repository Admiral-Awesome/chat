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
.controller('loginController', function($scope, $http,$timeout,$state) {
	$scope.loginData = {
		login : "",
		password : ""
	}
	$scope.err = ""
	$scope.showSuccess = false;
	$scope.login = function() {
		$http.post(HOST_CONST + ":" + PORT_CONST+ "/login", $scope.loginData).then(function(resp) {
			console.log(resp)
			$scope.showSuccess = true;
			$timeout (function() {
				$scope.showSuccess = false;
				$state.go("home")
			},3000)
		}, function(err) {
			
			$scope.err = err.data.msg;
			$timeout(function() {
				$scope.err = ""
			},2000)
		})
	}
})