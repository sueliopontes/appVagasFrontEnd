angular.module("escola").factory("periodoAPI", function ($http,val) {
	var _getPeriodos = function () {
		return $http.get(val.baseUrl + "/periodo/findByAll");
	};

	var _getPeriodo = function (id) {
		return $http.get(val.baseUrl + "/periodo/findById/" + id);
	};

	var _savePeriodo = function (periodo) {
		
		return $http.post(val.baseUrl + "/periodo/save", periodo);
	};

	var _deletePeriodos = function (periodos) {
		
		return $http.post(val.baseUrl + "/periodo/delete", periodos);
	};

	return {
		getPeriodos: _getPeriodos,
		getPeriodo: _getPeriodo,
		savePeriodo: _savePeriodo,
		deletePeriodos: _deletePeriodos
	};
});


