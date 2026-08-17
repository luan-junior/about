import { Container, Description } from './styles'

import { useTranslate } from '@/hooks/useTranslate'

export const Footer = () => {
  const { translator } = useTranslate()
  return (
    <Container>
      <Description>{translator('description footer')}</Description>
    </Container>
  )
}
