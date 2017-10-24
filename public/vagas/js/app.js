angular.module('escola', ['ngMessages', 'ui', 'ngRoute']);

/*
angular.module('escola').run(function ($rootScope, $route, $routeParams, $location,TokenAPI) {
    $rootScope.$on('$routeChangeStart', function (event, next, current) {
    	console.log('Nome do Evento:'+event.name);
        console.log('Próxima Rota:'+ angular.toJson(next));
        console.log('Rota Atual:'+ angular.toJson(current));    	
    	
        if (next.authorize) {
          if (!TokenAPI.getToken()) {
            /* Ugly way
            event.preventDefault();
            $location.path('/login');
            ========================== */ /*

           $rootScope.$evalAsync(function () {
           $location.path("/restrito");
          })
          }
        	console.log("Rota segura");
        };
        
        $rootScope.$route = $route;
        $rootScope.$location = $location;
        $rootScope.$routeParams = $routeParams;
      });

    });

*/