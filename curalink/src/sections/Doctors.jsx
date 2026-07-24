import { motion } from 'framer-motion'
import { HiStar } from 'react-icons/hi2'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import { DOCTORS } from '../utils/data'

export default function Doctors() {
  return (
    <section id="doctors" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Meet the care team"
          title="Board-certified doctors, ready when you are"
          description="Every physician on Curalink is licensed, vetted, and rated by real patients — browse specialties and book directly."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DOCTORS.map((doc, i) => (
            <motion.div
              key={doc.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className="group bg-white dark:bg-[#150F28] rounded-3xl shadow-card hover:shadow-glow p-6 text-center transition-all duration-500 hover:-translate-y-1.5"
            >
              <div className="relative w-24 h-24 mx-auto mb-4">
                <img
                  src={doc.img}
                  alt={`Portrait of ${doc.name}`}
                  loading="lazy"
                  className="w-full h-full object-cover rounded-full ring-4 ring-primary-50 dark:ring-white/10 group-hover:ring-primary-200 transition-all"
                />
                <span
                  className={`absolute bottom-1 right-1 w-4 h-4 rounded-full border-2 border-white dark:border-[#150F28] ${
                    doc.online ? 'bg-green-500' : 'bg-gray-300'
                  }`}
                  title={doc.online ? 'Online now' : 'Offline'}
                />
              </div>

              <h3 className="font-display font-bold text-ink dark:text-white">{doc.name}</h3>
              <p className="text-sm text-primary-600 dark:text-primary-300 mb-1">{doc.specialty}</p>
              <p className="text-xs text-ink-light dark:text-white/50 mb-3">{doc.experience}</p>

              <div className="flex items-center justify-center gap-1 mb-5 text-sm">
                <HiStar className="w-4 h-4 text-yellow-400" />
                <span className="font-semibold text-ink dark:text-white">{doc.rating}</span>
                <span className="text-ink-light dark:text-white/40">({doc.reviews})</span>
              </div>

              <Button size="sm" className="w-full justify-center">
                Book Appointment
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
