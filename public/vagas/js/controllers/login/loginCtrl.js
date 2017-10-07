angular.module("escola").controller("loginCtrl", function ($scope, loginAPI,$location,$http,val) {		
	
	$scope.autenticar = function (login) {	
		$http.post(val.baseUrl + "/login", login ).then(function(response) {
			console.log($http.defaults.headers.common['token']);
			localStorage.setItem("userToken", "oi")
			
		//loginAPI.autenticar(login).success(function (data) {			
			//console.log("Logado com sucesso");
		//}).error(function(response){
		//	console.log("Falha ao logar");	
		//	console.log(data);	
		});		
	};	
});