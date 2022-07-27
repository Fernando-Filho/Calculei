import { fgts } from "./fgts.js"
import { inss } from "./inss.js"
import { irrf } from "./irrf.js"

    function calcular()
    {
        // variáveis que serão pegas do cliente.
        const salárioContratual = document.getElementById('salárioContratual').value
        const númeroDependentes = document.getElementById('númeroDependentes').value
        const outrosProventos = 0
        const outrosDescontos = 0
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
        let irrfValor = irrf(baseCalculo, númeroDependentes)

        //Valores finais que serão apresentados.
        salárioLíquido = salárioContratual - (inssValor + irrfValor)
        salárioLíquido = salárioLíquido.toFixed(2)
        fgtsValor = fgtsValor.toFixed(2)
        inssValor = inssValor.toFixed(2)
        irrfValor = irrfValor.toFixed(2)

        //Escrevendo no HTML.
        resposta.innerHTML = ""
        resposta.innerHTML = (`O empregado terá um salário contratual de R$${salárioContratual}, tendo o salário líquido de R$${salárioLíquido}, por fim tendo um FGTS/INSS/IRRF recolhido respectivamente no valor de R$${fgtsValor} R$${inssValor} R$${irrfValor}`)

        return console.log('deu certo')

    }
