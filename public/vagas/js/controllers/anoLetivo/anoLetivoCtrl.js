angular.module("escola").controller("anoLetivoCtrl", function ($scope, anoLetivos,anoLetivoAPI,$location) {	
	$scope.anoLetivos = anoLetivos.data;
	
	$scope.apagarAnoLetivos = function (anoLetivos) {
		var anoLetivosApagar = anoLetivos.filter(function(anoLetivo){
			if(anoLetivo.selecionado) return anoLetivo;
		});	
		var anoLetivosRestantes = anoLetivos.filter(function(anoLetivo){
			if(!anoLetivo.selecionado) return anoLetivo;
		});		
		
		anoLetivoAPI.deleteAnoLetivos(anoLetivosApagar).success(function (data) {
			$scope.anoLetivos=anoLetivosRestantes;
			
			
		}).error(function(data,status){							
			$location.path("/error");			
		});		
		
	};

	$scope.isAnoLetivosSelecionado = function (anoLetivos) {
		return anoLetivos.some(function (anoLetivo) {
			return anoLetivo.selecionado;
		});
	};
	
	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};	
	
});