angular.module("escola").controller("loginCtrl", function ($scope,$http,val,$location,$q,TokenAPI) {		
	
	$scope.autenticar = function (login) {		
		var defeered = $q.defer();
		$http.post(val.baseUrl + "/login", login ).then(function(response) {			
			//console.log(response.headers('Token'));			
			TokenAPI.setToken(response.headers('Token'));
			//localStorage.setItem("token",response.headers('Token'));
			$location.path("/inicio");
			
		}).catch(defeered.reject);
			//console.log("Falha -- autenticado");	
		return defeered.promise;
	};	
});