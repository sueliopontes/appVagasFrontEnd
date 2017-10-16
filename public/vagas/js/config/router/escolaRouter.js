angular.module("escola").config(function ($routeProvider) {	
	
	$routeProvider.when("/escolas", {
		templateUrl: "view/escola/escolas.html",
		controller: "escolaCtrl",
		authorize: true,
		resolve: {
			escolas: function (escolaAPI) {
				return escolaAPI.getEscolas();
			}			
		}
	});
	$routeProvider.when("/escolaNew", {
		templateUrl: "view/escola/escolaNew.html",
		controller: "escolaNewCtrl"		
		
	});
	$routeProvider.when("/escolaEdit/:id", {
		templateUrl: "view/escola/escolaEdit.html",
		controller: "escolaEditCtrl",
		resolve: {
			escola: function (escolaAPI, $route) {
				return escolaAPI.getEscola($route.current.params.id);
			}
		}
	});
	
	
});