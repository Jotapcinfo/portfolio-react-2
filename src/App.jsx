import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Sobre from './components/sobre/Sobre'
import Experiência from './components/experiência/Experiência'
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
      <Experiência />
      <Serviços />
      <Portfolio />
      <Depoimentos />
      <Contato />
      <Footer />
    </>
  )
}

export default App