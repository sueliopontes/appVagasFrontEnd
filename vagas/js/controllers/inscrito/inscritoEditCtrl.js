angular.module("escola").controller("inscritoEditCtrl", function ($scope, $routeParams, inscrito,inscritoAPI,$location) {
	$scope.inscrito = inscrito.data;
	$scope.saveInscrito = function (inscrito) {		
		inscritoAPI.saveInscrito(inscrito).success(function (data) {
			delete $scope.inscrito;
			$scope.inscritoForm.$setPristine();
			$location.path("/inscritos");
			
		});
	};
});