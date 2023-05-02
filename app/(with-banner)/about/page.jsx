'use client'

import { useEffect } from 'react'
import iniciarAnimacion from './animacion'

const AboutPage = () => {
  useEffect(() => {
    iniciarAnimacion()
  }, [])

  return (
    <div>
      <h1>Este es el about</h1>
      <canvas id='miCanvas' width='500' height='500'> </canvas>
    </div>
  )
}

export default AboutPage
