angular.module("escola").controller("anoLetivoNewCtrl", function ($scope,anoLetivoAPI,$location) {	

	$scope.adicionarAnoLetivo = function (anoLetivo) {			
		anoLetivoAPI.saveAnoLetivo(anoLetivo).success(function (data) {			
			delete $scope.anoLetivo;
			$scope.anoLetivoForm.$setPristine();			
			$location.path("/anoLetivo");
		});
	};	
	
});