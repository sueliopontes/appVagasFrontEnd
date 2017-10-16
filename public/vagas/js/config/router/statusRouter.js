angular.module("escola").config(function ($routeProvider) {	
	
	$routeProvider.when("/status", {
		templateUrl: "view/status/status.html",
		controller: "statusCtrl",
		authorize: true,
		resolve:{
			status:function(statusAPI) {
				return statusAPI.getStatus();
			}
		}			
	});
	$routeProvider.when("/statusNew", {
		templateUrl: "view/status/statusNew.html",
		controller: "statusNewCtrl"
		
	});

	$routeProvider.when("/statusEdit/:id", {
		templateUrl: "view/status/statusEdit.html",
		controller: "statusEditCtrl",
		resolve: {
			status: function (statusAPI, $route) {
				return statusAPI.getStatusId($route.current.params.id);
			}
		}
	});
	
});