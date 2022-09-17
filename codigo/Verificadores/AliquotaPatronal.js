function verificadorAliquotaPatronal( aliquotaPatronal ) {
    if (aliquotaPatronal >= 0) {
        return true        
    } else {
        window.alert('Por favor, coloque dados válidos abaixo. Caso não tenha Patronal, basta deixar em branco.')
        return false
    }
}