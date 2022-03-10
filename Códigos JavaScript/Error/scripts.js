var array = new Array(1,2,3,4,5,6,7,8,9,0);
var array1 = 1;

function verificador (arr,numero){
    
    try {
        if(!arr && !numero){
            throw new ReferenceError("parâmetros insuficientes, insira os parâmetros");
        }
    
        else if(typeof numero!=='number'){        
            throw new TypeError('valor inválido, insira um número');
        }
        
        else if(typeof arr!== 'object'){
            throw new TypeError('O array inserido não é um objeto');
        }
    
        else if(arr.length!=numero){
            throw new RangeError('Tamanho de array inválido');
        }
    } 
    catch (e) {

        if(e instanceof ReferenceError){
            console.log("Erro: ReferenceError\n"+e.message);
        }
        else if(e instanceof TypeError){
            console.log("Erro: TypeError\n"+e.message);
        }
        else if(e instanceof RangeError){
            console.log('Erro: RangeError\n'+e.message);
        }
        else{
            console.log('Tipo de erro inesperado\n'+ e);
        }
        
    }
}
console.log(verificador(array,'a'));