enum DiasSemana {
    Segunda,
    Terça,
    Quarta,
    Quinta,
    Sexta,
    Sabado,
    Domingo
}

namespace DiasSemana {
    export function isDiaUtil(dia: DiasSemana){
        if (dia == 'Sabado' || dia == 'Domingo'){
            return false
        } else{
            return true
        }
    }
}


function TesteDiaSemana (dia: DiasSemana) {
    
    console.log(DiasSemana.isDiaUtil(DiasSemana.dia))

}

TesteDiaSemana('Sabado')

