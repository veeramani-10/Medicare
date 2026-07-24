export default function GlassCard({ className = '', strong = false, children, ...props }) {
  return (
    <div
      className={`${strong ? 'glass-strong' : 'glass'} rounded-3xl shadow-soft ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
