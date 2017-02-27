(function(){
	'use strict';
	angular
		.module('app_controllers')
		.controller('dashboardCtrl', dashboardCtrl);

		dashboardCtrl.$inject = ['userService'];

		function dashboardCtrl (userService) {
			var vm = this;

			vm.users = [];
			vm.changeUserApprove = changeUserApprove;


			getUsers();

			function getUsers(){
				userService.listAll().then(function (result) {
					  vm.users = result.data;
						console.log('users', result.data);
				});
			}

			function changeUserApprove(userObj, index) {
				var user = angular.copy(userObj);
				user.approved = user.approved === 'not' ? 'yes' : 'not';

				userService.changeUserApprove(user).then(function (result) {
						userObj.approved = user.approved;
				});
			}

		}
})();