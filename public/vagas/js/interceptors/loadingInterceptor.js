angular.module("escola").factory("loadingInterceptor", function ($q) {
	return {
		request: function (config) {
			console.log("request");
			//config.headers.Authorization='Bearer ' + localStorage.getItem("userToken");			
			return config;
		},
		requestError: function (rejection) {
			console.log("requestError");
			return $q.reject(rejection);
		},
		response: function (config) {
			console.log("response");
			//console.log(config.headers.Authorization);
			return config;
		},
		responseError: function (rejection) {
			console.log("responseError");
			console.log(rejection);			
			return $q.reject(rejection);
		}
	};
});