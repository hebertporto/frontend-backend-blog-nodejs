(function() {
    'use strict';
    angular
			.module('app_controllers')
			.controller('novelCtrl', novelCtrl);

    novelCtrl.$inject = ['$http', 'Upload', 'userService', 'novelAPIService', '$state', 'novelService'];

    function novelCtrl($http, Upload, userService, novelAPIService, $state, novelService) {

        var vm = this;
        vm.cadastrar = cadastrar;
        vm.novels = [];
        vm.editNovel = editNovel;
        vm.goChapters = goChapters;


        if ($state.current.name === 'novel')
            getNovels();

        function editNovel(){

        }

        function goChapters(novel){
          novelService.set(novel);
          $state.go('chapter');
        }

        function getNovels(){
          novelAPIService.getNovels().then(function(result){
            console.log('getNovels', result);
              vm.novels = result.data;
          });
        }

        function cadastrar(novel) {
            var fd = new FormData();
            fd.append('cover', novel.cover);

            novelAPIService.upload(fd).then(function (result) {
                  novel.users = userService.getCurrentUser();
                  novel.cover_url = result.img_url;
                novelAPIService.add(novel).then(function (result) {
                   $state.go('novel');
                });
            });
        }
    }

})();
