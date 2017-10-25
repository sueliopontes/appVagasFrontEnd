angular.module("escola").controller("alunoEditCtrl", function ($scope, $routeParams, aluno,alunoAPI,$location) {
	$scope.aluno = aluno.data;
	$scope.saveAluno = function (aluno) {		
		alunoAPI.saveAluno(aluno).success(function (data) {
			delete $scope.aluno;
			$scope.alunoForm.$setPristine();
			$location.path("/alunos");
			
		});
	};
});