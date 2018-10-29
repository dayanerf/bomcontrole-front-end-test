(function () {
    "use strict";
    angular.module('bomControle')
        .controller('mainController', ['$scope', 'userHttpServices', function ($scope, userHttpServices) {

            if (localStorage.getItem('usuario') === undefined || localStorage.getItem('usuario') === null) {
                userHttpServices.getUsers()
                    .then(function (res) {
                        localStorage.setItem('usuario', JSON.stringify(res.data));
                    });

                }
        }]);
})();