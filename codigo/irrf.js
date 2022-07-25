function irrf (baseCalculo, qtdDepentes)
{
    //Tabela de IRRF.
    const irrf =
    {
        faixa1: [0, 1903.98, 0, 0],
        faixa2: [1903.99, 2826.65, 7.5, 142.8],
        faixa3: [2826.66, 3751.05, 15, 354.80],
        faixa4: [3751.06, 4664.68, 22.5, 636.13],
        faixa5: [4664.69, , 27.5, 869.36],
        deduçãoPorDependente: 189.59
    }
    
    // Constantes que serão necessárias para o calculo do IRRF.
    var irrfDescontado
    const valorInicial = 0
    const valorFinal = 1
    const alíquota = 2
    const descontoMáximoAtéFaixa = 3
    const parcelaDedutível = 3
    //Calculo pra achar o valor a ser descontado no IRRF.
    baseCalculo = baseCalculo - qtdDepentes

    if( baseCalculo <= irrf.faixa1[valorFinal])
    {
        irrfDescontado = ((baseCalculo * irrf.faixa1[alíquota]) / 100) - irrf.faixa1[parcelaDedutível]
    }
    else if( baseCalculo <= irrf.faixa2[valorFinal])
    {
        irrfDescontado = ((baseCalculo * irrf.faixa2[alíquota]) / 100) - irrf.faixa2[parcelaDedutível]
    }
    else if( baseCalculo <= irrf.faixa3[valorFinal])
    {
        irrfDescontado = ((baseCalculo * irrf.faixa3[alíquota]) / 100) - irrf.faixa3[parcelaDedutível]
    }
    else if( baseCalculo <= irrf.faixa4[valorFinal])
    {
        irrfDescontado = ((baseCalculo * irrf.faixa4[alíquota]) / 100) - irrf.faixa4[parcelaDedutível]
    }
    else if( baseCalculo <= irrf.faixa5[valorFinal])
    {
        irrfDescontado = ((baseCalculo * irrf.faixa5[alíquota]) / 100) - irrf.faixa5[parcelaDedutível]
    }
    return irrfDescontado
}
console.log(irrf(2731, 2))