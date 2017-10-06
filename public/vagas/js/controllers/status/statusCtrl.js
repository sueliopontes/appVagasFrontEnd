angular.module("escola").controller("statusCtrl", function ($scope, status,$location,statusAPI) {	
	$scope.status = status.data;		
	
	$scope.apagarStatus = function (status) {
		var statusApagar = status.filter(function(statusOne){
			if(statusOne.selecionado) return statusOne;
		});

		var statusRestantes = status.filter(function(statusOne){
			if(!statusOne.selecionado) return statusOne;
		});
		
		statusOneAPI.deleteStatus(statusApagar).success(function (data) {
			$scope.status = statusRestantes;	

		}).error(function(data,status){							
			$location.path("/error");			
		});		
		
	};

	$scope.isStatusSelecionado = function (status) {
		return status.some(function (statusOne) {
			return statusOne.selecionado;
		});
	};
	
	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};	
	
});