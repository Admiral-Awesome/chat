var app = angular.module('Chat');

app.factory('Version', ['$http',function($http) {

	return {
		_set : function($scope) {
			$http.get(HOST_CONST + ":" + PORT_CONST+ "/version").then(function(resp) {
		
				$scope.version = resp.data.version;
			})

		}
	}
}])