angular.module("escola").controller("anoLetivoEditCtrl", function ($scope, $routeParams, anoLetivo,anoLetivoAPI,$location) {
	$scope.anoLetivo = anoLetivo.data;
	$scope.saveAnoLetivo = function (anoLetivo) {		
		anoLetivoAPI.saveAnoLetivo(anoLetivo).success(function (data) {
			delete $scope.anoLetivo;
			$scope.anoLetivoForm.$setPristine();
			$location.path("/anoLetivo");
		});
	};
});