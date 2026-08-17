import {
  Header,
  Container,
  Title,
  Description,
  Figure,
  Figcaption,
} from './styles'
import { LIST_IMAGES } from './utils'
import { useTranslate } from '@/hooks/useTranslate'

export const Family = () => {
  const { translator } = useTranslate()
  return (
    <>
      <Header>
        <Title>{translator('Family moments')}</Title>
        <Description>{translator('family.description')}</Description>
      </Header>
      <Container>
        {LIST_IMAGES.map((data, index) => (
          <Figure key={index}>
            <img key={index} src={data.src} alt={data.title} />
            <Figcaption>{data.title}</Figcaption>
          </Figure>
        ))}
      </Container>
    </>
  )
}
