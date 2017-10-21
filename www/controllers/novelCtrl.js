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
        vm.novel = {};
        vm.goNovel = goNovel;
        vm.novo = true;
        vm.loading = true;
        vm.formValidation = false;

        if ($state.current.name === 'novel')
            getNovels();

        if($state.current.name === 'novel-edit'){
          vm.novo = false;
          var id = novelService.get()._id;
          novelAPIService.getNovel(id).then(function(result){
            vm.novel = result.data;
          });
        }

        function goNovel(novel){
            novelService.set(novel);
            $state.go('novel-edit');
        }

        function editNovel(novel){
          novelAPIService.update(novel).then(function (result) {
             $state.go('novel');
          });
        }

        function goChapters(novel){
          novelService.set(novel);
          $state.go('chapter');
        }

        function getNovels(){
          novelAPIService.getNovels().then(function(result){
              vm.novels = result.data;
              vm.loading = false;
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
