import SectionHeading from '../components/SectionHeading'
import FAQAccordion from '../components/FAQAccordion'
import { FAQS } from '../utils/data'

export default function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-32 bg-surface-dim/60 dark:bg-white/[0.02]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Questions, answered"
          title="Everything you were about to ask"
        />
        <div className="mt-12">
          <FAQAccordion items={FAQS} />
        </div>
      </div>
    </section>
  )
}
