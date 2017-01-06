var app = angular.module('Chat');

app.service('Version', ['$http',function($http) {

	return {
		_set : function($scope) {
			$http.get(HOST_CONST + ":" + PORT_CONST+ "/version").then(function(resp) {
		
				$scope.version = resp.data.version;
			})

		}
	}
}])
.service('AuthService',  ['$http',function($http) {
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
				console.log(resp.data)
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
		} 
	}
}]);