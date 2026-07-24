import SectionHeading from '../components/SectionHeading'
import TestimonialCarousel from '../components/TestimonialCarousel'
import VitalLine from '../components/VitalLine'
import { TESTIMONIALS } from '../utils/data'

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Patient stories"
          title="Real visits, real relief"
          description="A few words from people who found care faster than they expected to."
        />
        <div className="mt-16">
          <TestimonialCarousel items={TESTIMONIALS} />
        </div>
      </div>
      <VitalLine className="mt-24" flip />
    </section>
  )
}
