angular.module("escola").factory("inscritoAPI", function ($http,val) {
	var _getInscritos = function () {
		return $http.get(val.baseUrl + "/inscritos/findByAll");
	};

	var _getInscritosByEscola = function (id) {
		return $http.get(val.baseUrl + "/inscritos/findByEscola/" + id);
	};

	var _getInscrito = function (id) {
		return $http.get(val.baseUrl + "/inscritos/findById/" + id);
	};

	var _saveInscrito = function (inscrito) {
		console.log(inscrito);
		return $http.post(val.baseUrl + "/inscritos/save", inscrito);
	};

	var _deleteInscritos = function (inscritos) {
		
		return $http.post(val.baseUrl + "/inscritos/delete", inscritos);
	};

	return {
		getInscritos: _getInscritos,
		getInscrito: _getInscrito,
		saveInscrito: _saveInscrito,
		deleteInscritos: _deleteInscritos,
		getInscritosByEscola: _getInscritosByEscola
	};
});

