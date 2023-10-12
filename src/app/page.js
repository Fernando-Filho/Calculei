"use client"

import { Page } from './stylePage'

import Header from "../components/Header/Index"
import Main from "../components/Main/Index"
import Footer from "../components/Footer/Index"

import { useState } from 'react'

import FGTS from "../backend/fgts"
import INSS from "../backend/inss"
import IRRF from "../backend/irrf"

export default function Home() {

  const [ salario, setSalario ] = useState()
  const [ provento, setProvento ] = useState()
  const [ dependentes, setDependentes ] = useState()
  const [ openRespsota, setOpenResposta ] = useState(false)
  
  const [ fgts, setFgts ] = useState(0)
  const [ inss, setInss ] = useState(0)
  const [ irrf, setIrrf ] = useState([0,0])


  function handleOnSubmit(e){
    e.preventDefault();
    if (salario === '') {
      alert('Pelo menos o campo de salário deve ser preenchido.');
      return;
    }

    setProvento(() => salario)
    setFgts(() => FGTS(salario))
    setInss(() => INSS(salario))
    setIrrf(() => IRRF(salario, dependentes))

    setOpenResposta(true)
    
    setSalario("")
    setDependentes("")
  }

  return (
    <Page>
      <Header 
              salario={salario}
              dependentes={dependentes}
              setSalario={setSalario}
              setDependentes={setDependentes}

              handleOnSubmit={handleOnSubmit}>
      </Header>
      <Main
            provento={provento}
            fgts={fgts}
            inss={inss}
            irrf={irrf}
            openRespsota={openRespsota}>
      </Main>
      <Footer/>

    </Page>
  )
}
