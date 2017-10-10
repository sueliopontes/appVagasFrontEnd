angular.module("escola").factory("loadingInterceptor", function ($q, $rootScope, $timeout) {
	return {
		request: function (config) {
			$rootScope.loading = true;
			return config;
		},
		requestError: function (rejection) {
			$rootScope.loading = false;
			return $q.reject(rejection);
		},
		response: function (response) {
			$timeout(function () {
				$rootScope.loading = false;
			}, 0);
			return response;
		},
		responseError: function (rejection) {
			$rootScope.loading = false;
			return $q.reject(rejection);
		}
	};
});