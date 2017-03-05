(function () {
  'use strict';
  angular
   .module('app')
   .config(['$urlRouterProvider', '$stateProvider', '$authProvider','$locationProvider',
		function  ($urlRouterProvider, $stateProvider, $authProvider, $locationProvider) {

		   $authProvider.loginUrl = "http://localhost:3000/users/authenticate";

		   $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'templates/home/home.html',
                controller: 'homeCtrl',
                controllerAs: 'vm'
            })
            .state('signin', {
                url: '/signin',
                templateUrl: 'templates/authentication/signin.html',
                controller: 'authCtrl',
                controllerAs: 'vm'
            })
						.state('signup', {
                url: '/signup',
                templateUrl: 'templates/authentication/signup.html',
                controller: 'authCtrl',
                controllerAs: 'vm'
            })
						.state('novel', {
                url: '/novel',
                templateUrl: 'templates/novels/novels.html',
                controller: 'novelCtrl',
								controllerAs: 'vm'
						})
            .state('novel-new', {
                url: '/novel',
                templateUrl: 'templates/novels/novels-new.html',
                controller: 'novelCtrl',
								controllerAs: 'vm'
						})
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'templates/dashboard/dashboard.html',
                controller: 'dashboardCtrl',
                controllerAs: 'vm'
            });

      // $locationProvider.html5Mode(true);
			$urlRouterProvider.otherwise('/signin');

		}])
    .config(['$httpProvider', function($httpProvider) {
      $httpProvider.interceptors.push('AuthInterceptor');
    }]);

})();
