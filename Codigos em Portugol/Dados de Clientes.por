programa
{
	
	funcao inicio()
	{
		//este programa tem como função apresentar o nome, cidade e número de celular de um determinado cliente
		
		inteiro linha,coluna,contador
		
		inteiro numero
		cadeia clientes [][]={	{"João","São Paulo","(11)9999-5241"},
							{"Maria","Ribeirão Preto","(16)9999-8596"},
							{"Ana","Manaus","(92)9999-8574"}}
		
		contador=0	
		
		escreva ("Ola, possuímos os seguintes clientes:"+"\n"+
				"1- João"+"\n"+"2- Maria"+"\n"+"3- Ana."+ "\n"+
				"Escolha um cliente em especifico e escreva seu número sem espaços para ver seu"+ "\n"+
				"nome, cidade e número de celular."+ "\n"+
				"Caso queira saber os dados de todos eles apenas digite 0."+ "\n")
		
		leia (numero)
		
		se (numero < 0 ou numero >3)
		{
			faca
			{
			escreva("insira um numero que corresponda a um cliente ou 0 para ver todos eles"+"\n"+
					"1- João"+"\n"+"2- Maria"+"\n"+"3- Ana."+ "\n")
			leia(numero)
			}enquanto(numero < 0 ou numero >3)
		}
		
		se(numero >= 1 e numero <= 3)
		{
		numero--
			escreva("\n"+"cliente		Cidade		Celular "+"\n"+clientes [numero][0]+"		"+
															clientes [numero][1]+"  	"+ 
															clientes [numero][2]+"\n")
		numero++
		}
		
		se(numero == 0)
		{
			
			faca
				{
				escreva("\n"+"cliente		Cidade		Celular "+"\n"+clientes [contador][0]+"		"+
																clientes [contador][1]+"  	"+ 
																clientes [contador][2]+"\n")
			
				contador++
				}enquanto(contador<=2)
		}

		
}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1218; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */