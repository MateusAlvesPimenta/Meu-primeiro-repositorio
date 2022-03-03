function calculadora (){

const operador = Number(prompt('insira o número da operação desejada:\n1- Adição\n 2- Subtração\n 3- Multiplicação\n 4-Divisão Real\n 5- Divisão Inteira\n 6- Potência'))

if(!operador || operador == null){
alert('Numero de operador inválido, escolha um operador valido');
calculadora();
}

var n1 = Number(prompt("Insira o primeiro valor"));

var n2 = Number(prompt("Insira o segundo valor"));

var resultado;

if(!n1 || n1 == null || !n2 || n2 == null){
    alert('Numero inválido, escolha um número valido');
    calculadora()
}

else{
    switch (operador){
        case 1:
            resultado = n1 + n2;
            alert("O resultado de "+n1+" + "+n2+" = "+ resultado);
        break
        
        case 2:
            resultado = n1 - n2;
            alert("O resultado de "+n1+" - "+n2+" = "+ resultado);
        break

        case 3:
            resultado = n1 * n2;
            alert("O resultado de "+n1+" x "+n2+" = "+ resultado);
        break

        case 4:
            resultado = n1 / n2;
            alert("O resultado de "+n1+" dividido por "+n2+" é "+ resultado);
        break

        case 5:
            resultado = n1 % n2;
            alert("O resto da divisão de "+n1+" por "+n2+" é "+ resultado);
        break

        case 6:
            resultado = n1 ** n2;
            alert("O resultado de: "+n1+" elevado a "+n2+" é igual a "+ resultado);
        break   
    }}
}


document.getElementById("repetir").addEventListener("click", repeat);

function repeat(){
    calculadora();
}