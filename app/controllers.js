var app = angular.module('Chat');


app.controller('homeController', function($scope,Version,AuthService) {
	Version._set($scope);
	AuthService._set($scope);
	$scope.validateLoggedIn = function() {
		return AuthService.checkAuth();
	}
	$scope.logout = function() {
		AuthService.logout();
	}
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
.controller('chatController', function(AuthService,$scope, Chat,$timeout) {
	$scope.currentPage = 0;
    $scope.pageSize = 10;
    $scope.msg = [];
    $scope.msgData = { text : '', author : AuthService._get().credits.name + " "  + AuthService._get().credits.surname+ " "};
    Chat._getMessages($scope);
    $scope.numberOfPages=function(){
        return Math.ceil($scope.msg.length/$scope.pageSize);                
    }
    $scope.send = function() {

    	 $scope.msgData.author = AuthService._get().credits.name + " "  + AuthService._get().credits.surname+ " ";
    	Chat._sendMessage($scope.msgData);
    	$scope.msgData.text = '';
    }
     socket = io(HOST_CONST+':8000');
    socket.on('connect', function(){
  			socket.on("newMsg",function(data) {
  				 $timeout(function() {
  				 	$scope.msg.unshift(data)
  				 },0);
  			})
  	});
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
			// console.log(resp)
			AuthService._set($scope);
			$scope.showSuccess = true;
			$timeout (function() {
				$scope.showSuccess = false;
				$state.go("chat")
			},2000)
		}, function(err) {
			
			$scope.err = err.data.msg;
			$timeout(function() {
				$scope.err = ""
			},2000)
		})
	}
})