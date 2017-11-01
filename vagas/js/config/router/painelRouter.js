angular.module("escola").config(function ($routeProvider) {
	
	$routeProvider.when("/painel", {
        templateUrl: "view/painel/painel.html",
		controller: "painelCtrl"
	});	
	
});

