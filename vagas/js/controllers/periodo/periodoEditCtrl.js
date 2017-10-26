angular.module("escola").controller("periodoEditCtrl", function ($scope, $routeParams, periodo,periodoAPI,$location) {
	$scope.periodo = periodo.data;
	$scope.savePeriodo = function (periodo) {		
		periodoAPI.savePeriodo(periodo).success(function (data) {
			delete $scope.periodo;
			$scope.periodoForm.$setPristine();
			$location.path("/periodos");
			
		});
	};
});