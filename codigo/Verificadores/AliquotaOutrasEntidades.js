function verificadorAliquotaOutrasEntidades( aliquotaOutrasEntidades ) {
    if (aliquotaOutrasEntidades >= 0) {
        return true        
    } else {
        window.alert('Por favor, coloque dados válidos abaixo. Caso não seja obrigado, pode deixar em branco!')
        return false
    }
}