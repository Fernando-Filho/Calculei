import { RespostaContainer, LinhasResposta, Posicao } from './style'

const Resposta = ({provento, fgts, inss, irrf, openRespsota}) => {

    const liquido = (provento - (inss[1] + irrf[1]))
  
    function arrendondar(valor) {
        return valor.toFixed(2)
    }
    
    
    if(openRespsota === true) {
        
        return (
            <RespostaContainer>
                <LinhasResposta $Provento>
                    <Posicao>PROVENTO</Posicao>
                    <Posicao>---</Posicao>
                    <Posicao>R${arrendondar(provento)}</Posicao>
                </LinhasResposta>
                <LinhasResposta $FGTS>
                    <Posicao>FGTS</Posicao>
                    <Posicao>{fgts[0]}%</Posicao>
                    <Posicao>R${arrendondar(fgts[1])}</Posicao>
                </LinhasResposta>

                <LinhasResposta $Desconto>
                    <Posicao>INSS</Posicao>
                    <Posicao>{inss[0]}</Posicao>
                    <Posicao>R${arrendondar(inss[1])}</Posicao>
                </LinhasResposta>
                <LinhasResposta $Desconto>
                    <Posicao>IRFF</Posicao>
                    <Posicao>{irrf[0]}</Posicao>
                    <Posicao>R${arrendondar(irrf[1])}</Posicao>
                </LinhasResposta>
                
                <LinhasResposta $Liquido>
                    <Posicao>LÍQUIDO</Posicao>
                    <Posicao>----</Posicao>
                    <Posicao>R${arrendondar(liquido)}</Posicao>
                </LinhasResposta>
            </RespostaContainer>
        )
    }
}

export default Resposta