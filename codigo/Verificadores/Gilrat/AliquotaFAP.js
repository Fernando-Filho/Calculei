function verificadorAliquotaFap( aliquotaFap ) {
    if (aliquotaFap >= 0.5 || aliquotaFap <= 2) {
        return true        
    } else {
        window.alert('Por favor, coloque dados válidos abaixo. De 0,5% até 2%!! Caso sua empresa seja do Simples Nacional, basta colocar FAP: 1%')
        return false
    }
}