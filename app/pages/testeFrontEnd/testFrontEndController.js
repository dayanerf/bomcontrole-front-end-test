(function () {
    "use strict";
    angular.module('bomControle')
        .controller('testFrontEndController', ['$scope','userHttpServices','$rootScope', function ($scope,userHttpServices,$rootScope) {
            
            $scope.testFrontEnd = "Teste Front-End";

      
            userHttpServices.getUsers().then(function (response)
            {
                $rootScope.list = response.data;
                console.log($rootScope.list);
            })

        }]);
})();
