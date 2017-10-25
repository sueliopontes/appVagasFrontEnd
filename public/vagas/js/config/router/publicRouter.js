angular.module("escola").config(function ($routeProvider) {	
	$routeProvider.when("/", {
		templateUrl: "view/public/public.html",
		controller: "publicCtrl",
		
		resolve:{
			escolas: function (escolaAPI) {
				return escolaAPI.getEscolas();
			},
			inscritos:function(inscritoAPI) {
				return inscritoAPI.getInscritos();
            }
		}
	});
	
});
