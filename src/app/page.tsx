
import { Footer } from '@/components/Footer'
import Header from '@/components/Header'
import { SectionHero } from '@/components/SectionHero'
import { SectionServices } from '@/components/SectionServices'
import React from 'react'

const page = () => {
  return (
    <div>
       
      
      <Header/>
      <SectionHero/>
      <SectionServices/>
      <Footer/>



    </div>
  )
}

export default page