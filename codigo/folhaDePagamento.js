function calcular() {
    // Variáveis que serão pegas do cliente.
    var salárioContratual = document.getElementById('salárioContratual').value
    var númeroDependentes = document.getElementById('númeroDependentes').value
    var resposta = document.getElementById('resposta')
    
    // Constantes que serão necessárias para o calculo da folha de pagamento.
    var salárioLíquido
    var innsDescontado
    var irrfDescontado
    var baseCalculoIrrf
    var fgtsValor
    let fgtsAlíquota = 8
    var valorInicial = 0
    let valorFinal = 1
    let alíquota = 2
    let descontoMáximoAtéFaixa = 3
    let parcelaDedutível = 3
    //Tabela de INSS.
    let inss =
    {
        faixa1: [0, 1212, 7.5, 90.90],
        faixa2: [1212.01, 2427.35, 9, 200.28],
        faixa3: [2427.36, 3641.03, 12, 345.92],
        faixa4: [3641.04, 7.087, 22, 14, 828.39]
    }
    //Tabela de IRRF.
    let irrf =
    {
        faixa1: [0, 1903.98, 0, 0],
        faixa2: [1903.99, 2826.65, 7.5, 142.8],
        faixa3: [2826.66, 3751.05, 15, 354.80],
        faixa4: [3751.06, 4664.68, 22.5, 636.13],
        faixa5: [4664.69, , 27.5, 869.36],
        deduçãoPorDependente: 189.59
    }
    //Calculo pra achar o valor a ser descontado no INSS.
    if(salárioContratual <= inss.faixa1[valorFinal])
    {
        innsDescontado = salárioContratual * inss.faixa1[alíquota] / 100
    }
    else if(salárioContratual <= inss.faixa2[valorFinal])
    {
        innsDescontado =  ((salárioContratual - inss.faixa1[valorFinal]) * inss.faixa2[alíquota] / 100) + inss.faixa1[descontoMáximoAtéFaixa]
    }
    else if(salárioContratual <= inss.faixa3[valorFinal])
    {
        innsDescontado =  ((salárioContratual - inss.faixa2[valorFinal]) * inss.faixa3[alíquota] / 100) + inss.faixa1[descontoMáximoAtéFaixa] + inss.faixa2[descontoMáximoAtéFaixa]
    }
    else if(salárioContratual <= inss.faixa4[valorFinal])
    {
        innsDescontado =  ((salárioContratual - inss.faixa3[valorFinal]) * inss.faixa4[alíquota] / 100) + inss.faixa1[descontoMáximoAtéFaixa] + inss.faixa2[descontoMáximoAtéFaixa] + inss.faixa3[descontoMáximoAtéFaixa]
    }else if(salárioContratual >= inss.faixa4[valorFinal])
    {
        innsDescontado = inns.faixa4[descontoMáximoAtéFaixa]
    }
    baseCalculoIrrf = (salárioContratual - innsDescontado) - (irrf.deduçãoPorDependente * númeroDependentes)
    
    //Calculo pra achar o valor a ser descontado no IRRF.
    if( baseCalculoIrrf <= irrf.faixa1[valorFinal])
    {
        irrfDescontado = ((baseCalculoIrrf * irrf.faixa1[alíquota]) / 100) - irrf.faixa1[parcelaDedutível]
    }
    else if( baseCalculoIrrf <= irrf.faixa2[valorFinal])
    {
        irrfDescontado = ((baseCalculoIrrf * irrf.faixa2[alíquota]) / 100) - irrf.faixa2[parcelaDedutível]
    }
    else if( baseCalculoIrrf <= irrf.faixa3[valorFinal])
    {
        irrfDescontado = ((baseCalculoIrrf * irrf.faixa3[alíquota]) / 100) - irrf.faixa3[parcelaDedutível]
    }
    else if( baseCalculoIrrf <= irrf.faixa4[valorFinal])
    {
        irrfDescontado = ((baseCalculoIrrf * irrf.faixa4[alíquota]) / 100) - irrf.faixa4[parcelaDedutível]
    }
    else if( baseCalculoIrrf <= irrf.faixa5[valorFinal])
    {
        irrfDescontado = ((baseCalculoIrrf * irrf.faixa5[alíquota]) / 100) - irrf.faixa5[parcelaDedutível]
    }

    //Valores finais que serão apresentados.
    salárioLíquido = salárioContratual - (innsDescontado + irrfDescontado)
    salárioLíquido = salárioLíquido.toFixed(2)
    fgtsValor = salárioContratual * fgtsAlíquota / 100
    fgtsValor = fgtsValor.toFixed(2)
    
    //Escrevendo no HTML.
    resposta.innerHTML = ""
    resposta.innerHTML = (`O empregado terá um salário contratual de R$${salárioContratual}, tendo o salário líquido de R$${salárioLíquido}, por fim tendo direito a um FGTS recolhido no valor de R$${fgtsValor}`)
}