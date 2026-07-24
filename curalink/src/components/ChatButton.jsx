import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiOutlineChatBubbleLeftRight, HiXMark } from 'react-icons/hi2'

export default function ChatButton() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="w-72 glass-strong rounded-3xl shadow-glow p-5"
            role="dialog"
            aria-label="Quick help chat"
          >
            <p className="font-display font-semibold text-ink dark:text-white mb-1">Need a hand?</p>
            <p className="text-sm text-ink-light dark:text-white/60 mb-4">
              Our care team typically replies within 2 minutes.
            </p>
            <button className="w-full btn-gradient text-white text-sm font-semibold py-2.5 rounded-full shadow-glow">
              Start live chat
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close chat' : 'Open chat'}
        className="w-14 h-14 rounded-full btn-gradient text-white shadow-glow flex items-center justify-center hover:-translate-y-1 transition-transform"
      >
        {open ? <HiXMark className="w-6 h-6" /> : <HiOutlineChatBubbleLeftRight className="w-6 h-6" />}
      </button>
    </div>
  )
}
