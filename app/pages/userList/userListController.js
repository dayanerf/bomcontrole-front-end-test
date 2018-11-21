(function () {
	"use strict";
	angular.module('bomControle')
		.controller('userListController', ['$scope', '$location', 'userHttpServices', '$rootScope', '$uibModal', function ($scope, $location, userHttpServices, $rootScope, $uibModal) {
			$rootScope.activetab = $location.url();
			console.log($rootScope.activetab);

			$scope.listaUsuarios = JSON.parse(localStorage.getItem('usuario'));

			$scope.user = this.dados;

			$scope.apagarUser = function (index) {

				$scope.listaUsuarios.splice(index, 1);
				localStorage.setItem('usuario', JSON.stringify($scope.listaUsuarios));
			};

			$scope.novoCadastro = function () {
				$location.path('/create-user');
			};

			$scope.resetUsuarios= function ()  {
				 userHttpServices.getUsers().then(function (user) {
					localStorage.setItem('usuario', JSON.stringify(user.data));
					$scope.listaUsuarios = JSON.parse(localStorage.getItem('usuario'));
				});
				return $scope.listaUsuarios;
			}

			$scope.editarUser = function (usuario) { // abre modal de edição de cadastro. 
				$uibModal.open({
					templateUrl: 'app/pages/createUser/modalEditarUser.html',
					controller: function ($scope, $uibModalInstance, userHttpServices) {
						$scope.user = usuario;

						$scope.cancel = function () {
							$uibModalInstance.dismiss('cancel');
						  };

						$scope.salvar = function (usuario) {
							var retorno = userHttpServices.update(usuario);
							if (retorno.msg === 'sucesso') {
								$uibModalInstance.close(usuario);
							}	
						};
					
					}
				});
			};


			if($scope.listaUsuarios.length === 0) { // verifica se o array está vazio, caso sim reseta automaticamente. 
				$scope.resetUsuarios();
			}
		}]);
})();