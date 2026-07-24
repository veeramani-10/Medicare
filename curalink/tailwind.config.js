/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#1B1730',
          light: '#4A4560',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          soft: '#FAFAFF',
          dim: '#F1EFFB',
        },
        primary: {
          50: '#F5F1FE',
          100: '#EBE3FD',
          200: '#D2C0FB',
          300: '#B394F6',
          400: '#9566F0',
          500: '#7C3AED',
          600: '#6B21D6',
          700: '#5B21B6',
          800: '#4A1A93',
          900: '#3B1575',
        },
        accent: {
          DEFAULT: '#3B82F6',
          light: '#60A5FA',
          dark: '#2563EB',
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"Space Grotesk"', 'monospace'],
      },
      backgroundImage: {
        'grad-primary': 'linear-gradient(135deg, #7C3AED 0%, #3B82F6 100%)',
        'grad-soft': 'linear-gradient(135deg, #F5F1FE 0%, #EFF6FF 100%)',
        'grad-radial-glow': 'radial-gradient(circle at 30% 20%, rgba(124,58,237,0.18), transparent 60%)',
      },
      boxShadow: {
        soft: '0 8px 30px rgba(91, 33, 182, 0.08)',
        card: '0 4px 24px rgba(27, 23, 48, 0.06)',
        glow: '0 8px 40px rgba(124, 58, 237, 0.25)',
        'glow-blue': '0 8px 40px rgba(59, 130, 246, 0.25)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(2deg)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(30px,-40px) scale(1.1)' },
          '66%': { transform: 'translate(-20px,20px) scale(0.95)' },
        },
        pulseLine: {
          '0%': { strokeDashoffset: 1000 },
          '100%': { strokeDashoffset: 0 },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        ripple: {
          '0%': { transform: 'scale(0)', opacity: '0.5' },
          '100%': { transform: 'scale(4)', opacity: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-400px 0' },
          '100%': { backgroundPosition: '400px 0' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        floatSlow: 'floatSlow 8s ease-in-out infinite',
        blob: 'blob 12s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
        ripple: 'ripple 0.6s linear',
        shimmer: 'shimmer 1.6s infinite linear',
      },
    },
  },
  plugins: [],
}
