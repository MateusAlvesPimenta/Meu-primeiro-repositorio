const alunos = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 6,
		turma: '2C',
	},
    {
		nome: 'Julia',
		nota: 4,
		turma: '2C',
	},
    {
		nome: 'Caio',
		nota: 7,
		turma: '2C',
	},
];
function alunosAprovados(array,media){
    var aprovados = [];

    for(let i = 0; i<= array.length-1; i++){

        var {nome, nota} = array[i];
        
        if(nota >= media){
            aprovados.push(nome);
            console.log('nome:'+nome+ "\nnota:"+nota);
        }
    }
}
