(function () {
    "use strict";
    angular.module('bomControle')
        .controller('createUserController',['$scope','$location', function ($scope, $location) {
          
                   

          $scope.salvar= function(user){
            var usuarios = JSON.parse(localStorage.getItem('usuario'));
            usuarios.push(user);
            localStorage.setItem('usuario', JSON.stringify(usuarios));
            $location.path('/userList');
          };

        }]);
})();

