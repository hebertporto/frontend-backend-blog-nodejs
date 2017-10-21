(function(){
	'use strict';
	angular.module('app_controllers')
		   .controller('chapterCtrl', chapterCtrl);

		   chapterCtrl.$inject = ['$state', 'novelService', 'chapterAPIService', 'chapterService', 'paginationService'];

		   function chapterCtrl($state, novelService, chapterAPIService, chapterService, paginationService){

		   	  var vm = this;
          vm.chapters = [];
          vm.createChapter = createChapter;
					vm.editChapter = editChapter;
					vm.goChapter = goChapter;
					vm.chapter = {};
					vm.novo = true;
					vm.deleteChapter = deleteChapter;
					vm.loading = true;
					vm.submitForm = submitForm;

          var novel = novelService.get();
					vm.novel = novel;

					vm.pager = {};
					vm.setPage = setPage;

					function setPage(page) {
							if (page < 1 || page > vm.pager.totalPages) {
									return;
							}
							vm.pager = paginationService.GetPager(vm.chapters.length, page);
							vm.items = vm.chapters.slice(vm.pager.startIndex, vm.pager.endIndex + 1);
					}

          if ($state.current.name === 'chapter')
              getChapters();

					if($state.current.name === 'chapter-edit'){
						vm.novo = false;
						var id = chapterService.get()._id;
						chapterAPIService.getChapter(id).then(function(result){
							vm.chapter = result.data;
						});
					}

					if ($state.current.name === 'chapter-new') {
						var ch = chapterService.get();
						vm.lastCreated = ch;
						vm.chapter.translators = ch.translators
						vm.chapter.revisors = ch.revisors
					}

					function submitForm(valueBoolean) {
            vm.formValidation = valueBoolean;
					}

					function deleteChapter(id){
						chapterAPIService.deletar(id)
							.then(function(result){
									$state.go('chapter', {}, { reload: true });
							});
					}

					function goChapter(chapter) {
							chapterService.set(chapter);
							$state.go('chapter-edit');
					}

          function getChapters() {
						var param = {};
						param.novel_id = novelService.get()._id;
            chapterAPIService.getAll(param)
              .then(function(result){
									vm.chapters = _.reverse(result.data);
									if(vm.chapters.length > 0) {
										var lastCreated = _.orderBy(vm.chapters, ['created_at'], ['desc']);
										chapterService.set(lastCreated[0]);
									}
									else
										chapterService.set({})
									vm.setPage(1);
									vm.loading = false;
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
									$state.go('chapter');
							});
					}

       }
})();
