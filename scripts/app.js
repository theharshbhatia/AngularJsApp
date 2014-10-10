   var emapp = angular.module('EmApp', []);
   var controllers = {};

emapp.factory('personFactory',function(){
    return {
        getNames : function(){
                return   [{
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


   controllers.SimpleController = function($scope, personFactory) {
      $scope.persons = personFactory.getNames();

       // $scope.submitForm = function(isValid) {

       //     // check to make sure the form is completely valid
       //     if (isValid) {
       //         SaveUser();
       //     }

       // };

       var SaveUser = function() {
           $scope.customers.push({
               name: $scope.NewUser.name,
               username: $scope.NewUser.username,
               email: $scope.NewUser.email,
               password: $scope.NewUser.password
           });
       };

   };

   emapp.controller(controllers);