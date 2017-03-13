(function(){
	'use strict';
	angular.module('app_controllers')
		   .controller('chapterCtrl', chapterCtrl);

		   chapterCtrl.$inject = ['$state', 'novelService', 'chapterAPIService', 'chapterService'];

		   function chapterCtrl($state, novelService, chapterAPIService, chapterService){

		   	  var vm = this;
          vm.chapters = [];
          vm.createChapter = createChapter;
					vm.editChapter = editChapter;
					vm.goChapter = goChapter;
					vm.chapter = {};
					vm.novo = true;

          var novel = novelService.get();

          if ($state.current.name === 'chapter')
              getChapters();

					if($state.current.name === 'chapter-edit'){
						vm.novo = false;
						var id = chapterService.get()._id;
						chapterAPIService.getChapter(id).then(function(result){
							console.log('get chapter', result.data);
							vm.chapter = result.data;
						});
					}

					function goChapter(chapter) {
							chapterService.set(chapter);
							$state.go('chapter-edit');
					}

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

					function editChapter(chapter){
						chapterAPIService.update(chapter)
							.then(function(result){
								console.log('result update', result.data);
									$state.go('chapter');
							});
					}

       }
})();
