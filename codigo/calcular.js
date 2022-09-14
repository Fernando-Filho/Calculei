function calcular() {
    // variaveis que serão pegas do cliente.
    const salarioContratual = Number(document.getElementById('salarioContratual').value)
    const numeroDependentes = Number(document.getElementById('numeroDependentes').value)

    const outrosProventos = Number(document.getElementById('outrosProventos').value)
    const proventoBaseCalculo = document.getElementById('proventoBaseCalculo').checked

    const outrosDescontos = Number(document.getElementById('outrosDescontos').value)
    const descontosBaseCalculo = document.getElementById('descontosBaseCalculo').checked

    const aliquotaPatronal = Number(document.getElementById('aliquotaPatronal').value)
    const aliquotaRat = Number(document.getElementById('aliquotaRat').value)
    const aliquotaFap = Number(document.getElementById('aliquotaFap').value)
    const aliquotaOutrasEntidades = Number(document.getElementById('aliquotaOutrasEntidades').value)

    let baseCalculo = salarioContratual

    if(proventoBaseCalculo == true && descontosBaseCalculo == true) { baseCalculo = baseCalculo + (outrosProventos - outrosDescontos) }

    else if(proventoBaseCalculo == true && descontosBaseCalculo == false) { baseCalculo = baseCalculo + outrosProventos }

    else if(proventoBaseCalculo == false && descontosBaseCalculo == true) { baseCalculo = baseCalculo - outrosDescontos }


    var x = document.getElementById('calculoFolhaDePagamento').addEventListener("click", calcularFolhaPagamento(baseCalculo, numeroDependentes))
    var y = document.getElementById('calculoFerias').addEventListener("click", calcularFerias(baseCalculo, numeroDependentes))
    document.getElementById('calculoDecimoTerceiro').addEventListener("click", calcularDecimoTerceiro(baseCalculo, numeroDependentes))
    document.getElementById('calculoPatronal').addEventListener("click", calcularpatronal(baseCalculo, aliquotaPatronal, aliquotaRat, aliquotaFap, aliquotaOutrasEntidades))
}

document.getElementsByClassName('calcular').addEventListener("click", calcular)