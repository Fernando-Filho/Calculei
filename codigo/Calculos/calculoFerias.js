function calcularFerias(baseCalculo, numeroDependentes)
{   
    baseCalculo = ( baseCalculo / 3 ) + baseCalculo

    // Constantes que serão necessarias para o calculo da folha de pagamento.
    let fgtsValor = fgts(baseCalculo)
    let inssValor = inss(baseCalculo)
    let irrfValor = irrf((baseCalculo - inssValor), numeroDependentes)

    //Valores finais que serão apresentados.
    let salarioLíquido = baseCalculo - (inssValor + irrfValor)
    salarioLíquido = salarioLíquido.toFixed(2)
    fgtsValor = fgtsValor.toFixed(2)
    inssValor = inssValor.toFixed(2)
    irrfValor = irrfValor.toFixed(2)


    //Escrevendo no HTML.
    let resposta = document.getElementById('resposta')
    resposta.innerHTML = ""
    resposta.innerHTML = (`De acordo com a base de calculo fornecida, o empregado tera um valor bruto de R$${baseCalculo}<br>
                        Seu FGTS seria de R$${fgtsValor}<br>
                        Seu INSS seria de R$${inssValor}<br>
                        Seu IRRF seria de R$${irrfValor}<br>
                        Por fim, o valor líquido a receber seria de R$${salarioLíquido}`)

}