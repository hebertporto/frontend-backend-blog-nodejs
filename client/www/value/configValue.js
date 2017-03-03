(function () {
    'use strict';
    angular
          .module("app")
          .value("config", {
              baseUrl   	: "http://localhost:3000/",
              apiUrl    	: "",
              loginUrl  	: "",
              imgUrl		  : "",
              imgNotFound : ""
    });
})();
