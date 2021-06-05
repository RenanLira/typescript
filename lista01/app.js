"use strict";
class Alo {
    constructor(nome) {
        this.nome = nome;
    }
    dizerAlo() {
        console.log(`Olá ${this.nome}`);
    }
}
const alo = new Alo('Renan');
class Post {
    constructor(_text) {
        this._text = _text;
    }
    get text() {
        return this._text;
    }
    set text(text) {
        this._text = text;
    }
}
