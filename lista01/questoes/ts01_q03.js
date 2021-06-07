"use strict";
var Estados;
(function (Estados) {
    Estados[Estados["PI"] = 0] = "PI";
    Estados[Estados["CE"] = 1] = "CE";
    Estados[Estados["MA"] = 2] = "MA";
})(Estados || (Estados = {}));
for (let i in Estados) {
    if (isNaN(Number(i))) {
        console.log(i);
    }
}
for (let i in Estados) {
    if (!isNaN(Number(i))) {
        console.log(i);
    }
}
// os enum numericos terão pares de chave-valores para nome e indice e vice-versa
