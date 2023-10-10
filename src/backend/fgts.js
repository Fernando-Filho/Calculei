const FGTS = (baseCalculo) =>{
    const aliquotaFGTS = 8
    return (
        [aliquotaFGTS, ((baseCalculo * aliquotaFGTS)/100)]
    )
}

export default FGTS