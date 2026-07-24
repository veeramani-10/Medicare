import { motion } from 'framer-motion'
import Button from '../components/Button'
import FloatingBlob from '../components/FloatingBlob'

export default function CTABanner() {
  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
        className="relative max-w-7xl mx-auto rounded-5xl overflow-hidden bg-grad-primary px-8 sm:px-16 py-16 sm:py-20 text-center shadow-glow"
      >
        <FloatingBlob className="w-72 h-72 -top-16 -left-16 bg-white/10" />
        <FloatingBlob className="w-72 h-72 -bottom-16 -right-16 bg-white/10" />

        <div className="relative">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white max-w-2xl mx-auto leading-tight">
            Your next appointment is two minutes away
          </h2>
          <p className="mt-4 text-white/80 max-w-lg mx-auto">
            Join thousands who stopped putting off care because booking felt like a chore.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              as="a"
              href="#appointment"
              size="lg"
              className="bg-white text-primary-700 shadow-none hover:shadow-none hover:-translate-y-0.5"
              style={{ backgroundImage: 'none' }}
            >
              Book Your Visit
            </Button>
            <Button as="a" href="#faq" variant="outline" size="lg" className="border-white/50 text-white hover:bg-white/10">
              Talk to Our Team
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
