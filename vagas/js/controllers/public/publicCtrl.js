angular.module("escola").controller("publicCtrl", function ($scope, inscritos,escolas,inscritoAPI) {	
	$scope.inscritos = inscritos.data;	
	$scope.escolas = escolas.data;

	$scope.carregarInscritos = function (escola) {
		inscritoAPI.getInscritosByEscola(escola).success(function (data) {
		console.log(escola);
		console.log(data);
			$scope.inscritos = data;

		}).error(function(data,status){							
			$location.path("/error");			
		});		
		
	};
	
});