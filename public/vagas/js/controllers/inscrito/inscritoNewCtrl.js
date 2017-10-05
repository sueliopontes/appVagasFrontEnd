angular.module("escola").controller("inscritoNewCtrl", function ($scope,inscritoAPI,$location) {	
    
        $scope.adicionarInscrito = function (inscrito) {		
            inscritoAPI.saveInscrito(inscrito).success(function (data) {
                delete $scope.inscrito;
                $scope.inscritoForm.$setPristine();
                $location.path("/inscritos");
            });
        };	
        
    });