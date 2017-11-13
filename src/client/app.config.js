'use strict'

export default function appConfig($stateProvider, $locationProvider, $urlRouterProvider, uiGmapGoogleMapApiProvider) {
   $locationProvider.html5Mode(true);

   $urlRouterProvider.otherwise('/');
   $stateProvider
      .state('home', {
         url: '/',
         controller: 'homeCtrl as hvm',
         template: require('./app/home/views/home.html')
      })
      // added main to enable smoother navigation to specific sections of the home page from other pages
      .state('main', {
         url: '/home',
         controller: 'homeCtrl as hvm',
         template: require('./app/home/views/home.html')
      })
      .state('resources', {
         url: '/resources',
         controller: 'homeCtrl as hvm',
         template: require('./app/home/views/resources.html')
      })
      .state('financialaid', {
        url: '/financialaid',
        controller: 'homeCtrl as hvm',
        template: require('./app/home/views/financialaids.html')
      });
      uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyASRlFMsqIDTO_2ebxq7gjOzR5nOjzItnE',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
      });
}

appConfig.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider', 'uiGmapGoogleMapApiProvider']
