"use strict";
class MeuNumero {
    constructor(_numero) {
        this._numero = _numero;
        this._numero = _numero;
    }
    getInteiro() {
        return Math.floor(this._numero);
    }
    getDecimal() {
        return this._numero - Math.floor(this._numero);
    }
}
const num = new MeuNumero(3.14);
console.log(num.getDecimal());
console.log(num.getInteiro());
