import React from 'react'
import { InfiniteMovingCards } from './ui/InfineiteMovingCards'
import { testimonials } from '../data'

const Clients = () => {
  return (
    <div id='testimonials' className='pb-20'>
    <h1 className='heading pb-20'>
       Kind word from {' '} <span className='text-purple'>People I've worked with</span>
    </h1>
    <div className='flex flex-col items-center'>
       
        <InfiniteMovingCards
        items={testimonials}
        direction='right'
        speed='slow'
        />
    
    </div>
    </div>
  )
}

export default Clients