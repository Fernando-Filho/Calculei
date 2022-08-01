function calcularFerias()
{
    // variáveis que serão pegas do cliente.
    const composicaoFerias = Number(document.getElementById('composicaoFerias').value)
    const númeroDependentes = Number(document.getElementById('númeroDependentes').value)

    let baseCalculo = (composicaoFerias / 3) + composicaoFerias
    let resposta = document.getElementById('resposta')
    
    // Constantes que serão necessárias para o calculo da folha de pagamento.
    let fgtsValor = fgts(baseCalculo)
    let inssValor = inss(baseCalculo)
    let irrfValor = irrf((baseCalculo - inssValor), númeroDependentes)

    //Valores finais que serão apresentados.
    let salárioLíquido = baseCalculo - (inssValor + irrfValor)
    salárioLíquido = salárioLíquido.toFixed(2)
    baseCalculo = baseCalculo.toFixed(2)
    fgtsValor = fgtsValor.toFixed(2)
    inssValor = inssValor.toFixed(2)
    irrfValor = irrfValor.toFixed(2)

    //Escrevendo no HTML.
    resposta.innerHTML = ""
    resposta.innerHTML = (`De acordo com a base de calculo fornecida, o empregado terá um valor bruto de R$${baseCalculo}<br>
                        Seu FGTS seria de R$${fgtsValor}<br>
                        Seu INSS seria de R$${inssValor}<br>
                        Seu IRRF seria de R$${irrfValor}<br>
                        Por fim, o valor líquido a receber seria de R$${salárioLíquido}`)

}