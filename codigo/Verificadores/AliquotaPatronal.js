function verificadorAliquotaPatronal( aliquotaPatronal ) {
    if (aliquotaPatronal >= 0) {
        return true        
    } else {
        window.alert('Por favor, preencha o campo do patronal corretamente. Caso não seja obrigado, pode deixar em branco!')
        return false
    }
}