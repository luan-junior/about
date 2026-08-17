import { useEffect, useMemo, useState } from 'react'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'
import { Flex } from '../Flex'
import { Title } from '../Title'
import { LIST_PROJECT_DATA } from './utils'
import { useTranslate } from '@/hooks/useTranslate'
import {
  Container,
  SectionCarousel,
  SectionCarouselContainer,
  SectionCarouselContainerRelative,
  ButtonCarouselLeft,
  ButtonCarouselRight,
  ContainerIndicator,
  ButtonIndicator,
  CarouselContainer,
  CarouselWrapper,
  CarouselSlide,
  ProjectCard,
  ProjectCardWrapper,
  ProjectCardWrapperOverlay,
  ProjectCardWrapperText,
  ProjectContent,
  ProjectContentTitle,
  ProjectContentDescription,
  ProjectContentTag,
  ProjectContentLink,
} from './styles'

function useSlidesPerView() {
  const [slidesPerView, setSlidesPerView] = useState(1)

  useEffect(() => {
    const mqMd = window.matchMedia('(min-width: 768px)')
    const mqLg = window.matchMedia('(min-width: 1024px)')

    const update = () => {
      if (mqLg.matches) setSlidesPerView(3)
      else if (mqMd.matches) setSlidesPerView(2)
      else setSlidesPerView(1)
    }

    update()
    mqMd.addEventListener('change', update)
    mqLg.addEventListener('change', update)
    return () => {
      mqMd.removeEventListener('change', update)
      mqLg.removeEventListener('change', update)
    }
  }, [])

  return slidesPerView
}

export const Projects = () => {
  const { translator } = useTranslate()
  const slidesPerView = useSlidesPerView()
  const maxIndex = Math.max(0, LIST_PROJECT_DATA.length - slidesPerView)

  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    setActiveIndex((i) => Math.min(i, maxIndex))
  }, [maxIndex])

  const pageCount = maxIndex + 1

  const pageIndices = useMemo(
    () => Array.from({ length: pageCount }, (_, i) => i),
    [pageCount],
  )

  const handlePrevious = () => {
    setActiveIndex((i) => Math.max(0, i - 1))
  }

  const handleNext = () => {
    setActiveIndex((i) => Math.min(maxIndex, i + 1))
  }

  const atStart = activeIndex <= 0
  const atEnd = activeIndex >= maxIndex

  return (
    <Container>
      <Title title={translator('Projects')} />
      <SectionCarousel>
        <SectionCarouselContainer>
          <SectionCarouselContainerRelative>
            <ButtonCarouselLeft
              type="button"
              aria-label={translator('Previous slide')}
              $disabled={atStart}
              onClick={handlePrevious}
            >
              <MdArrowBackIos aria-hidden />
            </ButtonCarouselLeft>
            <CarouselContainer>
              <CarouselWrapper
                $activeIndex={activeIndex}
                $slidesPerView={slidesPerView}
              >
                {LIST_PROJECT_DATA.map((project, index) => (
                  <CarouselSlide key={index}>
                    <ProjectCard>
                      <ProjectCardWrapper to={`/post/${project.id}`}>
                        <ProjectCardWrapperOverlay>
                          <ProjectCardWrapperText>
                            {translator('View Details')}
                          </ProjectCardWrapperText>
                        </ProjectCardWrapperOverlay>
                      </ProjectCardWrapper>
                      <ProjectContent>
                        <ProjectContentTitle>
                          {project.title}
                        </ProjectContentTitle>
                        <ProjectContentDescription>
                          {translator(project.description)}
                        </ProjectContentDescription>
                        <Flex
                          flexWrap="wrap"
                          gap=".5rem"
                          style={{ marginBottom: '1.5rem' }}
                        >
                          {project.stacks.map((stack, idx) => (
                            <ProjectContentTag
                              key={idx}
                              backgroundColor={stack.backgroundColor}
                            >
                              {stack.text}
                            </ProjectContentTag>
                          ))}
                        </Flex>
                        <Flex gap="1rem">
                          <ProjectContentLink
                            href={
                              project.inDevelopment ? '#' : project.projectLink
                            }
                            disabled={project.inDevelopment}
                          >
                            {translator('View Project')}
                          </ProjectContentLink>
                          <ProjectContentLink href={project.projectLinkGithub}>
                            GitHub
                          </ProjectContentLink>
                        </Flex>
                      </ProjectContent>
                    </ProjectCard>
                  </CarouselSlide>
                ))}
              </CarouselWrapper>
            </CarouselContainer>
            <ButtonCarouselRight
              type="button"
              aria-label={translator('Next slide')}
              $disabled={atEnd}
              onClick={handleNext}
            >
              <MdArrowForwardIos aria-hidden />
            </ButtonCarouselRight>
            <ContainerIndicator>
              {pageIndices.map((pageIndex) => (
                <ButtonIndicator
                  key={pageIndex}
                  type="button"
                  aria-label={translator('Go to slide {{n}}', {
                    n: pageIndex + 1,
                  })}
                  aria-current={pageIndex === activeIndex ? 'true' : undefined}
                  $active={pageIndex === activeIndex}
                  onClick={() => setActiveIndex(pageIndex)}
                />
              ))}
            </ContainerIndicator>
          </SectionCarouselContainerRelative>
        </SectionCarouselContainer>
      </SectionCarousel>
    </Container>
  )
}
