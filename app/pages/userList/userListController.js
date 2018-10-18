
    angular.module('bomControle')
        .controller('userListController', function ($scope, userHttpServices ) 
        {
       		userHttpServices.getUsers().then(function (response)
       		{
       			$scope.list = response.data;
       		
       		})

       		$scope.selecionado ="selecionado";

       		$scope.apagarUser = function(list){
       			$scope.list = list.filter(function(user){
       				if(!user.selecionado) return user;
       				
				   });
			$scope.isSelecionado = function (list) {
				console.log(list);
			}

			}
			
       	});   

