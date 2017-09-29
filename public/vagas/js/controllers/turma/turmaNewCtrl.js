angular.module("escola").controller("turmaNewCtrl", function ($scope,turmaAPI,$location,escolas,anoLetivos,periodos) {	
        $scope.escolas=escolas.data;
        $scope.anoLetivos=anoLetivos.data;
        $scope.periodos=periodos.data;        

        $scope.adicionarTurma = function (turma) {	            
            turmaAPI.saveTurma(turma).success(function (data) {                
                delete $scope.turma;
                $scope.turmaForm.$setPristine();
                $location.path("/turmas");
            });
        };	
        
    });