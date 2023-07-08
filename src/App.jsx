import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Sobre from './components/sobre/Sobre'
import Experiencia from './components/experiencia/Experiencia'
import Serviços from './components/serviços/Serviços'
import Portfolio from './components/portfolio/Portfolio'
import Depoimentos from './components/depoimentos/Depoimentos'
import Contato from './components/contato/Contato'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <Sobre />
      <Experiencia />
      <Serviços />
      <Portfolio />
      <Depoimentos />
      <Contato />
      <Footer />
    </>
  )
}

export default App