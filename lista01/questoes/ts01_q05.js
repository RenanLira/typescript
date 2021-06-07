"use strict";
function exibir(...letras) {
    return letras.join(" ");
}
console.log(exibir("a", "b"));
console.log(exibir("a", "b", "c"));
console.log(exibir("a", "b", "c", "d"));
