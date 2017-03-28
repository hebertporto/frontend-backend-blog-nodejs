(function(){
  'use strict';
   angular
      .module('app_services')
      .factory('novelService', novelService);

      novelService.$inject = [];

      function novelService(){

        var novel = {};

        var _set = function (novelSelected) {
            novel = novelSelected;
        }

        var _get = function () {
            return novel;
        }


        return {
            set : _set,
            get : _get
        }
      }


})();
