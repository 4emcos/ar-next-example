import React, { useEffect, useState } from 'react'
import { Container } from './styles'
import '@google/model-viewer'

export default function Model() {
  useEffect(() => {
    const modelViewer = document.getElementById('ar-model-object')
    const handleChargeAnimation = setInterval(() => {
      modelViewer.animationName =
        modelViewer.animationName === 'Running' ? 'Wave' : 'Running'
    }, 1500)

    return () => clearInterval(handleChargeAnimation)
  })

  return (
    <Container>
      <div className="ar-model">
        <model-viewer
          id="ar-model-object"
          camera-controls
          autoplay
          animation-name="Running"
          ar
          shadow-intensity="1"
          src="/RobotExpressive.glb"
          alt="An animated 3D model of a robot"
        />
      </div>
    </Container>
  )
}
