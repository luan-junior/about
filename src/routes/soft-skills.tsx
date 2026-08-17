import { createFileRoute } from '@tanstack/react-router'

import { SoftSkills } from '@/pages/softskills'

export const Route = createFileRoute('/soft-skills')({
  component: SoftSkills,
})
