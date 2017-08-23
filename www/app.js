(function  () {
	'use strict';
	angular.module('app_controllers', []);
	angular.module('app_services', []);
	angular.module('app_components', []);
	angular.module('app_interceptors', []);

	angular.module('app', [
		'ui.router',
		'ui.bootstrap',
		'ngAnimate',
		'ngMessages',
		'app_controllers',
		'app_services',
		'app_components',
		'app_interceptors',
		'satellizer',
		'ngFileUpload',
		'underscore'
	])
	.constant('_', window._)
  // use in views, ng-repeat="x in _.range(3)"
	.run(function  ($rootScope, $state, authenticateService) {
		$rootScope._ = window._;
		  // $rootScope.$on('$routeChangeStart', function(event, next, current) {
      //           if (next.auth) {
      //               if (!authenticateService.getToken()) {
      //                   $rootScope.$evalAsync(function() {
      //                       $state.go('login');
      //                   });
      //               }
      //           }
      //       });
	});

})();
