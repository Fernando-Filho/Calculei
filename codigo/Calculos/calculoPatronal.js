function calcularpatronal(baseCalculo, aliquotaPatronal, aliquotaRat, aliquotaFap, aliquoptaOutrasEntidades)
{

    
    // Constantes que serão necessarias para o calculo da folha de pagamento.
    let inssValor = inss(baseCalculo)
    let patronalValor = patronal(baseCalculo, aliquotaPatronal)
    let gilRatValor = ratfap(baseCalculo, aliquotaRat, aliquotaFap)
    let outrasEntidadesValor = outrasEntidades(baseCalculo, aliquoptaOutrasEntidades)

    //Valores finais que serão apresentados.
    let patronalFinal = patronalValor + gilRatValor
    outrasEntidadesValor = outrasEntidadesValor.toFixed(2)
    // //Escrevendo no HTML.
    let resposta = document.getElementById('resposta')
    resposta.innerHTML = ""
    resposta.innerHTML = (`De acordo com a base de calculo fornecida, o empregado tera um valor bruto de R$${aliquotaPatronal}<br>
                            Seu FGTS seria de R$${patronalValor}<br>
                            Seu INSS seria de R$${gilRatValor}<br>
                            Seu IRRF seria de R$${outrasEntidadesValor}<br>`)
}
