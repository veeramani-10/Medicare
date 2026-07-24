import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiOutlineHeart, HiBars3, HiXMark } from 'react-icons/hi2'
import { NAV_LINKS } from '../utils/data'
import Button from './Button'
import ThemeToggle from './ThemeToggle'
import useScrollProgress from '../hooks/useScrollProgress'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { scrolled } = useScrollProgress()

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
          scrolled ? 'max-w-6xl' : ''
        }`}
      >
        <nav
          className={`flex items-center justify-between rounded-full px-5 py-3 transition-all duration-300 ${
            scrolled ? 'glass-strong shadow-soft' : 'bg-transparent'
          }`}
          aria-label="Main navigation"
        >
          <a href="#home" className="flex items-center gap-2 font-display font-extrabold text-xl text-ink dark:text-white">
            <span className="w-9 h-9 rounded-xl btn-gradient text-white flex items-center justify-center shadow-glow">
              <HiOutlineHeart className="w-5 h-5" />
            </span>
            Medicare
          </a>

          <ul className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-ink-light dark:text-white/70 hover:text-primary-600 dark:hover:text-primary-300 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
            <a href="#login" className="text-sm font-semibold text-ink dark:text-white hover:text-primary-600 transition-colors">
              Log in
            </a>
            <Button as="a" href="#appointment" size="sm">
              Get Started
            </Button>
          </div>

          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full glass"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <HiXMark className="w-5 h-5" /> : <HiBars3 className="w-5 h-5" />}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="mt-3 glass-strong rounded-3xl p-6 flex flex-col gap-4 shadow-soft">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-sm font-medium text-ink dark:text-white/80"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="flex items-center justify-between pt-2 border-t border-primary-100 dark:border-white/10">
                  <ThemeToggle />
                  <a href="#login" className="text-sm font-semibold text-ink dark:text-white">
                    Log in
                  </a>
                </div>
                <Button as="a" href="#appointment" className="w-full justify-center">
                  Get Started
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
