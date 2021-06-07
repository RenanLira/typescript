class MeuNumero{

    constructor( readonly _numero: number ) {
        this._numero = _numero
    }

    getInteiro(){
        return Math.floor(this._numero)
    }

    getDecimal(){
        return this._numero - Math.floor(this._numero)
    }

}

const num: MeuNumero = new MeuNumero(3.14)

console.log(num.getDecimal())
console.log(num.getInteiro())