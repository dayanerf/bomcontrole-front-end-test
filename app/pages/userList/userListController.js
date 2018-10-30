(function () {
	"use strict";
	angular.module('bomControle')
		.controller('userListController', ['$scope', '$location','userHttpServices', function ($scope, $location,userHttpServices) {

			$scope.listaUsuarios = JSON.parse(localStorage.getItem('usuario'));
			console.log($scope.listaUsuarios);

			$scope.apagarUser = function (index) {
				$scope.listaUsuarios.splice(index, 1);
				localStorage.setItem('usuario', JSON.stringify($scope.listaUsuarios));
			};

		
			$scope.novoCadastro = function () {
				$location.path('/create-user');
			};

			$scope.resetUsuarios = function(){
							 userHttpServices.getUsers().then(function(user){
							localStorage.setItem('usuario', JSON.stringify(user.data));
							$scope.listaUsuarios = JSON.parse(localStorage.getItem('usuario'));
							console.log($scope.listaUsuarios);
						});

				
			};
		}]);
		})();