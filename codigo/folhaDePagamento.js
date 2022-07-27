import { fgts } from "./fgts.js"
import { inss } from "./inss.js"
import { irrf } from "./irrf.js"

// // variáveis que serão pegas do cliente.
// const salárioContratual = document.getElementById('salárioContratual').value
// const númeroDependentes = document.getElementById('númeroDependentes').value
// let resposta = document.getElementById('resposta')

//teste
const salárioContratual = 2500
const númeroDependentes = 2
const outrosProventos = 0
const outrosDescontos = 0
let baseCalculo = salárioContratual

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
let salárioLíquido
let fgtsValor = fgts(baseCalculo)
let inssValor = inss(baseCalculo)
let irrfValor = irrf(baseCalculo, númeroDependentes)

//Valores finais que serão apresentados.
salárioLíquido = salárioContratual - (inssValor + irrfValor)
salárioLíquido = salárioLíquido.toFixed(2)
fgtsValor = fgtsValor.toFixed(2)
inssValor = inssValor.toFixed(2)
irrfValor = irrfValor.toFixed(2)

// //Escrevendo no HTML.
// resposta.innerHTML = ""
// resposta.innerHTML = (`O empregado terá um salário contratual de R$${salárioContratual}, tendo o salário líquido de R$${salárioLíquido}, por fim tendo direito a um FGTS recolhido no valor de R$${fgtsValor}`)
console.log(`salárioLíquido é R$${salárioLíquido} - o Valor do FGTS é R$${fgtsValor} - o Valor do INSS é R$${inssValor} - o Valor do IRRF é R$${irrfValor}` )