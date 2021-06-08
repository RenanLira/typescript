class Transacao{

    constructor(readonly _valor: number, readonly _desconto: number){
        this._valor = _valor,
        this._desconto = _desconto
    }

    aplicarDesconto(){
        return this._valor * (1-this._desconto/100)
    }


    get valor() {
        return this._valor
    }

    get desconto(){
        return this._desconto
    }

}


const transicao1: Transacao = new Transacao(200, 10)

console.log(transicao1.aplicarDesconto())

console.log(transicao1.valor)

console.log(transicao1.desconto)