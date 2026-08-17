import { useTranslate } from '@/hooks/useTranslate'

export const HardSkills = () => {
  const { translator } = useTranslate()
  return <h1>{translator('Hard Skills')}</h1>
}
