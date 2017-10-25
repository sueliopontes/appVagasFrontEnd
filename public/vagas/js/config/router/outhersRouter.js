angular.module("escola").config(function ($routeProvider) {
	
	/* A rota '/' foi configurada no arquivo publicRouter.js"
	$routeProvider.when("/", {
		templateUrl: "view/public/public.html"
	});
	*/
	$routeProvider.when("/inicio", {
		templateUrl: "view/inicio.html"
	});	

	$routeProvider.when("/error", {
		templateUrl: "view/error.html"
	});
	$routeProvider.when("/restrito", {
		templateUrl: "view/restrito.html"
	});

	$routeProvider.when("/noPage", {
		templateUrl: "view/noPage.html"
	});

	$routeProvider.otherwise({redirectTo: "/noPage"});
});