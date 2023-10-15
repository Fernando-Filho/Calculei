import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
    width: 100%;
`

export const Form = styled.div`
    transition: .2s;
    display: flex;
    flex-direction: row;
    align-items: space-around;
    gap: 16px;
   
    @media screen and (max-width: 678px){
        flex-direction: column;
        
        input{ 
            width: 250px;
        }
    }
    `
export const Input = styled.input`
    transition: .2s;
    height: 36px;
    width: 200px;
    border-radius: 4px;
    padding-left: 10px;
    font-size: 16px;
    color: #ffffff;

    &::-webkit-inner-spin-button{
        display: none;
    }
`

export const Button = styled.button`
    transition: .5s;
    height: 36px;
    width: 200px;
    border-radius: 4px;
    background-color: rgb(14, 115, 232);
    color: #ffffff;
    
    &:hover{
        box-shadow: 0px 0px 15px 1px rgba(14, 116, 232, .8);
    }
    &:focus{
        box-shadow: 0px 0px 15px 1px rgba(14, 116, 232, .8);
    }

    @media screen and (max-width: 678px){
        width: 150px;
    }
`