import { createFileRoute } from '@tanstack/react-router'

import { HardSkills } from '@/pages/hardskills'

export const Route = createFileRoute('/hard-skills')({
  component: HardSkills,
})