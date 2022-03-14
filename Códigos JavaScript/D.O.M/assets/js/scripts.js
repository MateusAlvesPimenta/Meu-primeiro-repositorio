var htmlElements = document.getElementsByClassName('element')[0];
var h1 = document.getElementsByTagName('h1')[0];
var botão0 = document.getElementById('mode-selector');
var botão1 = document.getElementById('show-text');
var botão2 = document.getElementById('delete-text');
var botão3 = document.getElementById('change-text');
botão0.addEventListener('click',modo);
botão1.addEventListener('click',showText);
botão2.addEventListener('click',delText);
botão3.addEventListener('click',changeText);

var pai=document.getElementById('pai');

function modo(){
    htmlElements.classList.toggle('dark-mode');
    
    if(htmlElements.classList.contains('dark-mode')){
        botão0.innerHTML='Light Mode';
        h1.innerHTML='Dark Mode ON';
    }else{
        botão0.innerHTML='Dark Mode';
        h1.innerHTML='Light Mode ON';
    }
}
function showText(){
    let filha= document.createElement('p');
    filha.innerHTML='Ola, eu acabei de ser criado';
    pai.appendChild(filha);
    filha.classList.add('filha');
}

function delText(){
    let remover = document.getElementsByClassName('filha')[0];
    let remover1 = document.getElementsByClassName('filho')[0];
    
    if(remover !== undefined ){
        remover.parentNode.removeChild(remover);
        return
    }
    remover1.parentNode.removeChild(remover1);    
}
function changeText(){
    let filho= document.createElement('h1');
    filho.innerHTML='MUDEI!!!!';
    filho.classList.add('filho');
    var mudar = document.getElementsByClassName('filha')[0];
    mudar.parentNode.replaceChild(filho,mudar);
}