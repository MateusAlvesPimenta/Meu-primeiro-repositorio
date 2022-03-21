var count=0;
var labelCount=0;

function inserirTarefa(){

    //Puxando o valor que o usuário inseriu no input e guardando na var tarefa
    var tarefa = document.getElementById('tarefa');

    //verificação para caso o usuario tente inserir valores nulos
    if(!tarefa.value){return;}
    
    else{
        // Com Jquery
        // $("#lista").append("<label for='checkbox"+count+"' id='"+labelCount+"'>"+
        //                     "<input onclick='marcar("+labelCount+")' id='checkbox"+count+"' type='checkbox'>"+tarefa.value+"<button id='delButton' onclick='deletarTarefa("+labelCount+")'>X</button><br>"+
        //                     "</label>");
        
        // Sem Jquery
        //Puxando o a div 'lista' que estava criada no html e guardando na var div
        var div=document.getElementById('lista');

        //Criação dos Elementos
        var label= document.createElement('label');
        var input=document.createElement('input');
        var button=document.createElement('button');

        //Atribuindo ID e indicando com quem o label irá se relacionar
        label.setAttribute('id', ''+labelCount);
        label.setAttribute('for','checkbox'+count);

        //atribuindo o tipo do input, id e onclick para quando for cliclado, a tarefa ser marcada
        input.setAttribute('type','checkbox');
        input.setAttribute('id','checkbox'+count);
        input.setAttribute('onclick','marcar('+labelCount+')');
        
        //Atribuindo id, a palavra dentro button que o usuario verá e onclick para quando for clicado, excluir a tarefa
        button.setAttribute('id','delButton');
        button.setAttribute('onclick','deletarTarefa('+labelCount+')');
        button.innerHTML='x';
        
        //Jogando o input, o valor que o usuario inseriu(tarefa.value) e o button dentro do label
        label.appendChild(input);
        label.innerHTML = label.innerHTML+tarefa.value;
        label.appendChild(button);
        label.innerHTML = label.innerHTML+'<br>';
        
        //Jogando o label dentro da div 'lista'
        div.appendChild(label);

        //Limpando o input que o usuario insere a lista e aumentando os valores dos contadores
        tarefa.value= null;
        count++
        labelCount++
    }
}
function marcar(x){
    var checando = document.getElementById(""+x);
    checando.classList.toggle('check');
}
function deletarTarefa(x){
    var deletar=document.getElementById(""+x);
    deletar.remove()
}