angular.module("status").factory("statusAPI", function ($http,val) {
	var _getStatus = function () {
		return $http.get(val.baseUrl + "/status/findByAll");
	};

	var _getStatus = function (id) {
		return $http.get(val.baseUrl + "/status/findById/" + id);
	};

	var _saveStatus = function (status) {
		
		return $http.post(val.baseUrl + "/status/save", status);
	};

	var _deleteStatus = function (status) {
		
		return $http.post(val.baseUrl + "/status/delete", status);
	};

	return {
		getStatus: _getStatus,
		getStatus: _getStatus,
		saveStatus: _saveStatus,
		deleteStatus: _deleteStatus
	};
});