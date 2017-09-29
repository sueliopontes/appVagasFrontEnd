angular.module("escola").controller("escolaNewCtrl", function ($scope,escolaAPI,$location) {	

	$scope.adicionarEscola = function (escola) {		
		escolaAPI.saveEscola(escola).success(function (data) {
			delete $scope.escola;
			$scope.escolaForm.$setPristine();			
			$location.path("/escolas");
		});
	};	
	
});