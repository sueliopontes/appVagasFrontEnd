angular.module("escola").controller("alunoNewCtrl", function ($scope,alunoAPI,$location) {	
    
        $scope.adicionarAluno = function (aluno) {		
            alunoAPI.saveAluno(aluno).success(function (data) {
                delete $scope.aluno;
                $scope.alunoForm.$setPristine();
                $location.path("/alunos");
            });
        };	
        
    });