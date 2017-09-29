angular.module("escola").factory("anoLetivoAPI", function ($http,val) {
	var _getAnoLetivos = function () {
		return $http.get(val.baseUrl + "/anoLetivo/findByAll");
	};

	var _getAnoLetivo = function (id) {
		return $http.get(val.baseUrl + "/anoLetivo/findById/" + id);
	};

	var _saveAnoLetivo = function (anoLetivo) {
		
		return $http.post(val.baseUrl + "/anoLetivo/save", anoLetivo);
	};

	var _deleteAnoLetivos = function (anoLetivos) {
		
		return $http.post(val.baseUrl + "/anoLetivo/delete", anoLetivos);
	};

	return {
		getAnoLetivos: _getAnoLetivos,
		getAnoLetivo: _getAnoLetivo,
		saveAnoLetivo: _saveAnoLetivo,
		deleteAnoLetivos: _deleteAnoLetivos
	};
});