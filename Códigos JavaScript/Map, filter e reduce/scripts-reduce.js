var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("array: ",array,"\nsoma das posições: ",array.reduce((acumulador,atual)=>acumulador+atual,0));

//Segundo exercício

const precos=[

    {
        item:"Carne",
        valor: 58,
    },

    {
        item:"Arroz",
        valor: 30,
    },
    {
        item:"Feijão",
        valor: 20,
    },
    {
        item:"Cebola",
        valor: 5,
    },
    {
        item:"Tomate",
        valor: 8,
    }
]
const Saldo=500;

console.log("Saldo inicial: "+Saldo+ 
            "\nSaldo pós compras: "+ precos.reduce((acumulador,atual)=>acumulador-atual.valor,Saldo));