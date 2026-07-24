import { useEffect, useRef, useState } from 'react'
import useMediaQuery from '../hooks/useMediaQuery'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [hovering, setHovering] = useState(false)
  const isFinePointer = useMediaQuery('(pointer: fine)')

  useEffect(() => {
    if (!isFinePointer) return

    document.documentElement.classList.add('custom-cursor-active')
    const dot = dotRef.current
    const ring = ringRef.current
    let ringX = window.innerWidth / 2
    let ringY = window.innerHeight / 2

    const move = (e) => {
      dot.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
      target = e
    }

    let target = { clientX: ringX, clientY: ringY }
    const handleMove = (e) => {
      target = e
      dot.style.transform = `translate3d(${e.clientX - 3}px, ${e.clientY - 3}px, 0)`
    }

    let raf
    const animateRing = () => {
      ringX += (target.clientX - ringX) * 0.15
      ringY += (target.clientY - ringY) * 0.15
      if (ring) ring.style.transform = `translate3d(${ringX - 16}px, ${ringY - 16}px, 0)`
      raf = requestAnimationFrame(animateRing)
    }

    const handleOver = (e) => {
      const interactive = e.target.closest('a, button, input, textarea, [role="button"]')
      setHovering(Boolean(interactive))
    }

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mouseover', handleOver)
    raf = requestAnimationFrame(animateRing)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseover', handleOver)
      cancelAnimationFrame(raf)
      document.documentElement.classList.remove('custom-cursor-active')
    }
  }, [isFinePointer])

  if (!isFinePointer) return null

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-primary-600 pointer-events-none z-[100] hidden md:block"
      />
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-primary-400/60 pointer-events-none z-[100] hidden md:block transition-[width,height] duration-200 ${
          hovering ? 'scale-150 bg-primary-400/10' : ''
        }`}
      />
    </>
  )
}
