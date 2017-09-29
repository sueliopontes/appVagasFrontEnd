angular.module("escola").factory("tokenInterceptor", function ($q, $timeout,$location) {
	return {
		request: function (config) {
			//console.log("responseError");
			config.headers.Authorization= 'Bearer ' + localStorage.getItem("userToken");
			return config;
		},
		requestError: function (rejection) {
			console.log("responseError");
			return $q.reject(rejection);
		},
		response: function (response) {
			if(response.status==500){
				$location.path("/login");
			}
			$timeout(function () {
				//console.log("Fazer algo aqui");
			}, 0); //numero zero indica tempo
			return response;
		},
		responseError: function (rejection) {
			console.log("responseError");
			console.log(rejection);			
			return $q.reject(rejection);
		}
	};
});