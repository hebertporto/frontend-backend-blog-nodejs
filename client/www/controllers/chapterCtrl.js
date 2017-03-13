(function(){
	'use strict';
	angular.module('app_controllers')
		   .controller('chapterCtrl', chapterCtrl);

		   chapterCtrl.$inject = ['$state', 'novelService', 'chapterAPIService', 'chapterService'];

		   function chapterCtrl($state, novelService, chapterAPIService, chapterService){

		   	  var vm = this;
          vm.chapters = [];
          vm.createChapter = createChapter;

          var novel = novelService.get();

          if ($state.current.name === 'chapter')
              getChapters();

          function getChapters(){
						var param = {};
						param.novel_id = novelService.get()._id;
            chapterAPIService.getAll(param)
              .then(function(result){
                  vm.chapters = result.data;
              });
          }

          function createChapter(chapter){
             var id = novelService.get()._id;
              chapter.novel = id;

              chapterAPIService.add(chapter)
                .then(function(result){
                    $state.go('chapter');
                });

          }

       }
})();
