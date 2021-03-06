(function () {
  'use strict';
  angular
   .module('app')
   .config(['$urlRouterProvider', '$stateProvider', '$authProvider','$locationProvider',
		function  ($urlRouterProvider, $stateProvider, $authProvider, $locationProvider) {

      //  $authProvider.loginUrl = "http://localhost:3000/users/authenticate";
       $authProvider.loginUrl = "https://stark-beach-53351.herokuapp.com/users/authenticate";

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
                url: '/novel-new',
                templateUrl: 'templates/novels/novels-new.html',
                controller: 'novelCtrl',
								controllerAs: 'vm'
						})
            .state('novel-edit', {
                url: '/novel-edit',
                templateUrl: 'templates/novels/novels-new.html',
                controller: 'novelCtrl',
								controllerAs: 'vm'
						})
            .state('chapter', {
                url: '/chapter',
                templateUrl: 'templates/chapter/chapter.html',
                controller: 'chapterCtrl',
								controllerAs: 'vm'
						})
            .state('chapter-new', {
                url: '/chapter-new',
                templateUrl: 'templates/chapter/chapter-new.html',
                controller: 'chapterCtrl',
								controllerAs: 'vm'
						})
            .state('chapter-edit', {
                url: '/chapter-edit',
                templateUrl: 'templates/chapter/chapter-new.html',
                controller: 'chapterCtrl',
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
