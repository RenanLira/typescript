enum Estados {
    PI,
    CE,
    MA
}

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