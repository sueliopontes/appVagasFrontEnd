angular.module("escola").controller("loginNewCtrl", function ($scope,loginAPI,$location) {	
    
        $scope.adicionarLogin = function (login) {		
            alunoAPI.saveLogin(login).success(function (data) {
                delete $scope.login;
                $scope.loginForm.$setPristine();
                $location.path("/login");
            });
        };	
        
    });