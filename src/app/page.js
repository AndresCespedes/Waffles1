"use client"
import Carousel from '@/components/Carousel'
import Info from '@/components/Informacion'
import WafflesMenu from '@/components/MenuWaffles'
import Mision from '@/components/Mision'
import Vision from '@/components/Vision'
import PropuestaValor from '@/components/PropuestaValor'

export default function Home() {
  return (
    <>
      <Info />
      <Carousel />
      <WafflesMenu />
      <Mision />
      <Vision />
      <PropuestaValor />
    </>
  )
}
