angular.module("escola").controller("loginEditCtrl", function ($scope, $routeParams, login,loginAPI,$location) {
	$scope.login = login.data;
	$scope.saveLogin = function (login) {		
		loginAPI.saveLogin(login).success(function (data) {
			delete $scope.login;
			$scope.loginForm.$setPristine();
			$location.path("/login");
		});
	};
});