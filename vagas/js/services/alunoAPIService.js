angular.module("escola").factory("alunoAPI", function ($http,val) {
	var _getAlunos = function () {
		return $http.get(val.baseUrl + "/aluno/findByAll");
	};

	var _getAluno = function (id) {
		return $http.get(val.baseUrl + "/aluno/findById/" + id);
	};

	var _saveAluno = function (aluno) {
		
		return $http.post(val.baseUrl + "/aluno/save", aluno);
	};

	var _deleteAlunos = function (alunos) {
		
		return $http.post(val.baseUrl + "/aluno/delete", alunos);
	};

	return {
		getAlunos: _getAlunos,
		getAluno: _getAluno,
		saveAluno: _saveAluno,
		deleteAlunos: _deleteAlunos
	};
});