import React, { useEffect, useRef } from "react"
import * as THREE from "three"

const RotatingCube = () => {
  const mountRef = useRef(null)

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })

    // Get the current div's dimensions
    const width = mountRef.current.clientWidth
    const height = mountRef.current.clientHeight

    // Set renderer size and properties
    renderer.setSize(width, height)
    renderer.setClearColor(0x000000, 0)
    mountRef.current.appendChild(renderer.domElement)

    // Create cube geometry
    const geometry = new THREE.BoxGeometry(2, 2, 2)

    // Create material for faces
    const faceMaterial = new THREE.MeshBasicMaterial({
      color: 0x0066ff,
      transparent: true,
      opacity: 0.3,
      side: THREE.DoubleSide,
    })

    // Create the edges geometry
    const edgesGeometry = new THREE.EdgesGeometry(geometry)
    const edgesMaterial = new THREE.LineBasicMaterial({
      color: 0x40ff40,
      linewidth: 1,
    })

    // Create both meshes
    const cubeFaces = new THREE.Mesh(geometry, faceMaterial)
    const cubeEdges = new THREE.LineSegments(edgesGeometry, edgesMaterial)

    // Create a group to hold both meshes
    const cubeGroup = new THREE.Group()
    cubeGroup.add(cubeFaces)
    cubeGroup.add(cubeEdges)

    scene.add(cubeGroup)

    // Position camera
    camera.position.z = 5

    // Animation function
    const animate = () => {
      requestAnimationFrame(animate)
      cubeGroup.rotation.x += 0.01
      cubeGroup.rotation.y += 0.01
      renderer.render(scene, camera)
    }

    // Handle window resize
    const handleResize = () => {
      const width = mountRef.current.clientWidth
      const height = mountRef.current.clientHeight

      renderer.setSize(width, height)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
    }

    window.addEventListener("resize", handleResize)

    // Start animation
    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      mountRef.current.removeChild(renderer.domElement)
      geometry.dispose()
      faceMaterial.dispose()
      edgesGeometry.dispose()
      edgesMaterial.dispose()
    }
  }, [])

  return <div ref={mountRef} className="w-full h-64"></div>
}

export default RotatingCube
