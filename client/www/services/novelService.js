(function (){
	'use strict';
	angular
		.module('app_services')
		.factory('novelService', novelService);

		novelService.$inject = ['$state', '$http', 'config'];

		function novelService ($state, $http, config) {

      var _getNovels = function (objParam) {
          return $http.get(config.baseUrl + 'novels/')
          .then(function (result) {
            return result.data;
          });
      }

      var _add = function (objUser){
        return $http.post(config.baseUrl + 'novels/', objUser)
           .then(function (result) {
             return result.data;
           });
      }

			var _upload = function (img) {
        return $http.post(config.baseUrl + 'novels/upload', img, {
          transformRequest: angular.identity,
          headers: {'Content-Type': undefined}
       })
       .then(function (result) {
         return result.data;
         });
			}

			return {
				getNovels : _getNovels,
        add : _add,
				upload: _upload
			}
		}
})();