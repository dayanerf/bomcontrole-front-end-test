(function () {
	"use strict";
	angular.module('bomControle')
		.controller('userListController', ['$scope', '$location', function ($scope, $location) {
			$scope.listaUsuarios = JSON.parse(localStorage.getItem('usuario'));
			console.log($scope.listaUsuarios);

			$scope.selecionado = "selecionado";

			$scope.apagarUser = function (list) {
				$scope.listaUsuarios = list.filter(function (user) {
					if (!user.selecionado) return user;
				});
			};

			$scope.voltar = function () {
				$location.path('/create-user');
			};
		}]);
})();