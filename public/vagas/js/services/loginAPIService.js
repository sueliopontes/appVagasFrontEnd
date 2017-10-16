angular.module("escola").factory("loginAPI", function ($http,val,$q) {
	
	var _autenticar = function (login) {
		var defeered = $q.defer();
		$http.post(val.baseUrl + "/login", login ).then(function(response) {
			console.log(response.data.Token);
			
			localStorage.setItem("token","oi");
			
		}).catch(defeered.reject);
			//console.log("Falha -- autenticado");	
		return defeered.promise;
		
	};	

	return {
		autenticar:_autenticar
	};
});