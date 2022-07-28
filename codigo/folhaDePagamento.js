    function calcular()
    {
        // variáveis que serão pegas do cliente.
        const salárioContratual = document.getElementById('salárioContratual').value
        const númeroDependentes = Number(document.getElementById('númeroDependentes').value)
        const outrosProventos = document.getElementById('outrosProventos').value
        const outrosDescontos = document.getElementById('outrosDescontos').value
        let baseCalculo = salárioContratual
        let salárioLíquido
        let resposta = document.getElementById('resposta')

        // if ( checkbox(ID...Provento == true ) && checkbox(ID...Desconto == true) )
        // {
        //     baseCalculo = salárioContratual + outrosProventos - outrosDescontos
        // }
        // else if ( checkbox(ID...Provento == true ) && checkbox(ID...Desconto == false) )
        // {
        //     baseCalculo = salárioContratual + outrosProventos
        // }
        // else if ( checkbox(ID...Provento == false ) && checkbox(ID...Desconto == true) )
        // {
        //     baseCalculo = salárioContratual + outrosDescontos
        // }
        // else()
        // {
        //     baseCalculo = salárioContratual
        // }

        // Constantes que serão necessárias para o calculo da folha de pagamento.
        let fgtsValor = fgts(baseCalculo)
        let inssValor = inss(baseCalculo)
        let irrfValor = irrf((baseCalculo - inssValor), númeroDependentes)
        console.log(irrfValor)

        //Valores finais que serão apresentados.
        salárioLíquido = salárioContratual - (inssValor + irrfValor)
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
