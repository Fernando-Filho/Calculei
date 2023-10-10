import Resposta from "../Resposta/Index"

const main = ({provento, fgts, inss, irrf, openRespsota}) => {

    return(
        <Resposta
                    provento={provento}
                    fgts={fgts}
                    inss={inss}
                    irrf={irrf}
                    openRespsota={openRespsota}>
        </Resposta>
    )
}

export default main