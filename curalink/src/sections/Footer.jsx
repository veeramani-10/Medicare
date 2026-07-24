import { useState } from 'react'
import { HiOutlineHeart } from 'react-icons/hi2'
import { FaTwitter, FaLinkedin, FaInstagram, FaFacebookF } from 'react-icons/fa'
import Button from '../components/Button'

const FOOTER_COLUMNS = [
  {
    title: 'Product',
    links: ['Features', 'How it works', 'Pricing', 'For clinics'],
  },
  {
    title: 'Company',
    links: ['About us', 'Careers', 'Press', 'Contact'],
  },
  {
    title: 'Resources',
    links: ['Help center', 'Privacy policy', 'Terms of service', 'Security'],
  },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <footer className="pt-20 pb-8 bg-ink text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 pb-16 border-b border-white/10">
          <div>
            <a href="#home" className="flex items-center gap-2 font-display font-extrabold text-xl text-white mb-4">
              <span className="w-9 h-9 rounded-xl btn-gradient text-white flex items-center justify-center shadow-glow">
                <HiOutlineHeart className="w-5 h-5" />
              </span>
              Medicare
            </a>
            <p className="max-w-sm text-sm leading-relaxed">
              Premium virtual healthcare — board-certified doctors, real-time
              scheduling, and secure records, built around the moment you
              actually need care.
            </p>
          </div>

          <div>
            <p className="font-display font-semibold text-white mb-3">Stay in the loop</p>
            <p className="text-sm mb-4 max-w-sm">
              One email a month with health tips and product updates. No spam, ever.
            </p>
            {submitted ? (
              <p className="text-sm font-semibold text-primary-300">You're subscribed — welcome aboard!</p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="flex-1 rounded-full px-5 py-3 bg-white/10 border border-white/10 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary-400"
                />
                <Button type="submit" size="md">
                  Subscribe
                </Button>
              </form>
            )}
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-10 py-14 border-b border-white/10">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="font-display font-semibold text-white mb-4">{col.title}</p>
              <ul className="space-y-2.5 text-sm">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-primary-300 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-sm">
          <p>&copy; {new Date().getFullYear()} Medicare. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {[FaTwitter, FaLinkedin, FaInstagram, FaFacebookF].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-500 transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
