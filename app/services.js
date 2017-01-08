var app = angular.module('Chat');

app.service('Version', ['$http',function($http) {
	var version;
	return {
		_set : function($scope) {
			$http.get(HOST_CONST + ":" + PORT_CONST+ "/version").then(function(resp) {
				version = resp.data.version;
				$scope.version = resp.data.version;

			})

		}, 
		_get : function() {
			return version;
		}
	}
}])
.service('AuthService',  ['$http','$state',function($http, $state) {
	var status = false;
	var authData = {};
	$http.post(HOST_CONST + ":" + PORT_CONST+ "/status", {withCredentials: true}).then(function(resp) {
				
			
		status = resp.data.status.authenticated;
		authData = resp.data.status;
	})
	return {
		_set : function( $scope ) {
			$http.post(HOST_CONST + ":" + PORT_CONST+ "/status", {withCredentials: true}).then(function(resp) {
				
				$scope.credits = resp.data.status;
				status = resp.data.status.authenticated;
				authData = resp.data.status;
			})
		},
		_get: function() {
			return {
				status : status,
				credits : authData
			}
		},
		checkAuth : function() {
			return status;
		},
		logout : function() {
			$http.post(HOST_CONST + ":" + PORT_CONST+ "/logout", {withCredentials: true}).then(function(resp) {
				$state.reload();		
			})
		} 
	}
}])
.service("Chat", ['AuthService','$state','$http',function(AuthService, $state, $http) {
	
	return {
		_sendMessage : function(msgData) {
			// console.log(AuthService.checkAuth)
			if (!AuthService.checkAuth()) {
				$state.go("home")
				return;
			}
			return socket.emit('msg', msgData);

		},
		_getMessages : function($scope) {
			$http.get(HOST_CONST + ":" + PORT_CONST+ "/messages", {withCredentials: true}).then(function(resp) {
				resp.data.sort(function(item1, item2){
					return new Date(item2.createdAt) - new Date(item1.createdAt);
				})
				$scope.msg = resp.data;
			})
		}
	}
}]);