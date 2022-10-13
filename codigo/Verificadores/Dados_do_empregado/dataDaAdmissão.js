function verificadorAdmissao( dataAdmissao ) {
    if (dataAdmissao != null) {
        return true        
    } else {
        window.alert('Para o melhor calculo do 13º salário, preencha a data de admissão do funcionário')
        return false
    }
}