angular.module("escola").config(function ($httpProvider) {	
	$httpProvider.interceptors.push("timestampInterceptor");
	$httpProvider.interceptors.push("errorInterceptor");
	//$httpProvider.interceptors.push("loadingInterceptor");
	$httpProvider.interceptors.push("tokenInterceptor");
});