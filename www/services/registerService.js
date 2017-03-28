(function (){
	'use strict';
	angular
		.module('app_services')
		.factory('registerService', registerService);

		registerService.$inject = ['$state', 'tokenControlService', '$auth', '$http', 'config'];

		function registerService ($state, tokenControlService, $auth, $http, config) {

      var _register = function (objParam) {
         return $http.post(config.baseUrl + 'users/', objParam)
            .then(function (result) {
              return result.data;
            });
      }

			return {
				register : _register
			}
		}
})();