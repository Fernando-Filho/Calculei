const INSS = (baseCalculo) =>{
    const inss ={
        faixa_1:        [0, 1320, 7.5, 99.00],
        faixa_2: [1320.01, 2571.29, 9, 211.62],
        faixa_3: [2571.3, 3856.94, 12, 365.89],
        faixa_4: [3856.95, 7507.49, 14, 876.97]
    }
    // Constantes que serão necessárias para o calculo do INSS.
    let inssDescontado = [];
    const valorInicial = 0
    const valorFinal = 1
    const aliquota = 2
    const descontoMáximoAtéFaixa = 3

    if (baseCalculo >= inss.faixa_4[valorFinal]) {
        inssDescontado =  [`${inss.faixa_4[aliquota]}%`, inss.faixa_4[descontoMáximoAtéFaixa]]
    }else if(baseCalculo >= inss.faixa_4[valorInicial]){
        inssDescontado =  [`${inss.faixa_4[aliquota]}%`, ((((baseCalculo - inss.faixa_3[valorFinal]) * inss.faixa_4[aliquota]) / 100) + inss.faixa_3[descontoMáximoAtéFaixa])]
    }else if(baseCalculo >= inss.faixa_3[valorInicial]){
        inssDescontado =  [`${inss.faixa_3[aliquota]}%`, ((((baseCalculo - inss.faixa_2[valorFinal]) * inss.faixa_3[aliquota]) / 100) + inss.faixa_2[descontoMáximoAtéFaixa])]
    }else if(baseCalculo >= inss.faixa_2[valorInicial]){
        inssDescontado =  [`${inss.faixa_2[aliquota]}%`, ((((baseCalculo - inss.faixa_1[valorFinal]) * inss.faixa_2[aliquota]) / 100) + inss.faixa_1[descontoMáximoAtéFaixa])]
    }else if(baseCalculo >= inss.faixa_1[valorInicial]){
        inssDescontado = [`${inss.faixa_1[aliquota]}%`, ((baseCalculo * inss.faixa_1[aliquota]) / 100)]
    }

    return inssDescontado
}

export default INSS