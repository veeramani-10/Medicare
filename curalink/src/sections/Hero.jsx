import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { HiOutlineHeart, HiOutlinePlay, HiMiniSignal, HiOutlineMicrophone } from 'react-icons/hi2'
import { FaStethoscope, FaPills, FaSyringe } from 'react-icons/fa'
import Button from '../components/Button'
import GlassCard from '../components/GlassCard'
import FloatingBlob from '../components/FloatingBlob'
import AnimatedCounter from '../components/AnimatedCounter'
import { HERO_STATS } from '../utils/data'

function useParallax() {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 60, damping: 15 })
  const springY = useSpring(y, { stiffness: 60, damping: 15 })

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const relX = (e.clientX - rect.left) / rect.width - 0.5
    const relY = (e.clientY - rect.top) / rect.height - 0.5
    x.set(relX * 24)
    y.set(relY * 24)
  }

  return { ref, springX, springY, handleMouseMove }
}

export default function Hero() {
  const { ref, springX, springY, handleMouseMove } = useParallax()
  const iconX = useTransform(springX, (v) => -v)
  const iconY = useTransform(springY, (v) => -v)

  return (
    <section
      id="home"
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden pt-40 pb-24 md:pt-48 md:pb-32 bg-grad-soft dark:bg-none"
    >
      <FloatingBlob className="w-96 h-96 -top-20 -left-20" color="primary" />
      <FloatingBlob className="w-[28rem] h-[28rem] top-40 -right-32" color="blue" />
      <div className="absolute inset-0 bg-grad-radial-glow pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-primary-700 dark:text-primary-300 bg-white/80 dark:bg-white/10 px-4 py-2 rounded-full shadow-card mb-6">
            <HiOutlineHeart className="w-4 h-4 text-primary-600" />
            Trusted by 640+ verified doctors
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] text-ink dark:text-white">
            Healthcare that
            <span className="text-gradient"> meets you </span>
            wherever you are
          </h1>

          <p className="mt-6 text-lg text-ink-light dark:text-white/60 max-w-lg">
            Book a video consult with a licensed doctor in minutes, get e-prescriptions
            sent to your pharmacy, and keep every follow-up organized in one calm,
            secure place.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button as="a" href="#appointment" size="lg">
              Book an Appointment
            </Button>
            <Button as="a" href="#dashboard" variant="ghost" size="lg" className="group">
              <HiOutlinePlay className="w-5 h-5 text-primary-600 group-hover:scale-110 transition-transform" />
              See how it works
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {HERO_STATS.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl md:text-3xl font-bold text-ink dark:text-white">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-xs text-ink-light dark:text-white/50 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          className="relative h-[420px] sm:h-[480px] md:h-[560px]"
        >
          {/* Doctor image */}
          <motion.div
            style={{ x: springX, y: springY }}
            className="absolute inset-x-6 top-0 bottom-10 rounded-4xl overflow-hidden shadow-glow"
          >
            <img
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80"
              alt="A doctor in scrubs smiling warmly at the camera, ready for a video consultation"
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 via-transparent to-transparent" />
          </motion.div>

          {/* Video call UI card */}
          <motion.div
            style={{ x: iconX, y: iconY }}
            className="absolute -bottom-4 -left-4 sm:left-0 w-56 sm:w-64"
          >
            <GlassCard strong className="p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="flex items-center gap-1.5 text-xs font-semibold text-green-600">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Live consult
                </span>
                <HiMiniSignal className="w-4 h-4 text-primary-500" />
              </div>
              <div className="rounded-2xl overflow-hidden mb-3">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80"
                  alt="Patient on a video call with their doctor"
                  loading="lazy"
                  className="w-full h-24 object-cover"
                />
              </div>
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold text-ink dark:text-white">Dr. Amara Chen</p>
                <span className="w-7 h-7 rounded-full bg-primary-50 flex items-center justify-center">
                  <HiOutlineMicrophone className="w-3.5 h-3.5 text-primary-600" />
                </span>
              </div>
            </GlassCard>
          </motion.div>

          {/* Floating stat card */}
          <motion.div
            style={{ x: iconX, y: iconY }}
            className="absolute top-6 -right-2 sm:right-0"
          >
            <GlassCard strong className="px-5 py-4 flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center">
                <HiOutlineHeart className="w-5 h-5 text-primary-600" />
              </span>
              <div>
                <p className="text-lg font-bold text-ink dark:text-white leading-none">98%</p>
                <p className="text-[11px] text-ink-light dark:text-white/50">Patient satisfaction</p>
              </div>
            </GlassCard>
          </motion.div>

          {/* Floating medical icons */}
          <motion.span
            style={{ x: springX, y: springY }}
            className="absolute top-1/3 -left-6 w-12 h-12 rounded-2xl glass-strong shadow-card flex items-center justify-center animate-float"
          >
            <FaStethoscope className="w-5 h-5 text-primary-600" />
          </motion.span>
          <motion.span
            style={{ x: iconX, y: springY }}
            className="absolute bottom-24 right-2 w-11 h-11 rounded-2xl glass-strong shadow-card flex items-center justify-center animate-floatSlow"
          >
            <FaPills className="w-4 h-4 text-accent" />
          </motion.span>
          <motion.span
            style={{ x: springX, y: iconY }}
            className="absolute top-8 left-8 w-10 h-10 rounded-2xl glass-strong shadow-card flex items-center justify-center animate-float"
          >
            <FaSyringe className="w-4 h-4 text-primary-500" />
          </motion.span>
        </motion.div>
      </div>
    </section>
  )
}
