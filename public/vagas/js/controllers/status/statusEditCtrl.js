angular.module("escola").controller("statusEditCtrl", function ($scope, $routeParams, status,statusAPI,$location) {
	$scope.status = status.data;
	$scope.saveStatus = function (status) {		
		statusAPI.saveStatus(status).success(function (data) {
			delete $scope.status;
			$scope.statusForm.$setPristine();
			$location.path("/status");
		});
	};
});