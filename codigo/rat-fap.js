function ratfap( baseCalculo, rat, fap )
{
    const aliquotaGILRAT = rat * fap
    let valorGilRat = ((baseCalculo * aliquotaGILRAT) / 100)

    return valorGilRat
}