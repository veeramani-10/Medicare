export default function SkeletonCard({ className = '' }) {
  return (
    <div className={`rounded-3xl overflow-hidden shadow-card bg-white dark:bg-white/5 ${className}`}>
      <div className="skeleton w-full h-40" />
      <div className="p-5 space-y-3">
        <div className="skeleton h-4 w-3/4 rounded-full" />
        <div className="skeleton h-3 w-1/2 rounded-full" />
        <div className="skeleton h-3 w-full rounded-full" />
      </div>
    </div>
  )
}
