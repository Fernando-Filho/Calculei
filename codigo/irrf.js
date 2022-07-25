function irrf (baseCalculo, qtdDepentes)
{
    //Tabela de IRRF.
    const irrf =
    {
        faixa1: [1903.98, 7.5, 142.8],
        faixa2: [2826.65, 15, 354.80],
        faixa3: [3751.05, 22.5, 636.13],
        faixa4: [4664.68, 27.5, 869.36],
        qtdDepentes: 189.59
    }
    
    // Constantes que serão necessárias para o calculo do IRRF.
    let irrfDescontado
    let deduçãoDosDependentes = qtdDepentes * qtdDepentes
    const teto = 0
    const alíquota = 1
    const parcelaDedutível = 2
    //Calculo pra achar o valor a ser descontado no IRRF.
    baseCalculo = baseCalculo - deduçãoDosDependentes

    if (baseCalculo >= irrf.faixa4[teto])
    {
        irrfDescontado = ((baseCalculo * irrf.faixa4[alíquota]) / 100) - irrf.faixa4[parcelaDedutível]
    }
    else if( baseCalculo >= irrf.faixa3[teto])
    {
        irrfDescontado = ((baseCalculo * irrf.faixa3[alíquota]) / 100) - irrf.faixa3[parcelaDedutível]
    }
    else if( baseCalculo >= irrf.faixa2[teto])
    {
        irrfDescontado = ((baseCalculo * irrf.faixa2[alíquota]) / 100) - irrf.faixa2[parcelaDedutível]
    }
    else if( baseCalculo >= irrf.faixa1[teto])
    {
        irrfDescontado = ((baseCalculo * irrf.faixa1[alíquota]) / 100) - irrf.faixa1[parcelaDedutível]
    }
    else { irrfDescontado = 0 }

    return irrfDescontado
}
console.log(irrf(2731, 2))
