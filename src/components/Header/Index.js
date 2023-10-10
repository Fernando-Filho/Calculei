import { HeaderContainer, Form, Input, Button } from './style'

const Header = ({salario, setSalario, dependentes, setDependentes, handleOnSubmit}) => {

    
    return(
        <HeaderContainer>
            <h1>CALCULE SUA FOLHA</h1>
            

            <Form>
                <Input
                    $Provento
                    type="number"
                    inputMode='numeric'
                    value={salario}
                    placeholder='Digite o salário...'
                    onChange={e => setSalario(Number(e.target.value))}/>
                <Input
                    $Dependentes
                    type="number"
                    inputMode='numeric'
                    value={dependentes}
                    placeholder='Qtd. de dependentes...'
                    onChange={e => setDependentes(Number(e.target.value))}/>
            </Form>
            <Button 
                type='submit'
                onClick={handleOnSubmit}>
                    CALCULAR
            </Button>

        </HeaderContainer>
    )
}

export default Header