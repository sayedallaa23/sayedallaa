/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 prime.glb -T 
Files: prime.glb [29.47MB] > D:\cources\github\ThreeJs\portfolio\public\prime-transformed.glb [4.76MB] (84%)
Author: DIO (https://sketchfab.com/dioiiiii2)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/bumblebee-optimus-prime-transform-animation-35f9cb09b1b248c7bd6b12912ac8cd3a
Title: Bumblebee - Optimus Prime Transform Animation
*/

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Model(props) {
  const group = React.useRef()
  const { scene, animations } = useGLTF('/prime-transformed.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <primitive object={nodes._rootJoint} />
        <skinnedMesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials.qingtianzhu_nengyuanbao01} skeleton={nodes.Object_7.skeleton} />
        <skinnedMesh name="Object_9" geometry={nodes.Object_9.geometry} material={materials.qingtianzhu_nengyuanbao01} skeleton={nodes.Object_9.skeleton} />
        <skinnedMesh name="Object_11" geometry={nodes.Object_11.geometry} material={materials.qingtianzhu_nengyuanbao01} skeleton={nodes.Object_11.skeleton} />
        <skinnedMesh name="Object_12" geometry={nodes.Object_12.geometry} material={materials.qingtianzhu_nengyuanbao02} skeleton={nodes.Object_12.skeleton} />
        <skinnedMesh name="Object_14" geometry={nodes.Object_14.geometry} material={materials.qingtianzhu_shenti} skeleton={nodes.Object_14.skeleton} />
        <skinnedMesh name="Object_16" geometry={nodes.Object_16.geometry} material={materials.qingtianzhu_nengyuanbao01} skeleton={nodes.Object_16.skeleton} />
        <skinnedMesh name="Object_18" geometry={nodes.Object_18.geometry} material={materials.qingtianzhu_shenti} skeleton={nodes.Object_18.skeleton} />
        <skinnedMesh name="Object_20" geometry={nodes.Object_20.geometry} material={materials.qingtianzhu_tui} skeleton={nodes.Object_20.skeleton} />
        <skinnedMesh name="Object_22" geometry={nodes.Object_22.geometry} material={materials.qingtianzhu_shoubi} skeleton={nodes.Object_22.skeleton} />
        <skinnedMesh name="Object_24" geometry={nodes.Object_24.geometry} material={materials.qingtianzhu_shenti} skeleton={nodes.Object_24.skeleton} />
        <skinnedMesh name="Object_25" geometry={nodes.Object_25.geometry} material={materials.metal} skeleton={nodes.Object_25.skeleton} />
        <skinnedMesh name="Object_27" geometry={nodes.Object_27.geometry} material={materials.qingtianzhu_tou} skeleton={nodes.Object_27.skeleton} />
      </group>
    </group>
  )
}

useGLTF.preload('/prime-transformed.glb')
