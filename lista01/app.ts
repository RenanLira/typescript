class Alo {

    constructor(private nome: string){}

    dizerAlo(){
        console.log(`Olá ${this.nome}`)
    }
}


const alo : Alo = new Alo('Renan')

class Post {
    constructor(private _text: string){}

    get text() : string {
        return this._text
    }

    set text(text: string){
        this._text = text
    }
}