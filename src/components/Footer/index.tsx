import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { Flex } from '../Flex'
import { Container, Wrapper, Description, Link } from './styles'

import { useTranslate } from '@/hooks/useTranslate'

export const Footer = () => {
  const { translator } = useTranslate()
  return (
    <Container>
      <Wrapper>
        <Flex justifyContent="center" gap="1.5rem">
          <Link
            href="https://github.com/luan-junior"
            target="_blank"
            aria-label="GitHub"
          >
            <FaGithub size={31} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/luan-junior-silva-b3476812b/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={31} />
          </Link>
          <Link href="mailto:luan.juniorght7@gmail.com" aria-label="Email">
            <FaEnvelope size={31} />
          </Link>
        </Flex>
        <Description>{translator('description footer')}</Description>
      </Wrapper>
    </Container>
  )
}
