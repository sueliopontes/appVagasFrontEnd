angular.module("escola").controller("statusNewCtrl", function ($scope,statusAPI,$location) {	               

        $scope.adicionarStatus = function (status) {	            
            statusAPI.saveStatus(status).success(function (data) {                
                delete $scope.status;
                $scope.statusForm.$setPristine();
                $location.path("/status");
            });
        };	
        
    });