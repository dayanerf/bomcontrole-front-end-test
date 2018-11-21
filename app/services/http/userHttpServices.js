(function () {
    "use strict";
    angular.module('bomControle')
        .factory('userHttpServices', ['$http', 'config', function ($http) {

            var _getUsers = function () {
                return $http({
                    method: 'GET',
                    url: 'users.json',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
            };

            var _update = function (usuario) {
                console.log('TESTEEEEE');
                try {
                    var usuarios = JSON.parse(localStorage.getItem('usuario'));
                    usuarios.forEach(function (item) {
                        console.log(item);
                        if (item.id === usuario.id) {
                            var index = usuarios.indexOf(item);
                            usuarios.splice(index, 1);
                            usuarios.push(usuario);
                        }
                    });
                    localStorage.setItem('usuario', JSON.stringify(usuarios));

                    return {
                        msg: 'sucesso'
                    };
                } catch (error) {
                    return {
                        msg: 'erro'
                    };
                }
            };
            return {
                getUsers: _getUsers,
                update: _update
            };
        }]);
})();