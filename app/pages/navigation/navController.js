(function () {
    "use strict";
    angular.module('bomControle')
        .controller('navController', [function () {

            var navBar = document.getElementById('navbar');
            var navBarItem = navBar.getElementsByTagName('li');

            function limparAtivo() {
                for (var i = 0; i < navBarItem.length; i++) {
                    var item = navBarItem[i];

                    for (var index = 0; index < item.classList.length; index++) {
                        if (item.classList[index] === 'active') {
                            item.classList.remove('active');
                        }
                    }
                }
            }

            function setarAtivo(id) {
                var _itemSelecionado = document.getElementById(id);
                _itemSelecionado.classList.add('active');
            }

            if (localStorage.getItem("tabSelecionado") !== undefined && localStorage.getItem("tabSelecionado") !== null) {
                var _itemIdSelecionado = localStorage.getItem("tabSelecionado");
                setarAtivo(_itemIdSelecionado);
            } else {
                setarAtivo('home');
            }

            $("#navbar").click(function (event) {
                limparAtivo();
                var _itemIdSelecionado = event.target.offsetParent.id;
                localStorage.setItem("tabSelecionado", _itemIdSelecionado);
                setarAtivo(_itemIdSelecionado);
            });

        }]);
})();