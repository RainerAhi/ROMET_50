import { Suspense, forwardRef, useLayoutEffect, useRef, useState } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls, Environment, SoftShadows, Float } from '@react-three/drei'
import Model from './Model'
import { Loading } from './Loading'
import ExplosionConfetti from './Confetti'

export const ConfettiCanvas = () => {

    return (
      <>
      <div className='confetti-canvas' >
      <Canvas shadows camera={{ position: [0, 0, 10], fov: 35 }} >
        <ExplosionConfetti isExploding />
      </Canvas>
      </div>
    </>
    )
}