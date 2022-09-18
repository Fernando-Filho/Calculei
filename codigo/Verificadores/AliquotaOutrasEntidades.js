function verificadorAliquotaOutrasEntidades( aliquotaOutrasEntidades ) {
    if (aliquotaOutrasEntidades >= 0) {
        return true        
    } else {
        window.alert('Por favor, preencha o campo de outras entidades corretamente. Caso não seja obrigado, pode deixar em branco!')
        return false
    }
}