angular.module("escola").controller("alunoCtrl", function ($scope, alunos,$location,alunoAPI) {	
	$scope.alunos = alunos.data;		
	
	$scope.apagarAlunos = function (alunos) {
		var alunosApagar = alunos.filter(function(aluno){
			if(aluno.selecionado) return aluno;
		});
		var alunosRestantes = alunos.filter(function(aluno){
			if(!aluno.selecionado) return aluno;
		});
		
		alunoAPI.deleteAlunos(alunosApagar).success(function (data) {
			$scope.alunos = alunosRestantes;

		}).error(function(data,status){							
			$location.path("/error");			
		});		
		
	};

	$scope.isAlunosSelecionado = function (alunos) {
		return alunos.some(function (aluno) {
			return aluno.selecionado;
		});
	};
	
	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};	
	
});