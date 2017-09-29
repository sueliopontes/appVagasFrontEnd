angular.module("escola").factory("escolaAPI", function ($http,val) {
	var _getEscolas = function () {
		return $http.get(val.baseUrl + "/escola/findByAll");
	};

	var _getEscola = function (id) {
		return $http.get(val.baseUrl + "/escola/findById/" + id);
	};

	var _saveEscola = function (escola) {
		
		return $http.post(val.baseUrl + "/escola/save", escola);
	};

	var _deleteEscolas = function (escolas) {
		
		return $http.post(val.baseUrl + "/escola/delete", escolas);
	};

	return {
		getEscolas: _getEscolas,
		getEscola: _getEscola,
		saveEscola: _saveEscola,
		deleteEscolas: _deleteEscolas
	};
});