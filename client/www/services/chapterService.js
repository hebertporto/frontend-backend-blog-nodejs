(function(){
  'use strict';
   angular
      .module('app_services')
      .factory('chapterService', chapterService);

      chapterService.$inject = [];

      function chapterService(){

        var chapter = {};

        var _set = function (chapter) {
            chapter = chapter;
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
