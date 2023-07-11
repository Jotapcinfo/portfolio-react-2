import React from 'react'
import './depoimentos.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Helena Marques',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias odit repellendus rem autem perspiciatis! Necessitatibus.'
  },
  {
    avatar: AVTR2,
    name: 'Pedro Almeida',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias odit repellendus rem autem perspiciatis! Necessitatibus.'
  },
  {
    avatar: AVTR3,
    name: 'Gabriel Santos',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias odit repellendus rem autem perspiciatis! Necessitatibus.'
  },
  {
    avatar: AVTR4,
    name: 'Isabela Silva',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias odit repellendus rem autem perspiciatis! Necessitatibus.'
  },
]

const Depoimentos = () => {
  return (
    <section id='depoimentos'>
      <h5>Reviwes dos clientes</h5>
      <h2>Depoimentos</h2>

      <Swiper className="container depoimentos__container"

      // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="depoimento">
                <div className="cliente__avatar">
                  <img src={avatar} />
                </div>
                <h5 className='cliente_nome'> {name} </h5>
                <small className='cliente__review'>{review} </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Depoimentos