(function () {
  "use strict";
  angular.module('bomControle')
    .controller('createUserController', ['$scope', '$location', '$rootScope', function ($scope, $location, $rootScope, cadastroUser) {

      $rootScope.activetab = $location.url();
      console.log($rootScope.activetab);


      $scope.salvar = function (user) {
        var id = "";
        while (id.length < 20) {
          id += String.fromCharCode(Math.floor(Math.random() * 64) + 32);
        }
        user.id = id;
        var usuarios = JSON.parse(localStorage.getItem('usuario'));
        usuarios.push(user);
        localStorage.setItem('usuario', JSON.stringify(usuarios));
        $scope.cadastroForm.$setPristine();
        console.log(usuarios);

      };
    }]);
})();