angular.module("escola").factory("TokenAPI", function ($q) {
  
	var _getToken = function () {
      return localStorage.getItem("token");
    };
    var _setToken = function (token) {
    	localStorage.setItem("token",token);
    };
    
    var _logout = function () {
      delete localStorage.token;
      $q.when();
    };
    
    return{
    	getToken:_getToken,
    	setToken: _setToken,
    	logout: _logout    	
    };
  
});