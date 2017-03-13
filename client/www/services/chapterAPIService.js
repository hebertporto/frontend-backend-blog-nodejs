(function(){
  'use strict';
   angular
      .module('app_services')
      .factory('chapterAPIService', chapterAPIService);

      chapterAPIService.$inject = ['config', '$http'];

      function chapterAPIService(config, $http){

        var _getAll = function (objParam) {
            return $http.post(config.baseUrl + 'chapters/novelChapters', objParam)
            .then(function (result) {
              return result.data;
            });
        }

        var _add = function (objParam){
          return $http.post(config.baseUrl + 'chapters/', objParam)
             .then(function (result) {
               return result.data;
             });
        }


  			return {
  				getAll : _getAll,
          add : _add
  			}
      }
})();
