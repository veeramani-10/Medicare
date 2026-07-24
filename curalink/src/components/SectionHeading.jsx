import { motion } from 'framer-motion'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
}) {
  const alignment = align === 'left' ? 'items-start text-left' : 'items-center text-center'

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`flex flex-col ${alignment} gap-4 ${className}`}
    >
      {eyebrow && (
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary-600 dark:text-primary-300 bg-primary-50 dark:bg-white/5 px-4 py-1.5 rounded-full">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink dark:text-white leading-tight max-w-2xl">
        {title}
      </h2>
      {description && (
        <p className="text-ink-light dark:text-white/60 max-w-xl text-base md:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  )
}
