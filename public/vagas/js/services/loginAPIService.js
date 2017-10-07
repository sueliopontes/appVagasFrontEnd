angular.module("escola").factory("loginAPI", function ($http,val) {
	
	var _autenticar2 = function (login) {
		return $http.post(val.baseUrl + "/login", login ).success(function(data, status, headers, config) {
			console.log(data.Token);
			localStorage.setItem("userToken", data.Token);
			
		}).error(function(data, status, headers, config) {
			console.log("Falha -- autenticado");			
		});
	};
	
	var _autenticar = function (login) {
		$http.post(val.baseUrl + "/login", login ).then(function(response) {
			console.log(response.headers('Token'));
			localStorage.setItem("userToken", data.Token);
			return response;
		});
	};	

	return {
		autenticar:_autenticar
	};
});