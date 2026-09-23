import leia from "readline-sync"

var nome = leia.question("Digite o nome do cliente: ");
console.log(nome)

console.log("=========PRODUTOS=========");
console.log("1 - camisa");
console.log("2 - calça");
console.log("3 - casaco");
console.log("4 - meias");


var compras = leia.questionInt("O que voce quer comprar? ")
if(compras === 1){
console.log("vode comprou uma camisa")
} else if(compras === 2){
    console.log("voce comprou uma calça")
} else if(compras === 3){
    console.log("voce comprou um casaco")
} else if(compras === 4){
    console.log("voce comprou um par de meias")
} else {
    console.log("OPÇAO INVALIDA")
}

//=============================================================