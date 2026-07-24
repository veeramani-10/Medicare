import {
  HiOutlineVideoCamera,
  HiOutlineCalendarDays,
  HiOutlineShieldCheck,
  HiOutlineChatBubbleLeftRight,
  HiOutlineDocumentText,
  HiOutlineHeart,
} from 'react-icons/hi2'

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#dashboard' },
  { label: 'Doctors', href: '#doctors' },
  { label: 'Pricing', href: '#appointment' },
  { label: 'FAQ', href: '#faq' },
]

export const HERO_STATS = [
  { label: 'Patients served', value: 128000, suffix: '+' },
  { label: 'Avg. response time', value: 3, suffix: ' min' },
  { label: 'Verified doctors', value: 640, suffix: '+' },
]

export const FEATURES = [
  {
    icon: HiOutlineVideoCamera,
    title: 'HD Video Consultations',
    desc: 'Face-to-face care from your couch. Crystal-clear calls with end-to-end encryption, no app install required.',
  },
  {
    icon: HiOutlineCalendarDays,
    title: 'Instant Scheduling',
    desc: 'See real-time availability and book a same-day slot in under a minute — no phone tag, no waiting room.',
  },
  {
    icon: HiOutlineShieldCheck,
    title: 'Bank-Grade Privacy',
    desc: 'Your records stay yours. HIPAA-aligned infrastructure with full audit trails on every access.',
  },
  {
    icon: HiOutlineChatBubbleLeftRight,
    title: 'Secure Messaging',
    desc: 'Message your care team between visits and get answers without booking a whole new appointment.',
  },
  {
    icon: HiOutlineDocumentText,
    title: 'Digital Prescriptions',
    desc: 'E-prescriptions sent straight to your pharmacy of choice, plus a running history you can export anytime.',
  },
  {
    icon: HiOutlineHeart,
    title: 'Continuous Care Plans',
    desc: 'Personalized follow-up schedules and reminders so chronic care never falls through the cracks.',
  },
]

export const COMPANIES = [
  'Meridian Health',
  'Northgate Clinics',
  'Aurora Medical',
  'Bluewave Health',
  'Solace Care',
  'Ironbridge Medical',
  'Harborview Health',
  'Cascade Wellness',
]

export const DOCTORS = [
  {
    name: 'Dr. Amara Chen',
    specialty: 'Cardiologist',
    experience: '12 yrs experience',
    rating: 4.9,
    reviews: 312,
    online: true,
    img: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    name: 'Dr. Marcus Webb',
    specialty: 'Dermatologist',
    experience: '9 yrs experience',
    rating: 4.8,
    reviews: 204,
    online: true,
    img: 'https://randomuser.me/api/portraits/men/54.jpg',
  },
  {
    name: 'Dr. Priya Nair',
    specialty: 'Pediatrician',
    experience: '15 yrs experience',
    rating: 5.0,
    reviews: 458,
    online: false,
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Dr. Elias Kim',
    specialty: 'Psychiatrist',
    experience: '7 yrs experience',
    rating: 4.7,
    reviews: 176,
    online: true,
    img: 'https://randomuser.me/api/portraits/men/22.jpg',
  },
]

export const SERVICES = [
  'General Consultation',
  'Cardiology',
  'Dermatology',
  'Mental Health',
  'Pediatrics',
  'Nutrition Coaching',
]

export const TESTIMONIALS = [
  {
    name: 'Jordan Ellis',
    role: 'Patient since 2023',
    quote: 'I booked a same-day consult during a work trip and had a prescription sent to a local pharmacy within the hour. It genuinely changed how I think about healthcare.',
    img: 'https://randomuser.me/api/portraits/men/11.jpg',
  },
  {
    name: 'Sofia Marino',
    role: 'Patient since 2022',
    quote: 'The follow-up reminders alone are worth it. My care plan for managing migraines finally feels organized instead of scattered across three apps.',
    img: 'https://randomuser.me/api/portraits/women/21.jpg',
  },
  {
    name: 'Ravi Patel',
    role: 'Patient since 2024',
    quote: 'Video quality is better than most work meetings I sit through. My cardiologist could see my home monitor readings live during the call.',
    img: 'https://randomuser.me/api/portraits/men/76.jpg',
  },
]

export const FAQS = [
  {
    q: 'How quickly can I see a doctor?',
    a: 'Most patients are matched with an available, licensed doctor in under 3 minutes for urgent concerns, and can book a scheduled visit for any day of the week.',
  },
  {
    q: 'Is my information kept private?',
    a: 'Yes. All consultations and records are encrypted end-to-end and handled under HIPAA-aligned safeguards, with full access logs available to you at any time.',
  },
  {
    q: 'Can I get a prescription through Curalink?',
    a: 'Licensed physicians on Curalink can issue e-prescriptions where clinically appropriate, sent directly to your preferred pharmacy.',
  },
  {
    q: 'Does insurance cover these visits?',
    a: 'Curalink works with most major insurance providers. You can check your coverage during checkout, or pay a transparent flat rate with no surprise fees.',
  },
  {
    q: 'What devices do I need?',
    a: 'Any smartphone, tablet, or computer with a camera and a stable internet connection — no separate app download is required, everything runs in your browser.',
  },
]
