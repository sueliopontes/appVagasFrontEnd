angular.module("escola").config(function ($routeProvider) {	
	
	$routeProvider.when("/anoLetivo", {
		templateUrl: "view/anoLetivo/anoLetivo.html",
		controller: "anoLetivoCtrl",
		
		resolve:{
			anoLetivos:function(anoLetivoAPI) {
				return anoLetivoAPI.getAnoLetivos();
			}
		}			
	});
	$routeProvider.when("/anoLetivoNew", {
		templateUrl: "view/anoLetivo/anoLetivoNew.html",
		controller: "anoLetivoNewCtrl"			
	});

	$routeProvider.when("/anoLetivoEdit/:id", {
		templateUrl: "view/anoLetivo/anoLetivoEdit.html",
		controller: "anoLetivoEditCtrl",
		resolve: {
			anoLetivo: function (anoLetivoAPI, $route) {
				return anoLetivoAPI.getAnoLetivo($route.current.params.id);
			}
		}
	});
	
});