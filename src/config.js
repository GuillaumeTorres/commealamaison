import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeController from 'views/home/home';
import mapsController from 'views/maps/maps';
import noticeController from 'views/notice/notice';
import showController from 'views/notice/show';
import registerController from 'views/register/register';
import settingsController from 'views/settings/settings';
import contactController from 'views/contact/contact';

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
			template: require('views/register/register.html'),
			controller: registerController
		})
		.state('resetpass', {
			url: '/reset-password',
			template: require('views/register/resetpass.html'),
			controller: registerController
		})
		.state('maps', {
			url: '/maps',
			template: require('views/maps/maps.html'),
			controller: mapsController
		})
		.state('settings', {
			url: '/settings',
			template: require('views/settings/settings.html'),
			controller: settingsController
		})
		.state('notice', {
			url: '/notice/list',
			template: require('views/notice/list.html'),
			controller: noticeController
		})
		.state('listoffers', {
			url: '/listoffers',
			template: require('views/notice/listoffers.html'),
			controller: noticeController
		})
		.state('newNotice', {
			url: '/notice/new',
			template: require('views/notice/new.html'),
			controller: noticeController
		})
		.state('editNotice', {
			url: '/notice/edit',
			template: require('views/notice/edit.html'),
			controller: noticeController
		})
		.state('showNotice', {
			url: '/notice/show',
			template: require('views/notice/show.html'),
			controller: showController
		})
		.state('contact', {
			url: '/contact',
			template: require('views/contact/contact.html'),
			controller: contactController
		})

	$locationProvider.html5Mode(true);
});

export default app;
