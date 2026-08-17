import { Title } from '../Title'
import { LIST_TRAINING_DATA } from './utils'
import {
  Container,
  ContainerRelative,
  LineVertical,
  Wrapper,
  WrapperContentItem,
  LineCircle,
  LineCircleBackground,
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
  ContentHeaderSpan,
  ContentHeaderCR,
  Concluded,
} from './styles'
import { Flex } from '../Flex'
import { useTranslate } from '@/hooks/useTranslate'

export const Training = () => {
  const { translator } = useTranslate()
  return (
    <Container>
      <Title title={translator('Education')} />
      <ContainerRelative>
        <LineVertical />
        <Wrapper>
          {LIST_TRAINING_DATA.map((experience, index) => (
            <WrapperContentItem key={index}>
              <LineCircle>
                <LineCircleBackground />
              </LineCircle>
              <Content>
                <ContentWrap />
                <ContentWrapper>
                  <ContentHeader>
                    <Concluded concluded={experience.concluded}>
                      <span>
                        {experience.concluded
                          ? translator('Completed')
                          : translator('In progress')}
                      </span>
                    </Concluded>
                    <ContentHeaderPosition>
                      {translator(experience.course)}
                    </ContentHeaderPosition>
                    <ContentHeaderWrapper>
                      <p>{experience.institution}</p>
                    </ContentHeaderWrapper>
                    <Flex
                      justifyContent="space-between"
                      alignItems="center"
                      gap=".75rem"
                      style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}
                    >
                      <ContentHeaderPeriod>
                        {experience.period}
                      </ContentHeaderPeriod>
                      <Flex gap=".75rem">
                        <ContentHeaderSpan>
                          {experience.location}
                        </ContentHeaderSpan>
                        {experience.cr && (
                          <ContentHeaderCR>{experience.cr}</ContentHeaderCR>
                        )}
                      </Flex>
                    </Flex>
                    <ContentHeaderDescription>
                      {translator(experience.description)}
                    </ContentHeaderDescription>
                  </ContentHeader>

                  <ContentActivity>
                    <ContentActivityTitle>
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fill-rule="evenodd"
                          d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      {translator('Highlights')}
                    </ContentActivityTitle>
                    <ContentList>
                      {experience.highlights.map((activity, index) => (
                        <li key={index}>
                          <span>★</span>
                          {translator(activity)}
                        </li>
                      ))}
                    </ContentList>
                  </ContentActivity>
                  <ContentTechnologies>
                    <ContentTechnologiesTitle>
                      {translator('Main Subjects')}
                    </ContentTechnologiesTitle>
                    <Flex flexWrap="wrap" gap=".5rem">
                      {experience.disciplines.map((tech, index) => (
                        <ContentTechnologiesTag key={index}>
                          {translator(tech)}
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
