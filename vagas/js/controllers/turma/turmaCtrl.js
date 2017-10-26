angular.module("escola").controller("turmaCtrl", function ($scope, turmas,$location,turmaAPI) {	
	$scope.turmas = turmas.data;		
	
	$scope.apagarTurmas = function (turmas) {
		var turmasApagar = turmas.filter(function(turma){
			if(turma.selecionado) return turma;
		});

		var turmasRestantes = turmas.filter(function(turma){
			if(!turma.selecionado) return turma;
		});
		
		turmaAPI.deleteTurmas(turmasApagar).success(function (data) {
			$scope.turmas = turmasRestantes;	

		}).error(function(data,status){							
			$location.path("/error");			
		});		
		
	};

	$scope.isTurmasSelecionado = function (turmas) {
		return turmas.some(function (turma) {
			return turma.selecionado;
		});
	};
	
	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};	
	
});