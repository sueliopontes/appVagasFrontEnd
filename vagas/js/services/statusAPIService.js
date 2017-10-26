angular.module("escola").factory("statusAPI", function ($http,val) {
	var _getStatus = function () {
		return $http.get(val.baseUrl + "/status/findByAll");
	};

	var _getStatusId = function (id) {
		return $http.get(val.baseUrl + "/status/findById/" + id);
	};

	var _saveStatus = function (status) {
		
		return $http.post(val.baseUrl + "/status/save", status);
	};

	var _deleteStatus = function (status) {
		
		return $http.post(val.baseUrl + "/status/delete", status);
	};

	return {
		getStatusId: _getStatusId,
		getStatus: _getStatus,
		saveStatus: _saveStatus,
		deleteStatus: _deleteStatus
	};
});