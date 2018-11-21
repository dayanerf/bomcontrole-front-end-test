(function () {
    "use strict";
    angular.module('bomControle')
        .directive('menuPrincipal', [function () {
            return {
                templateUrl: "app/pages/navigation/nav.html",
                restrict: 'AE',
                scope: {

                },


            };

        }]);

    angular.module('bomControle').directive('telaEditar', function () {
        return {
            templateUrl: 'app/pages/createUser/createUser.html',
            restrict: 'AE',
            controller: 'userListController',
            controllerAs: 'ctrl',
            bindToController: true,
            scope: {
                aparecer: '&',
                dados: "="
            },
            link: function ($scope) {
               $scope.teste = $scope.dados;
            }
        };
    });
})();