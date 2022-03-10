function comparar(){
    var n1 = Number(prompt("Insira o primeiro número"));
    var n2 = Number(prompt("Insira o segundo número"));
    var soma = n1+n2;

    if (!n1 && n1 != 0 || !n2 && n2 != 0){
        alert('valor invalido inserido em um dos campos, por favor, insira um número');
        comparar()
    }
    else{
        if(n1 == n2 && soma > 20){
            alert('Os números: '+n1+' e '+n2+' são iguais, sua soma resulta em: '+soma+' que é maior que 10 e maior que 20');
        }
        if(n1 == n2 && soma > 10 && soma < 20){
            alert('Os números: '+n1+' e '+n2+' são iguais, sua soma resulta em: '+soma+' que é maior a 10 e menor que 20');
        }
        if(n1 == n2 && soma < 10){
            alert('Os números: '+n1+' e '+n2+' são iguais, sua soma resulta em: '+soma+' que é menor que 10 e menor que 20');
        }
        if(n1 == n2 && soma == 10){
            alert('Os números: '+n1+' e '+n2+' são iguais, sua soma é igual a '+soma+' e menor que 20');
        }
        if(n1 == n2 && soma == 20){
            alert('Os números: '+n1+' e '+n2+' são iguais, sua soma é igual a '+soma+' que é maior que 10');
        }
        if(n1 != n2 && soma > 20){
            alert('Os números: '+n1+' e '+n2+' são diferentes um do outro, sua soma resulta em: '+soma+' que é maior que 10 e maior que 20');
        }
        if(n1 != n2 && soma > 10 && soma < 20){
            alert('Os números: '+n1+' e '+n2+' são diferentes um do outro, sua soma resulta em: '+soma+' que é maior a 10 e menor que 20');
        }
        if(n1 != n2 && soma < 10){
            alert('Os números: '+n1+' e '+n2+' são diferentes um do outro, sua soma resulta em: '+soma+' que é menor que 10 e menor que 20');
        }
        if(n1 != n2 && soma == 10){
            alert('Os números: '+n1+' e '+n2+' são diferentes um do outro, sua soma é igual a '+soma+' e menor que 20');  
        }
        if(n1 != n2 && soma == 20){
            alert('Os números: '+n1+' e '+n2+' são diferentes um do outro, sua soma é igual a '+soma+' que é maior que 10');
        }       
    }
}

document.getElementById('iniciar').addEventListener('click', comparar);