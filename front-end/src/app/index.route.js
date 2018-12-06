export function routerConfig($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('auth', {
      url: '/auth', //for the actual localhost url
      templateUrl: 'app/auth/auth.html', //to reference the routh of actual web page to use from the file directory of this porject
      controller: 'AuthController', //to use the class from its controller
      controllerAs: 'auth' //to use methods from auth controller and recognize it as such (auth.[method]])
    });

  $urlRouterProvider.otherwise('/');
}
