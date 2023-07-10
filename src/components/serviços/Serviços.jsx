import React from 'react'
import './serviços.css'
import { BiCheck } from 'react-icons/bi'

const Serviços = () => {
  return (
    <section id='serviços'>
      <h5>O que ofereço</h5>
      <h2>Serviços</h2>

      <div className="container serviços__container">
        <article className="serviço">
          <div className="serviço__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='serviço__list'>
            <li>
              <BiCheck className='serviço__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='serviço__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='serviço__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='serviço__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='serviço__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='serviço__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
          </ul>
        </article>

        {/* DESENVOLVIMENTO WEB */}

        <article className="serviço">
          <div className="serviço__head">
            <h3>Desenvolvimento Web</h3>
          </div>

          <ul className='serviço__list'>
            <li>
              <BiCheck className='serviço__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='serviço__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='serviço__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='serviço__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='serviço__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='serviço__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
          </ul>
        </article>

        {/* CRIAÇÃO DE CONTEÚDO */}

        <article className="serviço">
          <div className="serviço__head">
            <h3>Criação de conteúdo</h3>
          </div>

          <ul className='serviço__list'>
            <li>
              <BiCheck className='serviço__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='serviço__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='serviço__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='serviço__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='serviço__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='serviço__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/*FINAL DO CRIAÇÃO DE CONTEÚDO */}
      </div>
    </section>
  )
}

export default Serviços