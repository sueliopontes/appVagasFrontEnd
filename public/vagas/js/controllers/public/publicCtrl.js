angular.module("escola").controller("publicCtrl", function ($scope, inscritos,escolas) {	
	$scope.inscritos = inscritos.data;	
	$scope.escolas=escolas.data;

	$scope.carregarInscritos = function (escola) {
		inscritoAPI.getInscritosByEscola(escola).success(function (data) {
			$scope.escolas = escolas.data;

		}).error(function(data,status){							
			$location.path("/error");			
		});		
		
	};
	
});