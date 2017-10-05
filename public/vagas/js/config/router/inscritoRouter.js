angular.module("escola").config(function ($routeProvider) {
	
	$routeProvider.when("/inscritos", {
		templateUrl: "view/inscrito/inscritos.html",
		controller: "inscritoCtrl",
		resolve:{
			inscritos:function(inscritoAPI) {
				return inscritoAPI.getInscritos();
            }
		}
	});
	$routeProvider.when("/inscritoNew", {
		templateUrl: "view/inscrito/inscritoNew.html",
		controller: "inscritoNewCtrl"			
	});

	$routeProvider.when("/inscritoEdit/:id", {
		templateUrl: "view/inscrito/inscritoEdit.html",
		controller: "inscritoEditCtrl",
		resolve: {
			inscrito: function (inscritoAPI, $route) {
				return inscritoAPI.getInscrito($route.current.params.id);
			}
		}
	});
	
});