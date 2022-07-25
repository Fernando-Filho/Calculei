export default function fgts( baseCalculo )
{
    const aliquotaFGTS = 8
    let valorFGTS
    valorFGTS = ((baseCalculo * aliquotaFGTS) / 100)
    return valorFGTS
}
