import { FaCode, FaMobileScreenButton, FaDatabase } from 'react-icons/fa6'
import { FcDataConfiguration } from 'react-icons/fc'
import { Flex } from '../Flex'
import { Title } from '../Title'
import { useTranslate } from '@/hooks/useTranslate'
import {
  Card,
  Container,
  CardWrap,
  CardIconWrap,
  CardHeader,
  ContainerItems,
  ContainerItemTitle,
  ContainerItemPct,
  ProgressContainer,
  ProgressContent,
} from './styles'

export const Habilities = () => {
  const { translator } = useTranslate()
  const dataList = [
    {
      icon: FaCode,
      title: 'Frontend Development',
      hardKills: [
        {
          name: 'React.js',
          pct: 95,
        },
        {
          name: 'Next.js',
          pct: 70,
        },
        {
          name: 'JavaScript/TypeScript',
          pct: 90,
        },
        {
          name: 'HTML5/CSS3',
          pct: 95,
        },
        {
          name: 'TailwindCSS',
          pct: 30,
        },
      ],
    },
    {
      icon: FaMobileScreenButton,
      title: 'Mobile Development',
      hardKills: [
        {
          name: 'React Native',
          pct: 90,
        },
        {
          name: 'Flutter',
          pct: 30,
        },
        {
          name: 'Dart',
          pct: 30,
        },
        {
          name: 'Android',
          pct: 50,
        },
      ],
    },
    {
      icon: FaDatabase,
      title: 'Backend and Database',
      hardKills: [
        {
          name: 'NodeJS',
          pct: 90,
        },
        {
          name: 'Express',
          pct: 90,
        },
        {
          name: 'Fastify',
          pct: 90,
        },
        {
          name: 'NestJS',
          pct: 90,
        },
        {
          name: 'PostgreSQL',
          pct: 90,
        },
        {
          name: 'MySQL',
          pct: 90,
        },
        {
          name: 'Oracle',
          pct: 70,
        },
        {
          name: 'MongoDB',
          pct: 70,
        },
        {
          name: 'Redis',
          pct: 50,
        },
      ],
    },
    {
      icon: FcDataConfiguration,
      title: 'Other Tools',
      hardKills: [
        {
          name: 'Git/GitHub',
          pct: 90,
        },
        {
          name: 'Azure',
          pct: 80,
        },
        {
          name: 'Docker',
          pct: 90,
        },
        {
          name: 'CI/CD',
          pct: 90,
        },
        {
          name: 'Automated Test Development',
          pct: 90,
        },
        {
          name: 'Figma',
          pct: 90,
        },
        {
          name: 'Kubernetes',
          pct: 30,
        },
        {
          name: 'Terraform',
          pct: 40,
        },
        {
          name: 'Linux',
          pct: 90,
        },
      ],
    },
  ]
  return (
    <Container>
      <Title title={translator('My Skills')} />
      <CardWrap>
        {dataList.map((data, index) => (
          <Card key={index}>
            <CardHeader>
              <CardIconWrap>
                <data.icon />
              </CardIconWrap>
              <h3
                data-v-23d3527b=""
                className="text-purple-400 group-hover:text-purple-300 text-xl font-bold"
              >
                {translator(data.title)}
              </h3>
            </CardHeader>
            <Flex flexDirection="column" gap="22px">
              {data.hardKills.map((hardKill, index) => (
                <ContainerItems key={index}>
                  <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    style={{ marginBottom: '.5rem' }}
                  >
                    <ContainerItemTitle>
                      {translator(hardKill.name)}
                    </ContainerItemTitle>
                    <ContainerItemPct>{hardKill.pct}% </ContainerItemPct>
                  </Flex>
                  <div>
                    <ProgressContainer>
                      <ProgressContent pct={hardKill.pct}></ProgressContent>
                    </ProgressContainer>
                  </div>
                </ContainerItems>
              ))}
            </Flex>
          </Card>
        ))}
      </CardWrap>
    </Container>
  )
}
