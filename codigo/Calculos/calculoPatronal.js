function calcularpatronal(baseCalculo, aliquotaPatronal, aliquotaRat, aliquotaFap, aliquotaOutrasEntidades)
{
    // Verificando está tudo certo com os dados.
    const verificarSalario = verificadorDeSalario( baseCalculo )
    if (!verificarSalario) { return }

    const verificarAliquotaPatronal = verificadorAliquotaPatronal( aliquotaPatronal )
    if (!verificarAliquotaPatronal) { return }

    const verificarAliquotaRat = verificadorAliquotaRat( aliquotaRat )
    if (!verificarAliquotaRat) { return }

    const verificarAliquotaFap = verificadorAliquotaFap( aliquotaFap )
    if (!verificarAliquotaFap) { return }

    const verificarAliquotaOutrasEntidades = verificadorAliquotaOutrasEntidades( aliquotaOutrasEntidades )
    if (!verificarAliquotaOutrasEntidades) { return }
    
    // Constantes que serão necessarias para o calculo da folha de pagamento.
    let valorINSS = inss(baseCalculo)
    let valorPatronal = patronal(baseCalculo, aliquotaPatronal)
    let valorGilRat = ratfap(baseCalculo, aliquotaRat, aliquotaFap)
    let valorOutrasEntidades = outrasEntidades(baseCalculo, aliquotaOutrasEntidades)

    //Valores finais que serão apresentados.
    let valorGPS = valorPatronal + valorGilRat
    valorOutrasEntidades = valorOutrasEntidades.toFixed(2)
    // //Escrevendo no HTML.
    let resposta = document.getElementById('resposta')
    resposta.innerHTML = ""
    resposta.innerHTML = (`De acordo com a base de calculo fornecida, o empregado tera um valor bruto de R$${aliquotaPatronal}<br>
                            Seu FGTS seria de R$${valorGPS}<br>
                            Seu INSS seria de R$${valorGilRat}<br>
                            Seu IRRF seria de R$${valorOutrasEntidades}<br>`)
}
