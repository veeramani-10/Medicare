import { motion } from 'framer-motion'
import { HiOutlineHeart, HiOutlineCheckCircle, HiPaperAirplane } from 'react-icons/hi2'
import SectionHeading from '../components/SectionHeading'
import GlassCard from '../components/GlassCard'
import FloatingBlob from '../components/FloatingBlob'

export default function DashboardShowcase() {
  return (
    <section id="dashboard" className="relative py-24 md:py-32 bg-surface-dim/60 dark:bg-white/[0.02] overflow-hidden">
      <FloatingBlob className="w-80 h-80 top-10 -left-20" color="blue" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <SectionHeading
          align="left"
          eyebrow="Your health, at a glance"
          title="One dashboard for appointments, vitals, and messages"
          description="Everything from your last consult to next week's follow-up lives in a single view — on your phone or in the browser, always in sync."
          className="lg:pr-8"
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="relative flex justify-center"
        >
          {/* Phone mockup */}
          <div className="relative w-[280px] sm:w-[300px] rounded-[2.75rem] border-[10px] border-ink bg-ink shadow-glow">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-ink rounded-b-2xl z-10" />
            <div className="rounded-[2rem] overflow-hidden bg-white dark:bg-[#150F28]">
              <div className="bg-grad-primary px-5 pt-8 pb-6 text-white">
                <p className="text-xs opacity-80">Good morning,</p>
                <p className="font-display font-bold text-lg">Jordan Ellis</p>
              </div>

              {/* Analytics cards */}
              <div className="px-4 -mt-4 grid grid-cols-2 gap-3">
                <div className="bg-white dark:bg-[#1D1638] rounded-2xl shadow-card p-3">
                  <HiOutlineHeart className="w-4 h-4 text-primary-600 mb-1" />
                  <p className="text-sm font-bold text-ink dark:text-white">72 bpm</p>
                  <p className="text-[10px] text-ink-light dark:text-white/50">Heart rate</p>
                </div>
                <div className="bg-white dark:bg-[#1D1638] rounded-2xl shadow-card p-3">
                  <HiOutlineCheckCircle className="w-4 h-4 text-accent mb-1" />
                  <p className="text-sm font-bold text-ink dark:text-white">3 of 3</p>
                  <p className="text-[10px] text-ink-light dark:text-white/50">Meds taken</p>
                </div>
              </div>

              {/* Appointment card */}
              <div className="px-4 mt-4">
                <p className="text-xs font-semibold text-ink-light dark:text-white/50 mb-2">Upcoming</p>
                <div className="rounded-2xl border border-primary-100 dark:border-white/10 p-3 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-50 dark:bg-white/10 flex items-center justify-center text-xs font-bold text-primary-700 dark:text-primary-300">
                    9:30
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-ink dark:text-white">Dr. Amara Chen</p>
                    <p className="text-[10px] text-ink-light dark:text-white/50">Cardiology follow-up</p>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                </div>
              </div>

              {/* Chat UI */}
              <div className="px-4 mt-4 pb-6">
                <p className="text-xs font-semibold text-ink-light dark:text-white/50 mb-2">Messages</p>
                <div className="rounded-2xl bg-surface-dim dark:bg-white/5 p-3 space-y-2">
                  <div className="max-w-[75%] bg-white dark:bg-[#1D1638] rounded-xl rounded-bl-sm px-3 py-2 text-[11px] text-ink dark:text-white/80 shadow-card">
                    Your latest readings look great, keep it up!
                  </div>
                  <div className="max-w-[75%] ml-auto bg-primary-600 text-white rounded-xl rounded-br-sm px-3 py-2 text-[11px]">
                    Thank you, doctor 🙏
                  </div>
                  <div className="flex items-center gap-2 bg-white dark:bg-[#1D1638] rounded-full px-3 py-1.5 shadow-card">
                    <span className="text-[11px] text-ink-light dark:text-white/40 flex-1">Write a message…</span>
                    <HiPaperAirplane className="w-3.5 h-3.5 text-primary-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating badge */}
          <GlassCard strong className="absolute -right-2 top-10 hidden sm:flex px-4 py-3 items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-semibold text-ink dark:text-white">Synced in real time</span>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}
