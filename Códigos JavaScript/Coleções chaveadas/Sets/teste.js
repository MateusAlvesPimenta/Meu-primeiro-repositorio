var array=['10','54','3','12',131,43,1,8];

var newArray=[];

for(let i=0;i<array.length;i++){
    var maior = Math.max(...array);
    document.write(maior);
    var array = array.filter((posição)=>posição!=Math.max(...array))
}
