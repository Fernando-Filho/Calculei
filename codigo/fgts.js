const aliquotaFGTS = 8
var valorFGTS

export function fgts ( baseCalculo )
{
    valorFGTS = ((baseCalculo * aliquotaFGTS) / 100)
}