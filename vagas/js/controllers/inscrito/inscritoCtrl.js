angular.module("escola").controller("inscritoCtrl", function ($scope, inscritos,$location,inscritoAPI) {	
	$scope.inscritos = inscritos.data;		
	
	$scope.apagarInscritos = function (inscritos) {
		var inscritosApagar = inscritos.filter(function(inscrito){
			if(inscrito.selecionado) return inscrito;
		});
		var inscritosRestantes = inscritos.filter(function(inscrito){
			if(!inscrito.selecionado) return inscrito;
		});
		
		inscritoAPI.deleteInscritos(inscritosApagar).success(function (data) {
			$scope.inscritos = inscritosRestantes;

		}).error(function(data,status){							
			$location.path("/error");			
		});		
		
	};

	$scope.isInscritosSelecionado = function (inscritos) {
		return inscritos.some(function (inscrito) {
			return inscrito.selecionado;
		});
	};
	
	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};	
	
});