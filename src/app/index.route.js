export function routerConfig ($stateProvider, $urlRouterProvider,$locationProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'app/about/about.html',
      controller: 'AboutController',
      controllerAs: 'about'
    })
    .state('stack', {
      url: '/stack',
      templateUrl: 'app/stack/stack.html',
      controller: 'StackController',
      controllerAs: 'stack'
    });

  $urlRouterProvider.otherwise('/');

   // use the HTML5 History API
  $locationProvider.html5Mode(true);
}


