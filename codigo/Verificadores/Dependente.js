function verificadorDeDependentes( numeroDependentes ) {
    if (numeroDependentes >= 0) {
        return true        
    } else {
        window.alert('Por favor, coloque dados válidos abaixo. Ninguém tem quantidades de dependentes negativos.')
        return false
    }
}