(function () {
    "use strict";
    angular.module('bomControle')
        .controller('createUserController',['$scope','$location','$rootScope', function ($scope, $location, $rootScope) {
          
          $scope.salvar= function(user){
            $rootScope.list.push(user);
            $location.path('/userList');
          }

        }]);
})();

