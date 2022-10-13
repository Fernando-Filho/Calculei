function calcular(event)
{   
    // variaveis que serão pegas do cliente.

    const salarioContratual = getByID('salarioContratual')
    const numeroDependentes = getByID('numeroDependentes')
    const dataAdmissao = document.getElementById('dataAdmissao').value
    let datateste = new Date('2022-12-32')
    console.log(dataAdmissao)
    console.log(datateste)
    const outrosProventos = getByID('outrosProventos')
    const proventoBaseCalculo = document.getElementById('proventoBaseCalculo').checked

    const outrosDescontos = getByID('outrosDescontos')
    const descontosBaseCalculo = document.getElementById('descontosBaseCalculo').checked

    const aliquotaPatronal = getByID('aliquotaPatronal')
    const aliquotaRat = getByID('aliquotaRat')
    const aliquotaFap = getByID('aliquotaFap')
    const aliquotaOutrasEntidades = getByID('aliquotaOutrasEntidades')

    let baseCalculo = salarioContratual

    if (proventoBaseCalculo == true && descontosBaseCalculo == true) { baseCalculo = baseCalculo + (outrosProventos - outrosDescontos) }

    else if (proventoBaseCalculo == true && descontosBaseCalculo == false) { baseCalculo = baseCalculo + outrosProventos }

    else if (proventoBaseCalculo == false && descontosBaseCalculo == true) { baseCalculo = baseCalculo - outrosDescontos }

    switch (event) {
        case 'pagamento':
            document.getElementById('calculoFolhaDePagamento').addEventListener("click", calcularFolhaPagamento(baseCalculo, numeroDependentes))
            break;
        case 'ferias':
            document.getElementById('calculoFerias').addEventListener("click", calcularFerias(baseCalculo, numeroDependentes))
            break;
        case '13':
            document.getElementById('calculoDecimoTerceiro').addEventListener("click", calcularDecimoTerceiro(baseCalculo, numeroDependentes, dataAdmissao))
            break;
        case 'patronal':
            document.getElementById('calculoPatronal').addEventListener("click", calcularpatronal(baseCalculo, numeroDependentes, aliquotaPatronal, aliquotaRat, aliquotaFap, aliquotaOutrasEntidades))
            break;
    }
}