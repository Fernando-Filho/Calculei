function calcularDecimoTerceiro(baseCalculo, numeroDependentes, dataAdmissao)
{ 
    // Verificando está tudo certo com os dados.
    const verificarSalario = verificadorDeSalario( baseCalculo )
    if (!verificarSalario) { return }

    const verificarDependentes = verificadorDeDependentes( numeroDependentes )
    if (!verificarDependentes) { return }

    const verificarAdmissao = verificadorAdmissao( dataAdmissao )
    if (!verificarAdmissao) { return }

    // Constantes que serão necessarias para o calculo da folha de pagamento.
    console.log(verificarAdmissao)
    let valorSalarioFamilia = salarioFamilia(baseCalculo, numeroDependentes)
    let valorFGTS = fgts(baseCalculo)
    let valorINSS = inss(baseCalculo)
    let valorIRRF = irrf((baseCalculo - valorINSS), numeroDependentes)

    //Valores finais que serão apresentados.
    let salarioLíquido = baseCalculo - (valorINSS + valorIRRF)
    salarioLíquido = salarioLíquido.toFixed(2)
    baseCalculo = baseCalculo.toFixed(2)
    valorFGTS = valorFGTS.toFixed(2)
    valorINSS = valorINSS.toFixed(2)
    valorIRRF = valorIRRF.toFixed(2)

    //Escrevendo no HTML.
    let resposta = document.getElementById('resposta')
    resposta.innerHTML = ""
    resposta.innerHTML = (`De acordo com a base de calculo fornecida, o empregado tera um valor bruto de R$${baseCalculo}<br>
                        Seu FGTS seria de R$${valorFGTS}<br>
                        Seu INSS seria de R$${valorINSS}<br>
                        Seu IRRF seria de R$${valorIRRF}<br>
                        Por fim, o valor líquido a receber seria de R$${salarioLíquido}`)

}