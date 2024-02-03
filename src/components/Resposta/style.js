import styled, { css } from 'styled-components'

export const RespostaContainer = styled.div`
    transition: .2s;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 550px;
    border-radius: 12px;
    background-color: rgb(179, 179, 179);
    box-shadow: 5px 5px 15px 1px rgba(179, 179, 179, 0.5);

    @media screen and (max-width: 678px){
        width: 380px;
    }
`

export const LinhasResposta = styled.div`
    display: flex;
    flex-direction: row;
    height: 60px;
    width: 100%;
    border: solid 1px #333438;
    

    ${props => props.$Provento && css`
        border-radius: 10px 10px 0px 0px;
    `}
    ${props => props.$Liquido && css`
    border-radius: 0px 0px 10px 10px;
    `}

`

export const Posicao = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 33%;
    color: #333438;
`