import React, { useEffect, useRef } from "react"

const MatrixRain = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    // Set initial black background
    ctx.fillStyle = "rgb(0, 0, 0)"
    ctx.fillRect(0, 0, width, height)

    let columns = Math.floor(width / 20)
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    const charArray = characters.split("")
    let drops = []
    let colors = []

    // Initialize drops with random starting positions
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100
      colors[i] = Math.random() < 0.5 ? "#0066ff" : "#0f0"
    }

    let frameRate = 10
    let lastFrameTime = Date.now()

    const draw = () => {
      // Reduced alpha value for smoother trails
      ctx.fillStyle = "rgba(0, 0, 0, 0.08)"
      ctx.fillRect(0, 0, width, height)

      ctx.font = "15px monospace"
      for (let i = 0; i < drops.length; i++) {
        if (drops[i] > 0) {
          const text = charArray[Math.floor(Math.random() * charArray.length)]
          ctx.fillStyle = colors[i]
          ctx.fillText(text, i * 20, drops[i] * 20)
        }

        if (drops[i] * 20 > height && Math.random() > 0.975) {
          drops[i] = -1
          colors[i] = Math.random() < 0.5 ? "#0f0" : "#0066ff"
        }

        drops[i]++
      }
    }

    const animate = () => {
      const currentTime = Date.now()
      const elapsedTime = currentTime - lastFrameTime

      if (elapsedTime > 1000 / frameRate) {
        draw()
        lastFrameTime = currentTime
      }

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight

      // Set black background on resize
      ctx.fillStyle = "rgb(0, 0, 0)"
      ctx.fillRect(0, 0, width, height)

      columns = Math.floor(width / 20)
      drops = []
      colors = []
      for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * -100
        colors[i] = Math.random() < 0.5 ? "#0f0" : "#0066ff"
      }
    }

    const isMobileDevice = /Mobi/i.test(window.navigator.userAgent)
    if (!isMobileDevice) {
      window.addEventListener("resize", handleResize)
    }

    return () => {
      if (!isMobileDevice) {
        window.removeEventListener("resize", handleResize)
      }
    }
  }, [])

  return (
    <canvas
      className="matrix-canvas fixed top-0 left-0 z-[-1] bg-black"
      ref={canvasRef}
    ></canvas>
  )
}

export default MatrixRain
