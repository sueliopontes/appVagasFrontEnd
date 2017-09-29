angular.module("escola").factory("loginAPI", function ($http,val) {
	
	var _autenticar = function (login) {
		return $http.post(val.baseUrl + "/login", login ).success(function(data, status, headers, config) {
			localStorage.setItem("userToken",config.data.Token);
			
		}).error(function(data, status, headers, config) {
			console.log("Falha -- autenticado");			
		});
	};	

	return {
		autenticar:_autenticar
	};
});