'use client'
import Image from 'next/image'
import React from 'react'
import CustomButton from './CustomButton'

const Hero = () => {
    const handleScroll = () => {
        
    }
  return (
      <div className='hero'>
          <div className="flex-1  pt-36 padding-x">
              <h1 className="hero__title">Find, book, create a web quickly and easly</h1>
              <p className="hero__subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ut?</p>
              <CustomButton
                  title='Explore cars'
                  containerStyles='bg-primary-blue text-white rounded-full mt-10'
                  handleClick={handleScroll}
              />
          </div>
          <div className="hero__image-container">
              <div className="hero__image">
                  <Image alt='img' src='/hero.png' fill className='object-contain' />
                  <div className="hero__image-overlay"/>
              </div> 
          </div>
    </div>
  )
}

export default Hero