(function () {
    "use strict";
    angular.module('bomControle')
        .controller('testFrontEndController', ['$scope','$location','$rootScope', function ($scope,$location,$rootScope) {
            
            $scope.testFrontEnd = "Teste Front-End";
            $rootScope.activetab = $location.url();
            console.log($rootScope.activetab);
      
     
        }]);
})();
