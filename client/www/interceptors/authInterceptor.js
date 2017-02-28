(function (){
	'use strict';
	angular
		.module('app_interceptors')
		.factory('AuthInterceptor', AuthInterceptor);

		AuthInterceptor.$inject = ['$q','$location', '$injector' ];

		function AuthInterceptor ( $q,  $location, $injector) {
			return {
				request: function (config) {
					config.headers = config.headers || {};

					if($injector.get('authenticateService').getAuthenticate()){
						console.log('injetou o token');
						config.headers['Authorization'] = $injector.get('tokenControlService').getItem('token');
					}

					return config;
				},

				responseError: function (response) {
					console.log('encontrou 401 e redirecioou', response);
					if (response.status === 401 || response.status === 403){
							console.log('encontrou 401 e redirecioou');
							$location.path('/signin');
					}

					return $q.reject(response);
				}
			}
		}
})();