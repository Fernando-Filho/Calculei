function verificadorAliquotaRat( aliquotaRat ) {
    if (aliquotaRat >= 0) {
        return true        
    } else {
        window.alert('Por favor, coloque dados válidos abaixo. 1% - 2% - 3%. Caso não tenha RAT, basta deixar em branco.')
        return false
    }
}