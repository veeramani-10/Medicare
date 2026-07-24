export default function FloatingBlob({ className = '', color = 'primary' }) {
  const colorMap = {
    primary: 'bg-primary-300/40',
    blue: 'bg-accent/30',
  }
  return (
    <div
      aria-hidden="true"
      className={`absolute rounded-full blur-3xl animate-blob pointer-events-none ${colorMap[color]} ${className}`}
    />
  )
}
