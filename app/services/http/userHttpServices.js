
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

        
            var _adicionar = function (user) {
                list.push(user);
                    
            }
            
    
            return {
                getUsers: _getUsers,
                adicionar: _adicionar
                
                
            };

        }]);

