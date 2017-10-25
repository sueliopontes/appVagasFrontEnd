angular.module("escola").config(function ($httpProvider) {	
	//$httpProvider.interceptors.push("timestampInterceptor");
	$httpProvider.interceptors.push("errorInterceptor");
	
});