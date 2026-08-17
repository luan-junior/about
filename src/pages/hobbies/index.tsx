import { useTranslate } from '@/hooks/useTranslate'

export const Hobbies = () => {
  const { translator } = useTranslate()
  return <h1>{translator('Hobbies')}</h1>
}
