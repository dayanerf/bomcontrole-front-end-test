(function () {
  "use strict";
  angular.module('bomControle')
    .controller('createUserController', ['$scope', '$location', '$rootScope', function ($scope, $location, $rootScope) {
      
      $rootScope.activetab = $location.url();
      console.log($rootScope.activetab);

      $scope.salvar = function (user) {
        var usuarios = JSON.parse(localStorage.getItem('usuario'));
        usuarios.push(user);
        localStorage.setItem('usuario', JSON.stringify(usuarios));
        // $scope.cadastroForm.$setPristine();
        $location.path('/userList');
      };

      

    }]);
})();