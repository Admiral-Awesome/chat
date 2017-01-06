var app = angular.module('Chat', ['ui.router']);

app.config(['$httpProvider', function($httpProvider) {
  $httpProvider.defaults.withCredentials = true;
}])
.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html',
            controller : 'homeController'
        })
        .state('register', {
        	url: '/registration',
        	templateUrl : "views/registration.html",
        	controller : "registrationController"
        })
        .state('chat', {
        	url : '/chat',
        	templateUrl : 'views/chat.html',
        	controller : 'chatController'
        })
        .state('login', {
        	url : '/login',
        	templateUrl : 'views/login.html',
        	controller: 'loginController'
        })
        
        
        
});
