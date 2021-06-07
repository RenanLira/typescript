* # 1 Questão:

## Pergunta:

Verifique nas alternativas abaixo quais compilam ou não. Explique o motivo:

### a. 
``` 
let a = 10;
a = "2"; 
```
### b.
```
let b: any = 10;
b = 2;
```
### c.
```
let c: number = 10;
c = 2;
```

## Resposta:
### a.
Não compila. O tipo 'string' não pode ser atribuído ao tipo 'number'.

### b.
Compila. A variavel do tipo any aceita qualquer outro tipo atribuido a ele.

### c.
Compila. O numero atribuito a ele continua sendo do tipo number.


* # 2 Questão:

## Pergunta:

Dada a função soma abaixo, tente executar os scripts das alternativas e exiba os
eventuais resultados:
```
function soma(x: number, y?: any): number {
    return x + y
}
```

### a.
console.log(soma(1, 2));

### b.
console.log(soma(1, "2"));

### c.
console.log(soma(1));

## Resposta:

### a.
Resultado: 3

### b.
Resultado: 12

### c.
Resultado: NaN


* # Questão 6:

# Pergunta:

Converta em arrow function a seguinte função:
```
function ola() {
    console.log("Olá");
}
```

# Resposta:
```
const ola = () => {
    console.log("Olá");
}
```