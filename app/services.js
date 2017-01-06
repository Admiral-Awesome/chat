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

	return {
		_set : function( $scope ) {
			$http.post(HOST_CONST + ":" + PORT_CONST+ "/status", {withCredentials: true}).then(function(resp) {
				
				console.log(resp)
			})
		},
		_get: function() {

		} 
	}
}]);