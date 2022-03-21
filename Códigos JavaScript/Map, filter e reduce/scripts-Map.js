var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var objeto = {
    valor1: 7.3,
    valor2: 11.8,
    valor3: 19.4,
};

console.log("Sem this: "+array.map((posicao)=>posicao*9));
console.log("Com this: "+array.map(function(posicao) {return posicao*this.valor2},objeto));
