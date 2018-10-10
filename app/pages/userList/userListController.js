(function () 
{
    "use strict";
    angular.module('bomControle')
        .controller('userListController', function ($scope, $http, userHttpServices ) 
        {
       		userHttpServices.getUsers().then(function (response)
       		{
       			$scope.list = response.data;
       		
       		})

       		$scope.selecionado =" selecionado";

       		$scope.apagarUser = function(list){
       			$scope.list = list.filter(function(user){
       				if(!user.selecionado) return user;
       				
       			});
       		}
       	}
		)
})();    

