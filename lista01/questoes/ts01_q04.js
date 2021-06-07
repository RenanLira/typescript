"use strict";
var DiasSemana;
(function (DiasSemana) {
    DiasSemana[DiasSemana["Segunda"] = 0] = "Segunda";
    DiasSemana[DiasSemana["Ter\u00E7a"] = 1] = "Ter\u00E7a";
    DiasSemana[DiasSemana["Quarta"] = 2] = "Quarta";
    DiasSemana[DiasSemana["Quinta"] = 3] = "Quinta";
    DiasSemana[DiasSemana["Sexta"] = 4] = "Sexta";
    DiasSemana[DiasSemana["Sabado"] = 5] = "Sabado";
    DiasSemana[DiasSemana["Domingo"] = 6] = "Domingo";
})(DiasSemana || (DiasSemana = {}));
(function (DiasSemana) {
    function isDiaUtil(dia) {
        if (dia == 'Sabado' || dia == 'Domingo') {
            return false;
        }
        else {
            return true;
        }
    }
    DiasSemana.isDiaUtil = isDiaUtil;
})(DiasSemana || (DiasSemana = {}));
function TesteDiaSemana(dia) {
    console.log(DiasSemana.isDiaUtil(DiasSemana.dia));
}
TesteDiaSemana('Sabado');
