angular.module("escola").factory("turmaAPI", function ($http,val) {
	var _getTurmas = function () {
		return $http.get(val.baseUrl + "/turma/findByAll");
	};

	var _getTurma = function (id) {
		return $http.get(val.baseUrl + "/turma/findById/" + id);
	};

	var _saveTurma = function (turma) {
		console.log(turma);
		return $http.post(val.baseUrl + "/turma/save", turma);
	};

	var _deleteTurmas = function (turmas) {
		
		return $http.post(val.baseUrl + "/turma/delete", turmas);
	};

	return {
		getTurmas: _getTurmas,
		getTurma: _getTurma,
		saveTurma: _saveTurma,
		deleteTurmas: _deleteTurmas
	};
});

