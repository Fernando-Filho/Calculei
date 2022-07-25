import { inss } from "./inss.js";
import { irrf } from "./irrf.js";
import { fgts } from "./fgts.js";

// // variáveis que serão pegas do cliente.
// const salárioContratual = document.getElementById('salárioContratual').value
// const númeroDependentes = document.getElementById('númeroDependentes').value
// let resposta = document.getElementById('resposta')

//teste
const salárioContratual = 2500
const númeroDependentes = 2


// Constantes que serão necessárias para o calculo da folha de pagamento.
let salárioLíquido
let innsDescontado = inss(salárioContratual)
let irrfDescontado = irrf(salárioContratual, númeroDependentes)
let fgtsValor = fgts(salárioContratual)


//Valores finais que serão apresentados.
salárioLíquido = salárioContratual - (innsDescontado + irrfDescontado)
salárioLíquido = salárioLíquido.toFixed(2)
fgtsValor = fgtsValor.toFixed(2)

// //Escrevendo no HTML.
// resposta.innerHTML = ""
// resposta.innerHTML = (`O empregado terá um salário contratual de R$${salárioContratual}, tendo o salário líquido de R$${salárioLíquido}, por fim tendo direito a um FGTS recolhido no valor de R$${fgtsValor}`)
console.log(`salárioLíquido é R$${salárioLíquido} - o Valor do FGTS é R$${fgtsValor} - o Valor do INSS é R$${innsDescontado} - o Valor do IRRF é R$${irrfDescontado}` )