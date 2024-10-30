import INSS from './inss'

const IRRF = (baseCalculo, qtdDependentes) =>{
    const irrf = {
        faixa_1: [2259,20, 7.5, 169.44],
        faixa_2: [2826.65, 15, 381.44],
        faixa_3: [3751.05, 22.5, 662.77],
        faixa_4: [4664.68, 27.5, 896.00],
        deducaoPorDependentes: 189.59,
        descontoSimplificado: 528.00
    }

    const numeroDependentes = qtdDependentes == undefined ? 0 :qtdDependentes

    const inss = INSS(baseCalculo)

    const deducaoSimplificada = irrf.descontoSimplificado;
    const deducaoNormal = (inss[1] + (numeroDependentes * (irrf.deducaoPorDependentes)));
    
    const baseCalculoIRRF = deducaoSimplificada >= deducaoNormal ? (baseCalculo - deducaoSimplificada)
                                                                 : (baseCalculo - deducaoNormal);



    const teto = 0;
    const aliquota = 1;
    const parcelaDedutível = 2;



    console.log(baseCalculo)
    console.log(baseCalculoIRRF)

    if(baseCalculoIRRF < irrf.faixa_1[teto]) {
        return (
            ["0%", 0]
        )
    }else if (baseCalculoIRRF < irrf.faixa_2[teto]){
        return (
            [`${irrf.faixa_1[1]}%`, ((baseCalculoIRRF * irrf.faixa_1[aliquota]) / 100) - irrf.faixa_1[parcelaDedutível]]
        )
    }else if (baseCalculoIRRF < irrf.faixa_3[teto]){
        return (
            [`${irrf.faixa_2[aliquota]}%`, ((baseCalculoIRRF * irrf.faixa_2[aliquota]) / 100) - irrf.faixa_2[parcelaDedutível]]
        )
    }else if (baseCalculoIRRF < irrf.faixa_4[teto]){
        return (
            [`${irrf.faixa_3[aliquota]}%`, ((baseCalculoIRRF * irrf.faixa_3[aliquota]) / 100) - irrf.faixa_3[parcelaDedutível]]
        )
    }else{
        return (
            [`${irrf.faixa_4[aliquota]}%`, ((baseCalculoIRRF * irrf.faixa_4[aliquota]) / 100) - irrf.faixa_4[parcelaDedutível]]
        )
    }







    // console.log(irrfDescontado)

    // return irrfDescontado
}

export default IRRF
