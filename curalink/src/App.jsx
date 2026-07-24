import { Suspense, lazy, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Features from './sections/Features'
import ScrollProgressBar from './components/ScrollProgressBar'
import BackToTop from './components/BackToTop'
import CustomCursor from './components/CustomCursor'
import ChatButton from './components/ChatButton'
import SkeletonCard from './components/SkeletonCard'

// Lazy-load below-the-fold sections to keep the initial bundle lean
const DashboardShowcase = lazy(() => import('./sections/DashboardShowcase'))
const TrustedCompanies = lazy(() => import('./sections/TrustedCompanies'))
const Doctors = lazy(() => import('./sections/Doctors'))
const Appointment = lazy(() => import('./sections/Appointment'))
const Testimonials = lazy(() => import('./sections/Testimonials'))
const FAQ = lazy(() => import('./sections/FAQ'))
const CTABanner = lazy(() => import('./sections/CTABanner'))
const Footer = lazy(() => import('./sections/Footer'))

function SectionSkeleton() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {Array.from({ length: 4 }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  )
}

export default function App() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {!loaded ? (
        <motion.div
          key="loader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[200] bg-surface-soft flex items-center justify-center"
        >
          <div className="w-12 h-12 rounded-full border-4 border-primary-200 border-t-primary-600 animate-spin" />
        </motion.div>
      ) : (
        <motion.div
          key="page"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <CustomCursor />
          <ScrollProgressBar />
          <Navbar />

          <main>
            <Hero />
            <Features />
            <Suspense fallback={<SectionSkeleton />}>
              <DashboardShowcase />
              <TrustedCompanies />
              <Doctors />
              <Appointment />
              <Testimonials />
              <FAQ />
              <div className="py-8">
                <CTABanner />
              </div>
            </Suspense>
          </main>

          <Suspense fallback={<div className="h-40" />}>
            <Footer />
          </Suspense>

          <BackToTop />
          <ChatButton />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
