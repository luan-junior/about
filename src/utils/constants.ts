import commitment from '@/assets/images/soft-skills/commitment.jpg'
import initiative from '@/assets/images/soft-skills/initiative.jpg'
import problemSolving from '@/assets/images/soft-skills/problem-solving.jpeg'
import proactivity from '@/assets/images/soft-skills/proactivity.jpg'
import teamworkAndCollaboration from '@/assets/images/soft-skills/teamwork-and-collaboration.jpeg'
import adaptability from '@/assets/images/soft-skills/adaptability.jpg'
import selfTaught from '@/assets/images/soft-skills/self-taught.jpg'
import timeManagement from '@/assets/images/soft-skills/time-management.jpg'
import resilience from '@/assets/images/soft-skills/resilience.jpg'
import selfManagement from '@/assets/images/soft-skills/self-management.jpg'

export const MENU = [
  { label: 'Home', to: '/' },
  { label: 'Soft Skills', to: '/soft-skills' },
  { label: 'Family', to: '/family' },
]

export const LANGUAGES = [
  { label: 'Portuguese', value: 'pt' },
  { label: 'English', value: 'en' },
  { label: 'Spanish', value: 'es' },
]

export const DATA_SOFTSKILLS = [
  {
    image: commitment,
    title: 'Commitment',
    description:
      'I maintain focus and discipline to meet goals and deliver consistent results.',
  },
  {
    image: initiative,
    title: 'Initiative',
    description:
      'I seek opportunities to act before being asked, anticipating needs and adding value.',
  },
  {
    image: problemSolving,
    title: 'Problem Solving',
    description:
      'I analyze scenarios objectively and propose effective alternatives to overcome obstacles.',
  },
  {
    image: proactivity,
    title: 'Proactivity',
    description:
      'I have a practical attitude and like to take the lead in situations that require immediate action.',
  },
  {
    image: selfManagement,
    title: 'Self-Management',

    description:
      'I organize my tasks independently, balancing priorities efficiently.',
  },
  {
    image: adaptability,
    title: 'Adaptability',

    description:
      'I approach change with flexibility, quickly adjusting my performance to new demands.',
  },
  {
    image: selfTaught,
    title: 'Self-taught',

    description:
      'I am adept at learning independently, exploring new technologies and practices.',
  },
  {
    image: teamworkAndCollaboration,
    title: 'Teamwork and Collaboration',

    description:
      'I value team spirit, contributing ideas and supporting colleagues to achieve common goals.',
  },
  {
    image: timeManagement,
    title: 'Time Management',

    description:
      'I plan and execute activities in an organized manner, optimizing deadlines without compromising quality.',
  },
  {
    image: resilience,
    title: 'Resilience',

    description:
      'I maintain balance and determination even in the face of challenges and high pressure.',
  },
]
