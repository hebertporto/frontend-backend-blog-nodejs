(function (){
	'use strict';
	angular
		.module('app_interceptors')
		.factory('AuthInterceptor', AuthInterceptor);

		AuthInterceptor.$inject = [ 'authenticateService', '$q', 'tokenControlService' ];

		function AuthInterceptor (authenticateService, $q, tokenControlService) {
			return {
				request: function (config) {
					config.headers = config.headers || {};

					if(authenticateService.getAuthenticate()){
						config.headers['Authorization'] = tokenControlService.getItem('token');
					}

					return config;
				},

				responseError: function (response) {
					if (response.data.status === 401 || response.data.status === 403){
		
						 // $injector.get('$state').transitionTo('login');
					}

					return $q.reject(response);
				}
			}
		}
})();