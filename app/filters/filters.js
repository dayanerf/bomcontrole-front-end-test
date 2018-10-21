(function () {
  "use strict";
  angular.module('bomControle')


    .filter('cpf', [function () {
      return function (text) {
        return text ? String(text).replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4") : '';
      };
    }])
    .filter('rg', [function () {
      return function (text) {
        return text ? String(text).replace(/^(\d{2})(\d{3})(\d{3})(\d{1})/, "$1.$2.$3-$4") : '';
      };
    }])

    .filter('telefone', [function () {
      return function (text) {
        return text ? String(text).replace(/^(\d{2})(\d{4,5})(\d{4})/, "($1) $2-$3") : '';
      };
    }])

    .filter('cep', [function () {
        return function (text) {
          return text ? String(text).replace(/^(\d{5})(\d{3})/, "$1-$2") : '';
        };
    }])

    .filter('nome', [function () {
      return function (input) {
        var listaDeNome  = input.split("");
        var nomeFormatado = listaDeNome.map(function(name){
          return name.charAt(0).toUpperCase() + name.substring(1).toLowerCase();
        });
      console.log(nomeFormatado);
      return input;
      };
  }]);

 
})();
