angular.module("escola").factory("inscritoAPI", function ($http,val) {
	var _getInscritos = function () {
		return $http.get(val.baseUrl + "/inscrito/findByAll");
	};

	var _getInscrito = function (id) {
		return $http.get(val.baseUrl + "/inscrito/findById/" + id);
	};

	var _saveInscrito = function (inscrito) {
		console.log(inscrito);
		return $http.post(val.baseUrl + "/inscrito/save", inscrito);
	};

	var _deleteInscritos = function (inscritos) {
		
		return $http.post(val.baseUrl + "/inscrito/delete", inscritos);
	};

	return {
		getInscritos: _getInscritos,
		getInscrito: _getInscrito,
		saveInscrito: _saveInscrito,
		deleteInscritos: _deleteInscritos
	};
});

