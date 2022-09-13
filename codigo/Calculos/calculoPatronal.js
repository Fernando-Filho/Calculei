function calcularpatronal()
{
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
    let resposta = document.getElementById('resposta')

    if(proventoBaseCalculo == true && descontosBaseCalculo == true) { baseCalculo = baseCalculo + (outrosProventos - outrosDescontos) }

    else if(proventoBaseCalculo == true && descontosBaseCalculo == false) { baseCalculo = baseCalculo + outrosProventos }

    else if(proventoBaseCalculo == false && descontosBaseCalculo == true) { baseCalculo = baseCalculo - outrosDescontos }

    else{}
    
    // Constantes que serão necessarias para o calculo da folha de pagamento.
    let fgtsValor = fgts(baseCalculo)
    let inssValor = inss(baseCalculo)
    let irrfValor = irrf((baseCalculo - inssValor), numeroDependentes)
    let patronalValor = patronal(baseCalculo, aliquotaPatronal)
    let gilRatValor = ratfap(baseCalculo, aliquotaRat, aliquotaFap)
    let outrasEntidadesValor = outrasEntidades(baseCalculo, aliquoptaOutrasEntidades)

    //Valores finais que serão apresentados.
    let patronalFinal = patronalValor + gilRatValor
    outrasEntidadesValor = outrasEntidadesValor.toFixed(2)
    // //Escrevendo no HTML.
    resposta.innerHTML = (`De acordo com a base de calculo fornecida, o empregado tera um valor bruto de R$${aliquotaPatronal}<br>
                            Seu FGTS seria de R$${patronalValor}<br>
                            Seu INSS seria de R$${gilRatValor}<br>
                            Seu IRRF seria de R$${outrasEntidadesValor}<br>`)
}
