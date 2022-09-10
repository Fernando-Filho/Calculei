    function calcularFolhaPagamento()
    {
        // variáveis que serão pegas do cliente.
        const salárioContratual = Number(document.getElementById('salárioContratual').value)
        const númeroDependentes = Number(document.getElementById('númeroDependentes').value)

        const outrosProventos = Number(document.getElementById('outrosProventos').value)
        const proventoBaseCalculo = document.getElementById('proventoBaseCalculo').checked

        const outrosDescontos = Number(document.getElementById('outrosDescontos').value)
        const descontosBaseCalculo = document.getElementById('descontosBaseCalculo').checked

        let baseCalculo = salárioContratual
        let resposta = document.getElementById('resposta')

        if(proventoBaseCalculo == true && descontosBaseCalculo == true) { baseCalculo = baseCalculo + (outrosProventos - outrosDescontos) }

        else if(proventoBaseCalculo == true && descontosBaseCalculo == false) { baseCalculo = baseCalculo + outrosProventos }

        else if(proventoBaseCalculo == false && descontosBaseCalculo == true) { baseCalculo = baseCalculo - outrosDescontos }

        else{}
        
        // Constantes que serão necessárias para o calculo da folha de pagamento.
        let fgtsValor = fgts(baseCalculo)
        let inssValor = inss(baseCalculo)
        let irrfValor = irrf((baseCalculo - inssValor), númeroDependentes)

        //Valores finais que serão apresentados.
        let salárioLíquido = salárioContratual - (inssValor + irrfValor)
        salárioLíquido = salárioLíquido.toFixed(2)
        fgtsValor = fgtsValor.toFixed(2)
        inssValor = inssValor.toFixed(2)
        irrfValor = irrfValor.toFixed(2)

        //Escrevendo no HTML.
        resposta.innerHTML = ""
        resposta.innerHTML = (`O empregado terá um salário contratual de R$${salárioContratual},<br> tendo o salário líquido de R$${salárioLíquido}, por fim tendo.<br><br><br>
        FGTS.............INSS.............IRRF<br><br> 
        R$${fgtsValor}.....R$${inssValor}.....R$${irrfValor}`)
    }
