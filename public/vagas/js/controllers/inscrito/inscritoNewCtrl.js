angular.module("escola").controller("inscritoNewCtrl", function ($scope,inscritoAPI,$location,alunos,turmas) {	
    $scope.alunos=alunos.data;
    $scope.turmas=turmas.data;
    
        $scope.adicionarInscrito = function (inscrito) {		
            inscritoAPI.saveInscrito(inscrito).success(function (data) {
                delete $scope.inscrito;
                $scope.inscritoForm.$setPristine();
                $location.path("/inscritos");
            });
        };	
        
    });