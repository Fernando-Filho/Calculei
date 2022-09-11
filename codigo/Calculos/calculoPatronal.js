    function calcularFolhaPagamento()
    {
        // variáveis que serão pegas do cliente.
        const salárioContratual = Number(document.getElementById('salárioContratual').value)
        const númeroDependentes = Number(document.getElementById('númeroDependentes').value)

        const outrosProventos = Number(document.getElementById('outrosProventos').value)
        const proventoBaseCalculo = document.getElementById('proventoBaseCalculo').checked

        const outrosDescontos = Number(document.getElementById('outrosDescontos').value)
        const descontosBaseCalculo = document.getElementById('descontosBaseCalculo').checked

        const aliquotaPatronal = Number(document.getElementById('patronal').value)
        const aliquotaRat = Number(document.getElementById('rat').value)
        const aliquotaFap = Number(document.getElementById('fap').value)
        const aliquoptaOutrasEntidades = Number(document.getElementById('outrasEntidades').value)

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
        let patronalValor = patronal(baseCalculo, aliquotaPatronal)
        let gilRatValor = ratfap(baseCalculo, aliquotaRat, aliquotaFap)
        let outrasEntidadesValor = outrasEntidades(baseCalculo, aliquoptaOutrasEntidades)

        //Valores finais que serão apresentados.
        let patronalFinal = patronalValor + gilRatValor
        outrasEntidadesValor = outrasEntidadesValor.toFixed(2)
        // //Escrevendo no HTML.
        // resposta.innerHTML = ""
        // resposta.innerHTML = (`O empregado terá um salário contratual de R$${salárioContratual},<br> tendo o salário líquido de R$${salárioLíquido}, por fim tendo.<br><br><br>
        // FGTS.............INSS.............IRRF<br><br> 
        // R$${fgtsValor}.....R$${inssValor}.....R$${irrfValor}`)
    }
