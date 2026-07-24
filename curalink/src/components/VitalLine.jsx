import { motion } from 'framer-motion'

/**
 * The signature element of the page: a heartbeat/pulse line that threads
 * between major sections, echoing a cardiac monitor. Draws itself in
 * once scrolled into view rather than looping endlessly, so it reads as
 * a deliberate punctuation mark rather than decoration.
 */
export default function VitalLine({ className = '', flip = false }) {
  return (
    <div className={`w-full flex justify-center overflow-hidden ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1200 80"
        className={`w-full max-w-5xl h-16 ${flip ? 'scale-y-[-1]' : ''}`}
        fill="none"
      >
        <motion.path
          d="M0 40 H380 L410 10 L440 70 L470 40 H540 L560 20 L580 60 L600 40 H1200"
          stroke="url(#vital-gradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.8, ease: 'easeInOut' }}
        />
        <defs>
          <linearGradient id="vital-gradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0" />
            <stop offset="15%" stopColor="#7C3AED" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="85%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
