import React from 'react'
import './experiência.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experiência = () => {
  return (
    <section id='experiência'>
      <h5>Skills</h5>
      <h2>Minha Experiência</h2>
      <div className="container experiência__container">

        <div className="experiência__frontend">
          <h3>Desenvolvimento Frontend</h3>
          <div className="experiência__content">
            <article className='experiência__detalhes'>
              <BsPatchCheckFill className='experiência__detalhes-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Com experiência</small>
              </div>
            </article>

            <article className='experiência__detalhes'>
              <BsPatchCheckFill className='experiência__detalhes-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediário</small>
              </div>
            </article>

            <article className='experiência__detalhes'>
              <BsPatchCheckFill className='experiência__detalhes-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Com experiência</small>
              </div>
            </article>

            <article className='experiência__detalhes'>
              <BsPatchCheckFill className='experiência__detalhes-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Com experiência</small>
              </div>
            </article>

            <article className='experiência__detalhes'>
              <BsPatchCheckFill className='experiência__detalhes-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Com experiência</small>
              </div>
            </article>
          </div>
        </div>

        {/* FINAL DO FRONTEND */}

        <div className="experiência__backend">
          <h3>Desenvolvimento Backend</h3>
          <div className="experiência__content">
            <article className='experiência__detalhes'>
              <BsPatchCheckFill className='experiência__detalhes-icon' />
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Com experiência</small>
              </div>
            </article>

            <article className='experiência__detalhes'>
              <BsPatchCheckFill className='experiência__detalhes-icon' />
              <div>
                <h4>Java</h4>
                <small className='text-light'>Intermediário</small>
              </div>
            </article>

            <article className='experiência__detalhes'>
              <BsPatchCheckFill className='experiência__detalhes-icon' />
              <div>
                <h4>Php</h4>
                <small className='text-light'>Intermediário</small>
              </div>
            </article>

            <article className='experiência__detalhes'>
              <BsPatchCheckFill className='experiência__detalhes-icon' />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Com experiência</small>
              </div>
            </article>

            <article className='experiência__detalhes'>
              <BsPatchCheckFill className='experiência__detalhes-icon' />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Intermediário</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experiência