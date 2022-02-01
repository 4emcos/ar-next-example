import React, { useEffect, useState } from 'react'
import { Container } from './styles'
import '@google/model-viewer'

export default function Model() {
  const [modelViewer, setModelViewer] = useState(null)
  const handleModelLoad = () => {
    if (modelViewer) {
      setInterval(() => {
        modelViewer.animationName =
          modelViewer.animationName === 'Running' ? 'Wave' : 'Running'
      }, 1600.0)
    }
  }

  useEffect(() => {
    setModelViewer(document.getElementById('ar-model-object'))
    handleModelLoad()
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
