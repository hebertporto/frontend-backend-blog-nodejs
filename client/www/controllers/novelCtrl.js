(function() {
    'use strict';
    angular
			.module('app_controllers')
			.controller('novelCtrl', novelCtrl);

    novelCtrl.$inject = ['$http', 'Upload'];

    function novelCtrl($http, Upload) {

        var vm = this;
        vm.cadastrar = cadastrar;


        $http.get('http://localhost:3000/teste').then(function (result) {
           console.log('GET from teste', result);
        });
        
        function cadastrar(cover) {

            var fd = new FormData();
            fd.append('cover', cover);

            $http.post('http://localhost:3000/teste/upload', fd, {
              transformRequest: angular.identity,
              headers: {'Content-Type': undefined}
           }).then(function (result) {
             console.log('resultado da imagem', result.data.img_url);
                var teste = {};
                teste.name = 'gravando direto';
                teste.img_url = result.data.img_url;
                $http.post('http://localhost:3000/teste', teste).then(function (result) {
                    console.log('resultado do cadastro completo', result);
                });
           });
        }
    }

})();
