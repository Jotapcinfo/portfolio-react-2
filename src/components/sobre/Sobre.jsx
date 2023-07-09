import React from 'react'
import './sobre.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const Sobre = () => {
  return (
    <section id='sobre'>
      <h5>Saber mais</h5>
      <h2>Sobre mim</h2>

      <div className="container sobre__container">
        <div className="sobre__me">
          <div className="sobre__me-image">
            <img src={ME} alt="Sobre imagem" />
          </div>

        </div>
        <div className="sobre__content">
          <div className="sobre__cards">

            <article className='sobre__card'>
              <FaAward className='sobre__icon' />
              <h5>Experiência</h5>
              <small>4+ anos em projetos</small>
            </article>

            <article className='sobre__card'>
              <FiUsers className='sobre__icon' />
              <h5>Clientes</h5>
              <small>30+</small>
            </article>

            <article className='sobre__card'>
              <VscFolderLibrary className='sobre__icon' />
              <h5>Projetos</h5>
              <small>30+ Completados</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias fugiat expedita tempore ex quia temporibus beatae, eaque incidunt fugit fuga! 
          </p>

          <a href="#contato" className='btn btn-primary'>Entre em contato</a>
        </div>
      </div>
    </section>
  )
}

export default Sobre