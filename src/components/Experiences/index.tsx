import { Title } from '../Title'
import { LIST_EXPERIENCES_DATA } from './utils'
import {
  Container,
  ContainerRelative,
  LineVertical,
  Wrapper,
  WrapperContentItem,
  LineCircle,
  LineCircleBackground,
  LineCircleBackgroundRounded,
  Content,
  ContentWrap,
  ContentWrapper,
  ContentHeader,
  ContentHeaderPosition,
  ContentHeaderWrapper,
  ContentHeaderPeriod,
  ContentHeaderDescription,
  ContentActivity,
  ContentActivityTitle,
  ContentList,
  ContentTechnologies,
  ContentTechnologiesTitle,
  ContentTechnologiesTag,
  ContentWrapperIcon,
} from './styles'
import { Flex } from '../Flex'
import { useTranslate } from '@/hooks/useTranslate'

export const Experiences = () => {
  const { translator } = useTranslate()
  return (
    <Container>
      <Title title={translator('Experience')} />
      <ContainerRelative>
        <LineVertical />
        <Wrapper>
          {LIST_EXPERIENCES_DATA.map((experience, index) => (
            <WrapperContentItem>
              <LineCircle key={index}>
                <LineCircleBackground>
                  <LineCircleBackgroundRounded />
                </LineCircleBackground>
              </LineCircle>
              <Content>
                <ContentWrap />
                <ContentWrapper>
                  <ContentHeader>
                    <ContentHeaderPosition>
                      {translator(experience.position)}
                    </ContentHeaderPosition>
                    <ContentHeaderWrapper>
                      <p>{experience.company}</p>
                      <span>{experience.location}</span>
                    </ContentHeaderWrapper>
                    <ContentHeaderPeriod>
                      {translator(experience.period)}
                    </ContentHeaderPeriod>
                  </ContentHeader>
                  <ContentHeaderDescription>
                    {translator(experience.description)}
                  </ContentHeaderDescription>
                  <ContentActivity>
                    <ContentActivityTitle>
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      {translator('Activities and Responsibilities')}
                    </ContentActivityTitle>
                    <ContentList>
                      {experience.activities.map((activity, index) => (
                        <li key={index}>
                          <span>▸</span>
                          {translator(activity)}
                        </li>
                      ))}
                    </ContentList>
                  </ContentActivity>
                  <ContentTechnologies>
                    <ContentTechnologiesTitle>
                      {translator('Technologies Used')}
                    </ContentTechnologiesTitle>
                    <Flex flexWrap="wrap" gap=".5rem">
                      {experience.stacks.map((tech, index) => (
                        <ContentTechnologiesTag key={index}>
                          {tech}
                        </ContentTechnologiesTag>
                      ))}
                    </Flex>
                  </ContentTechnologies>
                  <ContentWrapperIcon>
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fill-rule="evenodd"
                        d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </ContentWrapperIcon>
                </ContentWrapper>
              </Content>
            </WrapperContentItem>
          ))}
        </Wrapper>
      </ContainerRelative>
    </Container>
  )
}
