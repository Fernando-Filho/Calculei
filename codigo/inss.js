export function inss (baseCalculo)
{
    //Tabela de INSS.
    const inss =
    {
        faixa1: [0, 1212, 7.5, 90.90],
        faixa2: [1212.01, 2427.35, 9, 200.28],
        faixa3: [2427.36, 3641.03, 12, 345.92],
        faixa4: [3641.04, 7.087, 14, 828.39]
    }
    // Constantes que serão necessárias para o calculo do INSS.
    var innsDescontado
    const valorInicial = 0
    const valorFinal = 1
    const alíquota = 2
    const descontoMáximoAtéFaixa = 3
    //Calculo pra achar o valor a ser descontado no INSS.
    if(baseCalculo <= inss.faixa1[valorFinal])
    {
        innsDescontado = ((baseCalculo * inss.faixa1[alíquota]) / 100)
    }
    else if(baseCalculo <= inss.faixa2[valorFinal])
    {
        innsDescontado =  ((((baseCalculo - inss.faixa1[valorFinal]) * inss.faixa2[alíquota]) / 100) + inss.faixa1[descontoMáximoAtéFaixa])
    }
    else if(baseCalculo <= inss.faixa3[valorFinal])
    {
        innsDescontado =  ((((baseCalculo - inss.faixa2[valorFinal]) * inss.faixa3[alíquota]) / 100) + inss.faixa2[descontoMáximoAtéFaixa])
    }
    else(baseCalculo <= inss.faixa4[valorFinal])
    {
        innsDescontado =  ((((baseCalculo - inss.faixa3[valorFinal]) * inss.faixa4[alíquota]) / 100) + inss.faixa3[descontoMáximoAtéFaixa])
    }
    else if(baseCalculo >= inss.faixa4[valorFinal])
    {
        innsDescontado = inns.faixa4[descontoMáximoAtéFaixa]
    }
    return innsDescontado
}
