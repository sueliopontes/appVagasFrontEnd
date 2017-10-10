angular.module("escola").factory("errorInterceptor", function ($q, $location) {
	return {
		responseError: function (rejection) {
			if (rejection.status === 400) {
				console.log("Erro 400 - Requisição inválida")
				$location.path("/error");
			}
			if (rejection.status === 404) {
				console.log("Erro 404 - Não encontrado")
				$location.path("/error");
			}
			if (rejection.status === 500) {
				console.log("Erro 500 - Erro interno do servidor")
				$location.path("/error");
			}
			
			return $q.reject(rejection);
		}
	};
});