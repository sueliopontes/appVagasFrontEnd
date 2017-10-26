angular.module("escola").controller("periodoCtrl", function ($scope, periodos,$location,periodoAPI) {	
	$scope.periodos = periodos.data;		
	
	$scope.apagarPeriodos = function (periodos) {
		var periodosApagar = periodos.filter(function(periodo){
			if(periodo.selecionado) return periodo;
		});
		var periodosRestantes = periodos.filter(function(periodo){
			if(!periodo.selecionado) return periodo;
		});
		
		periodoAPI.deletePeriodos(periodosApagar).success(function (data) {
			$scope.periodos = periodosRestantes;

		}).error(function(data,status){							
			$location.path("/error");			
		});		
		
	};

	$scope.isPeriodosSelecionado = function (periodos) {
		return periodos.some(function (periodo) {
			return periodo.selecionado;
		});
	};
	
	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};	
	
});