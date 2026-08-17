import { useRef } from 'react'
import { Flex } from '@/components/Flex'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css'
import {
  Container,
  ContainerContentHeader,
  ContainerHeader,
  ContainerSection,
  Title,
  Description,
  StackTag,
  HeaderLink,
  ContainerContentOrder,
  ContainerContentImage,
  ContentImageListen,
  ContentImageWrapper,
  ContentImage,
  ImageWrapperContent,
  ImageWrapperSVG,
  OtherProjects,
  TitleOther,
  ContainerOthersProject,
  ContentItemOther,
  StackTagOthers,
  ContainerAboutAndInfo,
  ContainerAboutAndInfoGrid,
  Aside,
  DetailCard,
  DetailCardTitle,
  DetailRounded,
  Conclused,
  CardWrapper,
  ContentImpactWrapper,
  ContentImpactItem,
  ContentImpactItemDescription,
  ContentTechIcon,
  ContentAboutAndInfoGrid,
  TitleAbout,
  AboutContentWrapper,
  DescriptionAbout,
  AboutContentList,
  AboutContentListTitle,
  AboutList,
  ContentAboutGallery,
  ContentAboutImages,
  GalleryItem,
  GalleryItemImage,
  TitleList,
  DescriptionList,
  ContentListNumber,
} from './styles'
import { LIST_PROJECT_DATA } from '@/components/Projects/utils'
import { useTranslate } from '@/hooks/useTranslate'

type Props = {
  postId: string
}

export const Post = ({ postId }: Props) => {
  const { translator } = useTranslate()
  const firstImageRef = useRef<HTMLImageElement | null>(null)
  const projectData = LIST_PROJECT_DATA.find(
    (project) => project.id === Number(postId),
  )
  const otherProjects = LIST_PROJECT_DATA.filter(
    (project) => project.id !== Number(postId),
  )

  return (
    <Container>
      <ContainerSection>
        <ContainerHeader>
          <ContainerContentHeader>
            <div>
              <Title>{projectData?.title}</Title>
              <Description>
                {translator(projectData?.description ?? '')}
              </Description>
              <Flex
                gap=".75rem"
                flexWrap="wrap"
                style={{ marginBottom: '2rem' }}
              >
                {projectData?.stacks.map((stack) => (
                  <StackTag
                    key={stack.text}
                    backgroundColor={stack.backgroundColor}
                  >
                    {stack.text}
                  </StackTag>
                ))}
              </Flex>
              <Flex gap="1rem" flexWrap="wrap">
                <HeaderLink
                  href={projectData?.projectLinkGithub}
                  target="_blank"
                >
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    ></path>
                  </svg>
                  {translator('View Live Project')}
                </HeaderLink>
              </Flex>
            </div>
            <ContainerContentOrder>
              <ContainerContentImage>
                <ContentImageListen />
                <ContentImageWrapper>
                  <ContentImage
                    src={projectData?.image || ''}
                    alt={projectData?.title || ''}
                  />
                  <ImageWrapperContent>
                    <ImageWrapperSVG>
                      <svg
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        ></path>
                      </svg>
                      <p>{translator('Project Preview')}</p>
                    </ImageWrapperSVG>
                  </ImageWrapperContent>
                </ContentImageWrapper>
              </ContainerContentImage>
            </ContainerContentOrder>
          </ContainerContentHeader>
        </ContainerHeader>
      </ContainerSection>
      <ContainerSection>
        <ContainerAboutAndInfo>
          <ContainerAboutAndInfoGrid>
            <ContentAboutAndInfoGrid>
              <DetailCard>
                <TitleAbout>{translator('About the Project')}</TitleAbout>
                <AboutContentWrapper>
                  <DescriptionAbout>
                    {translator(projectData?.about?.description ?? '')}
                  </DescriptionAbout>
                  <AboutContentList>
                    <AboutContentListTitle>
                      {translator('Main Features')}
                    </AboutContentListTitle>
                    <AboutList>
                      {projectData?.about?.list.map((item) => (
                        <li key={item}>
                          <svg
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                          <span>{translator(item)}</span>
                        </li>
                      ))}
                    </AboutList>
                  </AboutContentList>
                </AboutContentWrapper>
              </DetailCard>

              <DetailCard>
                <TitleAbout>{translator('Development Process')}</TitleAbout>
                <Flex flexDirection="column" gap="1.5rem">
                  {projectData?.about?.proccessEnvironment.map(
                    (item, index) => (
                      <Flex gap="1rem">
                        <ContentListNumber>{index + 1}</ContentListNumber>
                        <div>
                          <TitleList>{translator(item.title)}</TitleList>
                          <DescriptionList>
                            {translator(item.description)}
                          </DescriptionList>
                        </div>
                      </Flex>
                    ),
                  )}
                </Flex>
              </DetailCard>

              <DetailCard>
                <TitleAbout>{translator('Gallery')}</TitleAbout>
                <ContentAboutImages>
                  <PhotoProvider>
                    {projectData?.images?.map((image, index) =>
                      index < 6 ? (
                        <GalleryItem key={index}>
                          <PhotoView src={image.src}>
                            <GalleryItemImage
                              ref={index === 0 ? firstImageRef : null}
                              src={image.src}
                            />
                          </PhotoView>
                        </GalleryItem>
                      ) : (
                        <PhotoView key={index} src={image.src}>
                          <img style={{ display: 'none' }} />
                        </PhotoView>
                      ),
                    )}
                  </PhotoProvider>
                </ContentAboutImages>
                {projectData?.images && projectData?.images.length > 6 && (
                  <ContentAboutGallery>
                    <button onClick={() => firstImageRef.current?.click()}>
                      <svg
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 002 2z"
                        ></path>
                      </svg>
                      {translator('View all photos')}
                    </button>
                  </ContentAboutGallery>
                )}
              </DetailCard>
            </ContentAboutAndInfoGrid>
            <Aside>
              <DetailCard>
                <DetailCardTitle>{translator('Status')}</DetailCardTitle>
                <Flex gap=".75rem" alignItems="center">
                  <DetailRounded />
                  {projectData?.inDevelopment ? (
                    <Conclused>{translator('In Development')}</Conclused>
                  ) : (
                    <Conclused>{translator('Completed')}</Conclused>
                  )}
                </Flex>
              </DetailCard>
              <DetailCard>
                <DetailCardTitle>{translator('Technologies')}</DetailCardTitle>
                <Flex flexDirection="column" gap=".6rem">
                  {projectData?.stacks.map((stack) => (
                    <Flex gap=".75rem" alignItems="center">
                      <ContentTechIcon
                        backgroundColor={stack.backgroundColor}
                      />
                      <span>{stack.text}</span>
                    </Flex>
                  ))}
                </Flex>
              </DetailCard>
              {projectData?.about?.information && (
                <DetailCard>
                  <DetailCardTitle>{translator('Information')}</DetailCardTitle>
                  <CardWrapper>
                    <div>
                      <span>{translator('Duration')}</span>
                      <p>
                        {translator(
                          projectData?.about?.information.duration ?? '',
                        )}
                      </p>
                    </div>
                    <div>
                      <span>{translator('Team')}</span>
                      <p>
                        {translator(projectData?.about?.information.team ?? '')}
                      </p>
                    </div>
                    <div>
                      <span>{translator('Client')}</span>
                      <p>
                        {translator(
                          projectData?.about?.information.client ?? '',
                        )}
                      </p>
                    </div>
                  </CardWrapper>
                </DetailCard>
              )}
              {projectData?.impact && (
                <DetailCard>
                  <DetailCardTitle>{translator('Impact')}</DetailCardTitle>
                  <div>
                    {projectData?.impact.map((item) => (
                      <ContentImpactWrapper>
                        <ContentImpactItem>{item.value}</ContentImpactItem>
                        <ContentImpactItemDescription>
                          {translator(item.title)}
                        </ContentImpactItemDescription>
                      </ContentImpactWrapper>
                    ))}
                  </div>
                </DetailCard>
              )}
            </Aside>
          </ContainerAboutAndInfoGrid>
        </ContainerAboutAndInfo>
      </ContainerSection>
      <ContainerSection style={{ backgroundColor: '#00000033' }}>
        <OtherProjects>
          <TitleOther>{translator('Other Projects')}</TitleOther>
          <ContainerOthersProject>
            {otherProjects.map((project) => (
              <ContentItemOther key={project.id}>
                <h3>{project.title}</h3>
                <p>{translator(project.description)}</p>
                <Flex flexWrap="wrap" gap=".5rem">
                  {project.stacks.map((stack) => (
                    <StackTagOthers
                      key={stack.text}
                      backgroundColor={stack.backgroundColor}
                    >
                      {stack.text}
                    </StackTagOthers>
                  ))}
                </Flex>
              </ContentItemOther>
            ))}
          </ContainerOthersProject>
        </OtherProjects>
      </ContainerSection>
    </Container>
  )
}
