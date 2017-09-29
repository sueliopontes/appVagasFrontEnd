angular.module("escola").config(function ($httpProvider) {	
	$httpProvider.interceptors.push("errorInterceptor");
	//$httpProvider.interceptors.push("loadingInterceptor");	
});