import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2'
import { FaQuoteLeft } from 'react-icons/fa'

export default function TestimonialCarousel({ items }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % items.length)
    }, 5500)
    return () => clearInterval(id)
  }, [paused, items.length])

  const go = (dir) => {
    setIndex((i) => (i + dir + items.length) % items.length)
  }

  const current = items[index]

  return (
    <div
      className="relative max-w-2xl mx-auto"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="glass-strong rounded-4xl shadow-soft p-8 md:p-10 min-h-[280px] flex flex-col justify-center">
        <FaQuoteLeft className="w-8 h-8 text-primary-200 dark:text-primary-700 mb-4" aria-hidden="true" />
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-lg md:text-xl text-ink dark:text-white/90 leading-relaxed mb-6">
              "{current.quote}"
            </p>
            <div className="flex items-center gap-3">
              <img
                src={current.img}
                alt=""
                loading="lazy"
                className="w-12 h-12 rounded-full object-cover ring-2 ring-primary-200"
              />
              <div>
                <p className="font-display font-semibold text-ink dark:text-white">{current.name}</p>
                <p className="text-sm text-ink-light dark:text-white/50">{current.role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={() => go(-1)}
          aria-label="Previous testimonial"
          className="w-10 h-10 rounded-full glass shadow-card flex items-center justify-center hover:bg-primary-50 transition-colors"
        >
          <HiChevronLeft className="w-5 h-5 text-primary-600" />
        </button>
        <div className="flex gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === index ? 'bg-primary-600 w-6' : 'bg-primary-200 dark:bg-white/20'
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => go(1)}
          aria-label="Next testimonial"
          className="w-10 h-10 rounded-full glass shadow-card flex items-center justify-center hover:bg-primary-50 transition-colors"
        >
          <HiChevronRight className="w-5 h-5 text-primary-600" />
        </button>
      </div>
    </div>
  )
}
