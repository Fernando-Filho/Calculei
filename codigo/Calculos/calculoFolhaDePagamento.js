    function calcularFolhaPagamento()
    {
        // variaveis que serão pegas do cliente.
        const salarioContratual = Number(document.getElementById('salarioContratual').value)
        const numeroDependentes = Number(document.getElementById('numeroDependentes').value)

        const outrosProventos = Number(document.getElementById('outrosProventos').value)
        const proventoBaseCalculo = document.getElementById('proventoBaseCalculo').checked

        const outrosDescontos = Number(document.getElementById('outrosDescontos').value)
        const descontosBaseCalculo = document.getElementById('descontosBaseCalculo').checked

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

        //Valores finais que serão apresentados.
        let salarioLíquido = salarioContratual - (inssValor + irrfValor)
        salarioLíquido = salarioLíquido.toFixed(2)
        fgtsValor = fgtsValor.toFixed(2)
        inssValor = inssValor.toFixed(2)
        irrfValor = irrfValor.toFixed(2)

    //Escrevendo no HTML.
    resposta.innerHTML = ""
    resposta.innerHTML = (`De acordo com a base de calculo fornecida, o empregado tera um valor bruto de R$${baseCalculo}<br>
                        Seu FGTS seria de R$${fgtsValor}<br>
                        Seu INSS seria de R$${inssValor}<br>
                        Seu IRRF seria de R$${irrfValor}<br>
                        Por fim, o valor líquido a receber seria de R$${salarioLíquido}`)
    }
