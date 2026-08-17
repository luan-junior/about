import { createFileRoute } from '@tanstack/react-router'

import { Family } from '@/pages/family'

export const Route = createFileRoute('/family')({
  component: Family,
})