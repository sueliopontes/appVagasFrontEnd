angular.module("escola").controller("periodoNewCtrl", function ($scope,periodoAPI,$location) {	
    
        $scope.adicionarPeriodo = function (periodo) {		
            console.log(periodo);
            periodoAPI.savePeriodo(periodo).success(function (data) {
                delete $scope.periodo;
                $scope.periodoForm.$setPristine();
                $location.path("/periodos");
            });
        };	
        
    });