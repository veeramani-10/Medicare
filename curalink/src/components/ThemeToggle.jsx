import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi2'
import useTheme from '../hooks/useTheme'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
      className="relative w-14 h-8 rounded-full flex items-center px-1 transition-colors duration-300 bg-primary-100 dark:bg-white/10"
    >
      <span
        className={`absolute w-6 h-6 rounded-full bg-white shadow-card flex items-center justify-center transition-transform duration-300 ${
          isDark ? 'translate-x-6' : 'translate-x-0'
        }`}
      >
        {isDark ? (
          <HiOutlineMoon className="w-3.5 h-3.5 text-primary-600" />
        ) : (
          <HiOutlineSun className="w-3.5 h-3.5 text-primary-600" />
        )}
      </span>
    </button>
  )
}
