var app = angular.module('TonyMusic',['ui.router']);

app.config(function($urlRouterProvider){
	$urlRouterProvider.when('', '/albums');
	$urlRouterProvider.when('/artists/:id', '/artists/:id/albums');
})
