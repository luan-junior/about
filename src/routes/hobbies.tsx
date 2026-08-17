import { createFileRoute } from '@tanstack/react-router'

import { Hobbies } from '@/pages/hobbies'

export const Route = createFileRoute('/hobbies')({
  component: Hobbies,
})