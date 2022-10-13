function verificadorDeSalario( baseCalculo ) {
    if (baseCalculo >= 1212) {
        return true        
    } else {
        window.alert('Por favor, coloque dados válidos abaixo. O Salário mínimo é R$1.212,00')
        return false
    }
}