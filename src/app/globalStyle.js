import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@500&display=swap');

    *{
        margin: 0;
        padding: 0;
        border: none;
        box-sizing: border-box;
        font-family: 'Manrope', sans-serif;
    }

    :root{
        color: #333438;
        user-select: none;
    }
    body{
        height: 100vh;
        width: 100vw;
        background-color: rgba(228, 228, 228, 1);
    }
    
    input, textarea{
        background-color: #333438;
        box-shadow: 5px 5px 15px 1px rgb(51, 52, 56, .5);

        &::placeholder{
            color: rgba(179, 179, 179, 0.4);
        }
    }
    input, textarea:focus{
        outline: none;
    }
    button{
        cursor: pointer;
        box-shadow: 5px 5px 15px 1px rgb(51, 52, 56, .5);
    }
`
export default GlobalStyle