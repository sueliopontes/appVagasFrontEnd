angular.module("escola").controller("escolaCtrl", function ($scope, escolas,escolaAPI,$location) {	
	$scope.escolas = escolas.data;		
	
	$scope.apagarEscolas = function (escolas) {
		var escolasApagar = escolas.filter(function(escola){
			if(escola.selecionado) return escola;
		});	
		var escolasRestantes = escolas.filter(function(escola){
			if(!escola.selecionado) return escola;
		});		
		
		escolaAPI.deleteEscolas(escolasApagar).success(function (data) {
			$scope.escolas=escolasRestantes;
			
			
		}).error(function(data,status){							
			$location.path("/error");			
		});		
		
	};

	$scope.isEscolasSelecionado = function (escolas) {
		return escolas.some(function (escola) {
			return escola.selecionado;
		});
	};
	
	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};	
	
});