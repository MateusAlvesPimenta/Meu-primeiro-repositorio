programa
{
	
	funcao inicio()
	{
		inteiro numero,multiplicador,limite
		multiplicador=0
		
	escreva("insira a tabuáda que você deseja: ")

		leia(numero)

	escreva("Insira o limite da tabuáda(maior que 0): ")
	
	faca
	{
		
	leia(limite)
	
		escolha(limite)
		{
		caso 0:
			escreva("Por favor, Insira um valor maior que 0: ")
		pare
		
		caso contrario:	
			faca
			{
				
				escreva("\n"+ numero +" x "+ multiplicador +" = "+ numero*multiplicador)
				multiplicador++
				
			}enquanto(multiplicador<=limite)
		pare
		}
	}enquanto(limite<=0)
	
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 205; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */