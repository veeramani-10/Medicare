import { HiOutlineBuildingOffice2 } from 'react-icons/hi2'
import { COMPANIES } from '../utils/data'

export default function TrustedCompanies() {
  const track = [...COMPANIES, ...COMPANIES]

  return (
    <section className="py-16 border-y border-primary-50 dark:border-white/5" aria-label="Trusted by leading healthcare networks">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold tracking-[0.2em] uppercase text-ink-light dark:text-white/40 mb-8">
          Trusted by care networks nationwide
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface-soft dark:from-[#0F0B1E] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface-soft dark:from-[#0F0B1E] to-transparent z-10" />

        <div className="flex w-max marquee-track">
          {track.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex items-center gap-2 mx-8 text-ink-light/70 dark:text-white/30 whitespace-nowrap select-none"
            >
              <HiOutlineBuildingOffice2 className="w-5 h-5" />
              <span className="font-display font-semibold text-lg">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
