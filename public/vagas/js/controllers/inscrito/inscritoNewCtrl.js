angular.module("escola").controller("inscritoNewCtrl", function ($scope,inscritoAPI,$location,alunos,turmas,status) {	
    $scope.alunos=alunos.data;
    $scope.turmas=turmas.data;
    $scope.status=status.data;
    
        $scope.adicionarInscrito = function (inscrito) {		
            inscritoAPI.saveInscrito(inscrito).success(function (data) {
                delete $scope.inscrito;
                $scope.inscritoForm.$setPristine();
                $location.path("/inscritos");
            });
        };	
        
    });