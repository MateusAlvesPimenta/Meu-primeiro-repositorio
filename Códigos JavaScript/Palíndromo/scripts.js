function palindromo(){
var palavra = prompt("Insira uma palavra");

//abccba
//abccba
//uva
//u
//ovo
//

    for(var i=0; i<=palavra.length; i++){

        if (palavra[i]==palavra[palavra.length-1-i] && i==palavra.length){
            alert("esta palavra é um palíndromo");
        }

        if(palavra[i]!=palavra[palavra.length-1-i]){
            alert("esta palavra não é um palíndromo");
        }
    }

}
palindromo();