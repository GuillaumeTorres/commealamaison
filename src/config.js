import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeController from 'views/home/home';

const app = angular.module('app', [uiRouter]);

app.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home', {
			url: '/',
			template: require('views/home/home.html'),
			controller: homeController
		})
		.state('register', {
			url: '/register',
			template: require('views/register/register.html')
		})
	$locationProvider.html5Mode(true);
});

export default app;
