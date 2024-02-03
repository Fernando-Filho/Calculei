const INSS = (baseCalculo) =>{
    const inss ={
        faixa_1:        [0, 1412, 7.5, 105.9],
        faixa_2: [1412.01, 2666.68, 9, 218.82],
        faixa_3: [2666.69, 4000.03, 12, 378.82],
        faixa_4: [4000.04, 7786.02, 14, 908.86]
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