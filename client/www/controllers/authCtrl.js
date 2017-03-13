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
							$state.go('dashboard');
			  		})
			  		.catch(function(err){
			  			console.log("error ao logar")
			  		});
		  	}

		  	function signup(objParam){
					registerService.register(objParam)
					.then(function (result) {
						  $state.go('dashboard');
					});
		  	}
		  }
})();
