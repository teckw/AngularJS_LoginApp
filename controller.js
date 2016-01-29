var app = angular.module('mainApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl:'login.html'
	})
	.when('/dashboard', {
		resolve: {
			"check" : function($location, $rootScope){
				if(!$rootScope.loggedIn) {
					$location.path('/');
				} 
			}
		},
		templateUrl: 'dashboard.html'
	})
	.otherwise({
		redirectTo: '/'
	})
});

app.controller('loginCtrl', function($scope, $location, $rootScope){
	$scope.submit = function(){


		var uname = $scope.username;  //$rootscope
		var password = $scope.password;
		if($scope.username == 'admin' && $scope.password == 'admin'){
			$rootScope.loggedIn = true;
			$location.path('/dashboard');
		} else {
			alert('Incorrect Information');
		}
	}
})