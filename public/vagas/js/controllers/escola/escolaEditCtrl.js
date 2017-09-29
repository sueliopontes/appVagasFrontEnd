angular.module("escola").controller("escolaEditCtrl", function ($scope, $routeParams, escola,escolaAPI,$location) {
	$scope.escola = escola.data;
	$scope.saveEscola = function (escola) {		
		escolaAPI.saveEscola(escola).success(function (data) {
			delete $scope.escola;
			$scope.escolaForm.$setPristine();
			$location.path("/escolas");
		});
	};
});