
    angular.module('bomControle')
        .controller('userListController',['$scope','$rootScope','$location', function ($scope,$rootScope,$location) 
        {
			
		
       		$scope.selecionado ="selecionado";

       		$scope.apagarUser = function(list){
       			$rootScope.list =list.filter(function(user){
       				if(!user.selecionado) return user;
				   });
			}

			$scope.voltar =function(){
				$location.path('/create-user');
			}
       	}]);   

