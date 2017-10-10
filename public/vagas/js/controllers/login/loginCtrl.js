angular.module("escola").controller("loginCtrl", function ($scope,$http,val,$location,$q) {		
	
	$scope.autenticar = function (login) {		
		var defeered = $q.defer();
		$http.post(val.baseUrl + "/login", login ).then(function(response) {			
			console.log(response.headers('Token'));			
			localStorage.setItem("userToken",response.headers('Token'));
			
		}).catch(defeered.reject);
			//console.log("Falha -- autenticado");	
		return defeered.promise;
	};	
});