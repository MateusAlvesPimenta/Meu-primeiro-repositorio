var numerohtml = document.getElementById("numero");

document.getElementById("subtrair").addEventListener("click", diminuir);
document.getElementById("somar").addEventListener("click", aumentar);

var numerohtml1 = document.getElementById("numero1");
var numerohtml2 = document.getElementById("numero2");

var count = 0;
var count1 = 0;
var count2 = 0;

function aumentar (){
    count = count + 1;
    numerohtml.innerHTML = count;
}

function aumentar1 (){
    if(count1<10){
    count1 = count1 + 1;
    numerohtml1.innerHTML = count1;
    }}

function aumentar2 (){
    count2 = count2 + 1;
    numerohtml2.innerHTML = count2;
if(count2>=0){
    numerohtml2.style.color = "black";
}}

function diminuir (){
    count = count - 1;
    numerohtml.innerHTML = count;
}

function diminuir1 (){
    if(count1 > 0) {
        count1 = count1 - 1;
        numerohtml1.innerHTML = count1;
    }}

function diminuir2 (){
    count2 = count2 - 1;
    numerohtml2.innerHTML = count2;
    if(count2<0){
        numerohtml2.style.color = "red";
    }}