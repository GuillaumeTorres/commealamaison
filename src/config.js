import angular from 'angular';

import uiRouter from 'angular-ui-router';
import ngStorage from 'ngStorage';

import homeController from 'views/home/home';
import layoutController from 'views/layout/layout';
import mapsController from 'views/maps/maps';
import noticeController from 'views/notice/notice';
import registerController from 'views/register/register';
import settingsController from 'views/settings/settings';
import settingsChangeController from 'views/settingsChange/settingsChange';
import contactController from 'views/contact/contact';

const app = angular.module('app', [uiRouter, 'ngStorage']);

app.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('main', {
			abstract: true,
			views: {
				layout: {
					template: require('views/layout/layout.html'),
					controller: layoutController
				}
		    }
		})
		.state('home', {
			url: '/',
			template: require('views/home/home.html'),
			controller: homeController,
			parent: 'main'
		})
		.state('register', {
			url: '/register',
			template: require('views/register/register.html'),
			controller: registerController,
			parent: 'main'
		})
		.state('resetpass', {
			url: '/reset-password',
			template: require('views/register/resetpass.html'),
			controller: registerController,
			parent: 'main'
		})
		.state('maps', {
			url: '/maps',
			template: require('views/maps/maps.html'),
			controller: mapsController,
			parent: 'main'
		})
		.state('settings', {
			url: '/settings',
			template: require('views/settings/settings.html'),
			controller: settingsController,
			parent: 'main'
		})
		.state('settingsChange', {
			url: '/settingsChange',
			template: require('views/settingsChange/settingsChange.html'),
			controller: settingsChangeController,
			parent: 'main'
		})
		.state('notice', {
			url: '/notice/list',
			template: require('views/notice/list.html'),
			controller: noticeController,
			parent: 'main'
		})
		.state('listoffers', {
			url: '/listoffers',
			template: require('views/notice/listoffers.html'),
			controller: noticeController,
			params: {
		        params: null
		    },
			parent: 'main'
		})
		.state('newNotice', {
			url: '/notice/new',
			template: require('views/notice/new.html'),
			controller: noticeController,
			parent: 'main'
		})
		.state('editNotice', {
			url: '/notice/edit',
			template: require('views/notice/edit.html'),
			controller: noticeController,
			parent: 'main'
		})
		.state('showNotice', {
			url: '/notice/show',
			template: require('views/notice/show.html'),
			controller: noticeController,
			parent: 'main'
		})
		.state('contact', {
			url: '/contact',
			template: require('views/contact/contact.html'),
			controller: contactController,
			parent: 'main'
		})
		.state('chat', {
			url: '/chat',
			template: require('views/chat/chat.html'),
			controller: contactController,
			parent: 'main'
		})

	$locationProvider.html5Mode(true);
});

app.run(function($http, $localStorage) {
	if($localStorage.user){
		$http.defaults.headers.common.Authorization = 'Bearer '+$localStorage.user.token;
	}
});

export default app;