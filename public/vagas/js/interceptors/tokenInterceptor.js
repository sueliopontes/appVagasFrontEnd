angular.module("escola").factory("tokenInterceptor", function ($q, $timeout,$location) {
	return {
		request: function (config) {
			console.log("request");
			config.headers.Authorization= 'Bearer ' + localStorage.getItem("userToken");
			return config;
		},
		requestError: function (rejection) {
			console.log("requestError");
			return $q.reject(rejection);
		},
		response: function (response) {
			console.log("response");	
			if (response.status === 401 || response.status === 403) {
				console.log("Erro 403 - Acesso restrito")
				$location.path("/restrito");
			}			
			return response;
		},
		responseError: function (rejection) {
			console.log("responseError");
			if (rejection.status === 401) {
				console.log("Erro 401 - Acesso restrito")
				$location.path("/restrito");
			}
			if (rejection.status === 403) {
				console.log("Erro 403 - Acesso restrito")
				$location.path("/restrito");
			}			
						
			return $q.reject(rejection);
		}
	};
});