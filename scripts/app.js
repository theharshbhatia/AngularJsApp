   var emapp = angular.module('EmApp', ['ngRoute']);
   var controllers = {};

   emapp.config(['$routeProvider',
       function($routeProvider) {
           $routeProvider
               .when('/', {
                   controller: 'PersonController',
                   templateUrl: 'views/list.html'
               })
               .when('/AddPerson', {
                   controller: 'PersonController',
                   templateUrl: 'views/views.html'
               })
               .when('/EditPerson', {
                   templateUrl: 'views/views.html',
                   controller: 'SimpleController'
               })
               .otherwise({
                   redirectTo: '/'
               });
       }
   ]);

   emapp.factory('personFactory', function() {
       return {
           getNames: function() {
               return [{
                   name: 'John cena',
                   username: 'Jcena',
                   email: 'john@gmail.com',
                   password: 'sStaYHungry'
               }, {
                   name: 'Kabir Khan',
                   username: 'KKhan',
                   email: 'Kabir@gmail.com',
                   password: 'PPHungry'
               }];
           },
       };
   });

    // emapp.factory('PersonGetFactory',function($http) {
    //     return {
    //         getJSON : function(){
    //             return $http.get()
    //         }
    //     };
    // });

   controllers.PersonController = function($scope, personFactory) {
       $scope.persons = personFactory.getNames();
       // $scope.submitForm = function(isValid) {

       //     // check to make sure the form is completely valid
       //     if (isValid) {
       //         SaveUser();
       //     }
       // };

       $scope.SaveUser = function() {
           $scope.persons.push({
               name: $scope.NewUser.name,
               username: $scope.NewUser.username,
               email: $scope.NewUser.email,
               password: $scope.NewUser.password
           });
       };

   };

   emapp.controller(controllers);