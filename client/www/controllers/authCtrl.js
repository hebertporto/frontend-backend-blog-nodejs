(function(){
	'use strict';
	angular
		  .module('app_controllers')
		  .controller('authCtrl', authCtrl);

		  authCtrl.$inject = ['authenticateService', '$state', '$http', '$auth', 'registerService'];

		  function authCtrl(authenticateService, $state, $http, $auth, registerService){

		  	var vm = this;

		  	vm.signin = signin;
		  	vm.signup = signup;

		  	function signin (objForm){
			  	authenticateService.login(objForm).then(function(result){
							console.log('result login', result);
							$state.go('dashboard');
			  		})
			  		.catch(function(err){
			  			console.log("error ao logar")
			  		});

		  		console.log("logando");
		  	}

		  	function signup(objParam){
					registerService.register(objParam)
					.then(function (result) {
						 console.log('resultado do cadastro', result);
					});
		  	}
		  }
})();