const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const pares = (lista: number[]) => {
    return lista.filter((v, i) => {
        return v ? v % 2 == 0 : ""
    })
}

console.log(pares(array))