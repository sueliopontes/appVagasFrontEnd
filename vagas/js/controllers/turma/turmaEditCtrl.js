angular.module("escola").controller("turmaEditCtrl", function ($scope, $routeParams, turma,turmaAPI,$location) {
	$scope.turma = turma.data;
	$scope.saveTurma = function (turma) {		
		turmaAPI.saveTurma(turma).success(function (data) {
			delete $scope.turma;
			$scope.turmaForm.$setPristine();
			$location.path("/turmas");
		});
	};
});