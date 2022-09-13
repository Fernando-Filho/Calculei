function calcular() {
    // variaveis que serão pegas do cliente.
    const salarioContratual = Number(document.getElementById('salarioContratual').value)
    const numeroDependentes = Number(document.getElementById('numeroDependentes').value)

    const outrosProventos = Number(document.getElementById('outrosProventos').value)
    const proventoBaseCalculo = document.getElementById('proventoBaseCalculo').checked

    const outrosDescontos = Number(document.getElementById('outrosDescontos').value)
    const descontosBaseCalculo = document.getElementById('descontosBaseCalculo').checked

    const aliquotaPatronal = Number(document.getElementById('patronal').value)
    const aliquotaRat = Number(document.getElementById('rat').value)
    const aliquotaFap = Number(document.getElementById('fap').value)
    const aliquoptaOutrasEntidades = Number(document.getElementById('outrasEntidades').value)

    let baseCalculo = salarioContratual

    if(proventoBaseCalculo == true && descontosBaseCalculo == true) { baseCalculo = baseCalculo + (outrosProventos - outrosDescontos) }

    else if(proventoBaseCalculo == true && descontosBaseCalculo == false) { baseCalculo = baseCalculo + outrosProventos }

    else if(proventoBaseCalculo == false && descontosBaseCalculo == true) { baseCalculo = baseCalculo - outrosDescontos }

    calcularFolhaPagamento (baseCalculo, numeroDependentes)
    calcularFerias (baseCalculo, numeroDependentes)
    calcularDecimoTerceiro (baseCalculo, numeroDependentes)
    calcularpatronal (baseCalculo, aliquotaPatronal, aliquotaRat, aliquotaFap, aliquoptaOutrasEntidades)
    
}