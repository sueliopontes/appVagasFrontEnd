angular.module("escola").controller("loginCtrl", function ($scope, loginAPI,$location) {		
	
	$scope.autenticar = function (login) {		
		loginAPI.autenticar(login).success(function (data) {			
			console.log("Logado com sucesso");
		}).error(function(data){
			console.log("Falha ao logar");	
			console.log(data);	
		});		
	};	
});