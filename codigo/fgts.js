function fgts ( baseCalculo )
{
    const aliquotaFGTS = 8
    let valorFGTS
    valorFGTS = ((baseCalculo * aliquotaFGTS) / 100)
    return valorFGTS
}
console.log(fgts(1500)
