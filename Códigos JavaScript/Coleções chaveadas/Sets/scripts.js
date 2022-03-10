/*var array =[30, 30, 40, 5, 223, 2049, 3034, 5];


function semIguais(array){

    for(var i=0; i < array.length; i++){
        
        for(let x=0; x < array.length; x++){
            if(array[i]==array[x] && i != x){
                array.splice(x,1);
            }
        }
    }
    return array;
}

console.log(semIguais(array));*/

//acima o modo sem a utilização de set

var array =[30, 30, 40, 5, 223, 2049, 3034, 5];

function semIguais(array){
    var meuSet= new Set(array);

    return [...meuSet];
}
console.log(semIguais(array));