function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa = {
    nome: 'Mateus',
    idade: 18,
};
const animal = {
    nome: 'Igu',
    idade: 3,
};

console.log(calculaIdade.call(animal,5));

console.log(calculaIdade.apply(pessoa,[5]));