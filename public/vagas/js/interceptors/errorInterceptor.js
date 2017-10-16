angular.module("escola").factory("errorInterceptor", function ($q, $location,TokenAPI) {
	return {
		request: function (config) {
			console.log("request");
			config.headers = config.headers || {};
			if (TokenAPI.getToken()) {
		        config.headers['Token'] = 'Bearer ' + TokenAPI.getToken();
		      }
			
			//if(localStorage["Token"]){console.log("Existe token")}
			//config.headers.Token= 'Bearer ' + localStorage.getItem("userToken");}
			return config;
		},
		requestError: function (rejection) {
			console.log("requestError");
			return $q.reject(rejection);
		},
		
		response: function (response) {
			console.log("response");	
			if (response.status === 400) {
				console.log("Erro 400 - Requisição inválida")
				$location.path("/error");
			}
			if (response.status === 401) {
				console.log("Erro 401 - Acesso restrito")
				$location.path("/restrito");
			}
			if (response.status === 403) {
				console.log("Erro 403 - Acesso restrito")
				$location.path("/restrito");			}		
			
			if (response.status === 404) {
				console.log("Erro 404 - Não encontrado")
				$location.path("/error");
			}
			if (response.status === 500) {
				console.log("Erro 500 - Erro interno do servidor")
				$location.path("/error");
			}		
			return response;
		},		
		responseError: function (rejection) {
			console.log("responseError");
			if (rejection.status === 400) {
				console.log("Erro 400 - Requisição inválida")
				$location.path("/error");
			}
			if (rejection.status === 401) {
				console.log("Erro 401 - Acesso restrito")
				$location.path("/restrito");
			}
			if (rejection.status === 403) {
				console.log("Erro 403 - Acesso restrito")
				$location.path("/restrito");			}		
			
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