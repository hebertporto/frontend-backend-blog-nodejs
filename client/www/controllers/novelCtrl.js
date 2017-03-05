(function() {
    'use strict';
    angular
			.module('app_controllers')
			.controller('novelCtrl', novelCtrl);

    novelCtrl.$inject = ['$http', 'Upload', 'userService', 'novelService', '$state'];

    function novelCtrl($http, Upload, userService, novelService, $state) {

        var vm = this;
        vm.cadastrar = cadastrar;
        vm.novels = [];
        editNovel = editNovel;
        addChapter = addChapter;


        if ($state.current.name === 'novel')
            getNovels();

        function editNovel(){

        }

        function addChapter(){

        }

        function getNovels(){
          novelService.getNovels().then(function(result){
            console.log('getNovels', result);
              vm.novels = result.data;
          });
        }

        function cadastrar(novel) {
            var fd = new FormData();
            fd.append('cover', novel.cover);

            novelService.upload(fd).then(function (result) {
                  novel.users = userService.getCurrentUser();
                  novel.cover_url = result.img_url;
                novelService.add(novel).then(function (result) {
                   $state.go('novel');
                });
            });
        }
    }

})();
