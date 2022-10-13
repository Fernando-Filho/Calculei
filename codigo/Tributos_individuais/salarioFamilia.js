function salarioFamilia(baseCalculo, numeroDependentes) {
    const valorPorDependente = 56.47
    const tetoSalarioFamilia = 1655.98

    if (baseCalculo <= tetoSalarioFamilia) {
        let valorSalarioFamilia = valorPorDependente * numeroDependentes
        return valorSalarioFamilia
    }
    else{ return 0 }
}