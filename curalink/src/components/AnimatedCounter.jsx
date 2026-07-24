import useCounter from '../hooks/useCounter'

export default function AnimatedCounter({ value, suffix = '', className = '' }) {
  const { ref, value: animated } = useCounter(value)
  return (
    <span ref={ref} className={`font-mono tabular-nums ${className}`}>
      {animated.toLocaleString()}
      {suffix}
    </span>
  )
}
