import {
  Container,
  Title,
  Content,
  Card,
  CardTitle,
  CardDescription,
} from './styles'

import { ImageZoom } from '@/components/ImageZoom'
import { DATA_SOFTSKILLS } from '@/utils/constants'
import { useTranslate } from '@/hooks/useTranslate'

export const SoftSkills = () => {
  const { translator } = useTranslate()
  return (
    <Container>
      <Title>{translator('My Soft Skills')}</Title>
      <Content>
        {DATA_SOFTSKILLS.map((data, index) => (
          <Card key={index}>
            <ImageZoom
              src={data.image}
              alt={translator(data.title)}
              caption={translator(data.title)}
              width={300}
              height={300}
            />
            <CardTitle>{translator(data.title)}</CardTitle>
            <CardDescription>{translator(data.description)}</CardDescription>
          </Card>
        ))}
      </Content>
    </Container>
  )
}
