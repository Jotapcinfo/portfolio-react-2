import React from 'react'
import './contato.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsBagDashFill } from 'react-icons/bs'
import { RiMessengerLine } from 'react-icons/ri'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contato = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_16tzhzp', 'template_2a4iuac', form.current, 'PHnvq4_tMSWp39UWe')

    e.target.reset()
  };
  return (
    <section id='contato'>
      <h5>Get in Touch</h5>
      <h2>Contato</h2>

      <div className="container contato__container">
        <div className="contato__opcoes">
          <article className="contato__opcao">
            <MdOutlineEmail className='contato_opcao-icon'/>
            <h4>Email</h4>
            <h5>contato@fraseadotec.com.br</h5>
            <a href="mailto:contato@fraseadotec.com.br">Envie um Email</a>   
          </article>

          <article className="contato__opcao">
            <BsBagDashFill className='contato_opcao-icon' />
            <h4>Portfólio</h4>
            <h5>Fraseadotec</h5>
            <a href="https://linktr.ee/jeffersonmoreno" target="_blank">Ir</a>   
          </article>

          <article className="contato__opcao">
            <RiMessengerLine className='contato_opcao-icon'  />
            <h4>WhasApp</h4>
            <h5>(11) 1191581-3527</h5>
            <a href="https://api.whatsapp.com/send?phone=11915813527" target="_blank">Envie uma Mensagem</a>   
          </article>
        </div>
        
        { /* FINAL DO OPÇÕES DE CONTATO */ }

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='nome' placeholder='Seu Nome Completo' required />
          <input type="text" name='email' placeholder='Seu Email' required />
          <textarea name="mensagem" rows="7" placeholder='Sua Mensagem' required></textarea>
          <button type='submit' className='btn btn-primary'>Enviar Mensagem</button>
        </form>
      </div>
    </section>
  )
}

export default Contato