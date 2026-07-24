import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import VitalLine from '../components/VitalLine'
import { FEATURES } from '../utils/data'

export default function Features() {
  return (
    <section id="features" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Curalink"
          title="Every visit, designed around the moment you actually need care"
          description="No generic feature list — every part of Curalink exists to shorten the gap between 'something feels off' and 'someone qualified is looking at it.'"
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative rounded-3xl p-[1.5px] bg-gradient-to-br from-primary-200 via-transparent to-accent/40 hover:from-primary-500 hover:to-accent transition-all duration-500"
            >
              <div className="relative h-full rounded-3xl bg-white dark:bg-[#150F28] p-7 shadow-card group-hover:shadow-glow group-hover:-translate-y-1.5 transition-all duration-500">
                <span className="inline-flex w-12 h-12 items-center justify-center rounded-2xl bg-primary-50 dark:bg-white/10 text-primary-600 dark:text-primary-300 mb-5 group-hover:scale-110 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                  <feature.icon className="w-6 h-6" />
                </span>
                <h3 className="font-display font-bold text-lg text-ink dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-ink-light dark:text-white/60 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <VitalLine className="mt-24" />
    </section>
  )
}
