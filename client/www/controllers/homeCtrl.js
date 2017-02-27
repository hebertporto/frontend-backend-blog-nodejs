(function(){
	'use strict';
	angular.module('app_controllers')
		   .controller('homeCtrl', homeCtrl);

		   homeCtrl.$inject = ['productsAPIService'];

		   function homeCtrl(productsAPIService){
		   	  
		   	  var vm = this;
		   	  
		   	  vm.title 		= "Lista de Produtos";
		   	  vm.products 	= {};
		   	  vm.product  	= { name: ''};
		   	  vm.send 		= createProduct;
		   	  vm.remove 	= remove;
		   	  
		   	  /////////////////
			  getAllProducts();
		   	  
		   	  function getAllProducts(){
		   	  	return productsAPIService.getAll()
		   	  					.then(function(result){		   	  					
		   	  						vm.products = result;
		   	  					})
		   	  					.catch(function(err){
		   	  						console.log("err products", err);
		   	  					});
		   	  }

		   	  function createProduct(product){
		   	  	 return productsAPIService.create(product)
		   	  	 				.then(function(result){
		   	  	 					getAllProducts();
		   	  	 					delete vm.product;
		   	  	 				})
		   	  	 				.catch(function(err){
		   	  	 					console.log("err create product", err);
		   	  	 				});
		   	  }

		   	  function remove(id){
		   	  	return productsAPIService.remove(id)
		   	  					.then(function(result){
		   	  						getAllProducts();
		   	  						console.log(result);
		   	  					})
		   	  					.catch(function(err){
		   	  						console.log("err", err);
		   	  					});
		   	  }
		   }
})();