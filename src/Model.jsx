import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useThree } from "@react-three/fiber";
import { useLayoutEffect } from "react";

export default function Model(props) {

  const { camera, scene } = useThree()

  const model = useRef()

  const tl = gsap.timeline()

  useLayoutEffect(() => {

    tl
    .to(model.current.rotation, {
      y: Math.PI * 0.5,
      x: Math.PI / 4,
      scrollTrigger: {
        trigger: ".two",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })

    .to(camera.position, {
      y: 10,
      scrollTrigger: {
        trigger: ".two",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })

    // .to(model.current.rotation, {
    //   x: Math.PI * 2,
    //   scrollTrigger: {
    //     trigger: ".three",
    //     start: "top bottom",
    //     end: "top top",
    //     scrub: true,
    //     immediateRender: false,
    //   },
    // })
    

  }, [])

  const { nodes, materials } = useGLTF("./porsche911.glb");
  return (
    <group {...props} dispose={null} ref={ model } >
      <group
        position={[-0.015, -0.009, 0.063]}
        rotation={[-1.577, 0, 0]}
        scale={0.599}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bumper_front007_0_1.geometry}
        >
          <meshPhysicalMaterial color={ "#6495ED" } metalness={ 1 } roughness={ 0.4 } />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bumper_front007_0_2.geometry}
        >
          <meshPhysicalMaterial color={ "#6495ED" } metalness={ 1 } roughness={ 0.3 } />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bumper_front007_0_3.geometry}
        >
          <meshPhysicalMaterial color={ "#6495ED" } metalness={ 1 } roughness={ 0.3 } />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bumper_front007_0_4.geometry}
        >
          <meshPhysicalMaterial color={ "#6495ED" } metalness={ 1 } roughness={ 0.3 } />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bumper_front007_0_5.geometry}
        >
          <meshPhysicalMaterial color={ "#6495ED" } metalness={ 1 } roughness={ 0.3 } />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bumper_front007_0_6.geometry}
        >
          <meshPhysicalMaterial color={ "#6495ED" } metalness={ 1 } roughness={ 0.3 } />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bumper_front007_0_7.geometry}
        >
          <meshPhysicalMaterial color={ "#6495ED" } metalness={ 1 } roughness={ 0.3 } />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bumper_front007_0_8.geometry}
        >
          <meshPhysicalMaterial color={ "#6495ED" } metalness={ 1 } roughness={ 0.3 } />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bumper_front007_0_9.geometry}
        >
          <meshPhysicalMaterial color={ "#6495ED" } metalness={ 1 } roughness={ 0.3 } />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bumper_front007_0_10.geometry}
        >
          <meshPhysicalMaterial color={ "#6495ED" } metalness={ 1 } roughness={ 0.3 } />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bumper_front007_0_11.geometry}
        >
          <meshPhysicalMaterial color={ "#6495ED" } metalness={ 1 } roughness={ 0.3 } />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bumper_front007_0_12.geometry}
        >
          <meshPhysicalMaterial color={ "#6495ED" } metalness={ 1 } roughness={ 0.3 } />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bumper_front007_0_13.geometry}
        >
          <meshPhysicalMaterial color={ "#6495ED" } metalness={ 1 } roughness={ 0.3 } />
        </mesh>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane_0.geometry}
        material={materials.Material}
        position={[-0.015, -0.619, 0.063]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[4.022, 5.66, 4.336]}
      />
    </group>
  );
}

useGLTF.preload("./porsche911.glb");