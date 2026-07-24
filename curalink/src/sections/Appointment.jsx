import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiOutlineMapPin, HiOutlineCalendarDays, HiOutlineClock } from 'react-icons/hi2'
import SectionHeading from '../components/SectionHeading'
import GlassCard from '../components/GlassCard'
import Button from '../components/Button'
import { SERVICES } from '../utils/data'

const PINS = [
  { id: 1, x: '28%', y: '38%', label: 'Downtown Clinic — 0.4 mi' },
  { id: 2, x: '58%', y: '22%', label: 'Northside Health Center — 1.2 mi' },
  { id: 3, x: '70%', y: '62%', label: 'Riverside Practice — 2.1 mi' },
  { id: 4, x: '42%', y: '70%', label: 'Harbor Medical — 3.0 mi' },
]

export default function Appointment() {
  const [activePin, setActivePin] = useState(1)
  const [service, setService] = useState(SERVICES[0])

  return (
    <section id="appointment" className="py-24 md:py-32 bg-surface-dim/60 dark:bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Book your visit"
          title="Find a clinic nearby, or see a doctor from home"
          description="Explore in-network locations on the map, or skip the drive entirely with a video consult."
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-10 items-start">
          {/* Interactive map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="relative rounded-4xl overflow-hidden shadow-soft h-[380px] sm:h-[440px] bg-gradient-to-br from-primary-50 via-surface to-accent/10"
          >
            {/* Decorative "streets" */}
            <svg className="absolute inset-0 w-full h-full opacity-40" aria-hidden="true">
              <line x1="0" y1="30%" x2="100%" y2="30%" stroke="#C4B5FD" strokeWidth="2" />
              <line x1="0" y1="65%" x2="100%" y2="65%" stroke="#C4B5FD" strokeWidth="2" />
              <line x1="25%" y1="0" x2="25%" y2="100%" stroke="#C4B5FD" strokeWidth="2" />
              <line x1="65%" y1="0" x2="65%" y2="100%" stroke="#C4B5FD" strokeWidth="2" />
            </svg>

            {PINS.map((pin) => (
              <button
                key={pin.id}
                onClick={() => setActivePin(pin.id)}
                style={{ left: pin.x, top: pin.y }}
                aria-label={pin.label}
                aria-pressed={activePin === pin.id}
                className="absolute -translate-x-1/2 -translate-y-full group"
              >
                <span
                  className={`flex items-center justify-center w-9 h-9 rounded-full shadow-glow transition-transform duration-300 ${
                    activePin === pin.id ? 'bg-primary-600 scale-125' : 'bg-white text-primary-600 scale-100'
                  }`}
                >
                  <HiOutlineMapPin className={`w-5 h-5 ${activePin === pin.id ? 'text-white' : ''}`} />
                </span>
                {activePin === pin.id && (
                  <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-semibold bg-white shadow-card px-3 py-1.5 rounded-full text-ink">
                    {pin.label}
                  </span>
                )}
              </button>
            ))}
          </motion.div>

          {/* Booking card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard strong className="p-7 sm:p-8">
              <h3 className="font-display font-bold text-xl text-ink dark:text-white mb-6">
                Reserve your slot
              </h3>

              <label className="block text-xs font-semibold text-ink-light dark:text-white/50 mb-2">
                Medical service
              </label>
              <div className="flex flex-wrap gap-2 mb-6">
                {SERVICES.map((s) => (
                  <button
                    key={s}
                    onClick={() => setService(s)}
                    className={`text-xs font-medium px-3.5 py-2 rounded-full transition-all ${
                      service === s
                        ? 'btn-gradient text-white shadow-glow'
                        : 'bg-white/80 dark:bg-white/10 text-ink-light dark:text-white/60 hover:bg-primary-50'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3 bg-white/80 dark:bg-white/5 rounded-2xl px-4 py-3 shadow-card">
                  <HiOutlineCalendarDays className="w-5 h-5 text-primary-600 shrink-0" />
                  <div className="text-sm">
                    <p className="text-ink-light dark:text-white/40 text-xs">Date</p>
                    <p className="font-semibold text-ink dark:text-white">Mon, Jul 27</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/80 dark:bg-white/5 rounded-2xl px-4 py-3 shadow-card">
                  <HiOutlineClock className="w-5 h-5 text-primary-600 shrink-0" />
                  <div className="text-sm">
                    <p className="text-ink-light dark:text-white/40 text-xs">Time</p>
                    <p className="font-semibold text-ink dark:text-white">9:30 AM</p>
                  </div>
                </div>
              </div>

              <Button className="w-full justify-center" size="lg">
                Confirm Appointment
              </Button>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
