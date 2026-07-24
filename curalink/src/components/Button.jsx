import { useState, useRef } from 'react'

const VARIANTS = {
  primary: 'btn-gradient text-white shadow-glow hover:shadow-glow hover:-translate-y-0.5',
  outline: 'bg-transparent border border-primary-300 text-primary-700 hover:bg-primary-50 dark:text-primary-200 dark:border-primary-700 dark:hover:bg-white/5',
  ghost: 'bg-white/70 text-ink hover:bg-white shadow-card dark:bg-white/10 dark:text-white dark:hover:bg-white/20',
}

export default function Button({
  as: Component = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) {
  const [ripples, setRipples] = useState([])
  const containerRef = useRef(null)

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm md:text-base',
    lg: 'px-8 py-4 text-base md:text-lg',
  }

  const handleClick = (e) => {
    const el = containerRef.current
    if (el) {
      const rect = el.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height)
      const x = e.clientX - rect.left - size / 2
      const y = e.clientY - rect.top - size / 2
      const id = Date.now()
      setRipples((prev) => [...prev, { id, x, y, size }])
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id))
      }, 650)
    }
    props.onClick?.(e)
  }

  return (
    <Component
      ref={containerRef}
      className={`ripple-container relative inline-flex items-center justify-center gap-2 rounded-full font-display font-semibold transition-all duration-300 ${sizeClasses[size]} ${VARIANTS[variant]} ${className}`}
      {...props}
      onClick={handleClick}
    >
      {children}
      {ripples.map((r) => (
        <span
          key={r.id}
          className="ripple"
          style={{ left: r.x, top: r.y, width: r.size, height: r.size }}
        />
      ))}
    </Component>
  )
}
