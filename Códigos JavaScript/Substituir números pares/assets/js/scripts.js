function substituidor(){
    var array = [];
    var arrayVelha= [];
    for(let i=0;i<=6;i++) {
        
        var numero= Number(prompt("insira um número"));
        
        if(!numero){
            array.push(0);
            arrayVelha.push(0);
        }
        
        else{
        array.push(numero);
        arrayVelha.push(numero);
    }
}

    for(let i=0; i<= array.length; i++){

        if(array[i]%2 == 0 && array[i] != 0){

            array[i]=0;

        }
    }
    alert("Seus valores originais são: "+arrayVelha+"\n"+
        "Seus valores após substituír todos os numeros páres por 0 são: "+array);
}

document.getElementById('iniciar').addEventListener('click', substituidor);