(function () {
    'use strict';
    angular
          .module("app")
          .value("config", {
              baseUrl   	: "http://localhost:3000/",
              apiUrl    	: "https://doctormate-staging.herokuapp.com/api/",
              loginUrl  	: "https://doctormate-staging.herokuapp.com/api/Users/Pagelogin/",
              imgUrl		  : "http://dxqtwo1uj0qlu.cloudfront.net/",
              imgNotFound : "https://s3.amazonaws.com/doctormate-uploads-dev/"
    });
})();