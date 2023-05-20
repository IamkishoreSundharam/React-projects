import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalcontext } from './context'
const Hero = () => {
  const {closesubmenu}=useGlobalcontext();
  return (
    <section className='hero' onMouseOver={closesubmenu}>
      <div className='hero-center'>

        <article>
          <h1>payments infrastructure for the internet</h1>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <button className='btn'>
           start now
          </button>
        </article>

        <article className='hero-images'>
          <img src={phoneImg} className='phone-img' alt='phone'></img>
        </article>

      </div>
    </section>
  )
}

export default Hero
