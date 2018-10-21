
    angular.module('bomControle')
        .controller('userListController',['$scope','$rootScope', function ($scope,$rootScope) 
        {
			
		
       		$scope.selecionado ="selecionado";

       		$scope.apagarUser = function(list){
       			$rootScope.list =list.filter(function(user){
       				if(!user.selecionado) return user;
				   });
			$scope.isSelecionado = function () {
			
			}

			}
			
       	}]);   

