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
		        $location.path('/login');
		      }		
			return response;
		},
		responseError: function (rejection) {
			console.log("responseError");
						
			return $q.reject(rejection);
		}
	};
});