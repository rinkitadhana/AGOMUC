import React, { useEffect, useRef } from "react"
import * as THREE from "three"

const RotatingCube = ({ size = 2 }) => {
  // size prop controls cube size
  const mountRef = useRef(null)

  useEffect(() => {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    })

    renderer.setSize(300, 300)
    renderer.setClearColor(0x000000, 0)
    mountRef.current.appendChild(renderer.domElement)

    const geometry = new THREE.BoxGeometry(size, size, size)
    const edges = new THREE.EdgesGeometry(geometry, 1)
    const material = new THREE.LineBasicMaterial({ color: 0x00ff00 })
    const wireframe = new THREE.LineSegments(edges, material)

    const faceMaterial = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
      transparent: true,
      opacity: 0.1,
      side: THREE.DoubleSide,
    })
    const cube = new THREE.Mesh(geometry, faceMaterial)

    scene.add(wireframe)
    scene.add(cube)
    camera.position.z = 5 // Moved camera back to accommodate larger cube

    const animate = () => {
      requestAnimationFrame(animate)
      wireframe.rotation.x += 0.01
      wireframe.rotation.y += 0.01
      cube.rotation.x += 0.01
      cube.rotation.y += 0.01
      renderer.render(scene, camera)
    }

    animate()

    return () => {
      mountRef.current.removeChild(renderer.domElement)
      geometry.dispose()
      material.dispose()
      faceMaterial.dispose()
      edges.dispose()
    }
  }, [size])

  return (
    <div className="flex items-center justify-center">
      <div ref={mountRef} />
    </div>
  )
}

export default RotatingCube
