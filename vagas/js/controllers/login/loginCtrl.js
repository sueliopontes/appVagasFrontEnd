angular.module("escola").controller("loginCtrl", function ($scope,$http,val,$location,$q,TokenAPI) {		
	$scope.login={'login':'admin','senha':'admin'};
	$scope.msg;

	$scope.autenticar2 = function (login2) {		
		console.log(login2);
		if((login2.login==="admin")&&(login2.senha==="admin")){
			console.log(login2);
			$location.path("/inscritos");	
		}else{
			//console.log($scope.login);
			$scope.msg="Login ou senha inválido";
		}
	};

	$scope.autenticar = function (login) {		
		var defeered = $q.defer();
		$http.post(val.baseUrl + "/login", login ).then(function(response) {			
			//console.log(response.headers('Token'));			
			TokenAPI.setToken(response.headers('Token'));
			//localStorage.setItem("token",response.headers('Token'));
			$location.path("/inicio");
			
		}).catch(defeered.reject);
			//console.log("Falha -- autenticado");	
		return defeered.promise;
	};	
});