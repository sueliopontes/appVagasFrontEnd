angular.module("escola").config(function ($routeProvider) {	
	
	$routeProvider.when("/periodos", {
		templateUrl: "view/periodo/periodo.html",
		controller: "periodoCtrl",
		
		resolve: {
			periodos: function (periodoAPI) {
				return periodoAPI.getPeriodos();
			}			
		}
	});
	$routeProvider.when("/periodoNew", {
		templateUrl: "view/periodo/periodoNew.html",
		controller: "periodoNewCtrl"		
		
	});
	$routeProvider.when("/periodoEdit/:id", {
		templateUrl: "view/periodo/periodoEdit.html",
		controller: "periodoEditCtrl",
		resolve: {
			periodo: function (periodoAPI, $route) {
				return periodoAPI.getPeriodo($route.current.params.id);
			}
		}
	});
	
	
});