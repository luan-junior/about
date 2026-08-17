import { useTranslate } from '@/hooks/useTranslate'
import me from '@/assets/images/family/IMG_20230126_114555_639.jpg'
import {
  Container,
  ContentWrap,
  Content,
  ContentApresentation,
  ContentApresentationImage,
  ContentApresentationWrap,
  ContentApresentationProfession,
  ContentApresentationLine,
  ContentApresentationAuthor,
  Title,
  Text,
  ContentApresentationContainerButton,
  ButtonPrimary,
  ButtonPrimarySpan,
  ButtonPrimaryDownloadLink,
  ButtonPrimaryDownload,
  ButtonPrimaryDownloadSpan,
  ContainerAuthorImage,
  ContentAtuhorImageWrap,
  ContainerAuthorImageWrap,
  ContentAuthorImageMain,
  ContentImage,
  ImageHome,
  ContentImageShadow,
} from './styles'
import { Habilities } from '@/components/Habilities'
import { About } from '@/components/About'
import { Projects } from '@/components/Projects'
import { Experiences } from '@/components/Experiences'
import { Training } from '@/components/Training'
import { Contact } from '@/components/Contact'

export const Home = () => {
  const { translator } = useTranslate()
  return (
    <>
      <Container>
        <ContentWrap>
          <Content>
            <ContentApresentation>
              <ContentApresentationWrap>
                <ContentApresentationProfession>
                  <ContentApresentationLine />
                  <ContentApresentationAuthor>
                    {translator('Full Stack Developer')}
                  </ContentApresentationAuthor>
                </ContentApresentationProfession>
                <Title>
                  <span>{translator('Hello, I am')}</span>
                  <span>Luan Júnior</span>
                  <span>da Silva</span>
                </Title>
              </ContentApresentationWrap>
              <Text>
                {translator('Passionate about creating')}{' '}
                <span>{translator('digital experiences')}</span>{' '}
                {translator('that turn ideas into')}{' '}
                <span>{translator('reality')}</span>.
              </Text>
              <ContentApresentationContainerButton>
                <ButtonPrimary
                  data-v-e2549072=""
                  className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 btn-primary"
                >
                  <ButtonPrimarySpan>
                    <span data-v-e2549072="">{translator('View Projects')}</span>
                    <svg
                      data-v-e2549072=""
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        data-v-e2549072=""
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </ButtonPrimarySpan>
                </ButtonPrimary>
                <ButtonPrimaryDownloadLink>
                  <ButtonPrimaryDownload>
                    <ButtonPrimaryDownloadSpan>
                      <svg
                        data-v-e2549072=""
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          data-v-e2549072=""
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        ></path>
                      </svg>
                      <span data-v-e2549072="">{translator('Download CV')}</span>
                    </ButtonPrimaryDownloadSpan>
                    <div
                      data-v-e2549072=""
                      className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                    ></div>
                  </ButtonPrimaryDownload>
                </ButtonPrimaryDownloadLink>
              </ContentApresentationContainerButton>
            </ContentApresentation>
            <ContentApresentationImage>
              <ContainerAuthorImage>
                <ContentAtuhorImageWrap>
                  <ContainerAuthorImageWrap>
                    <ContentAuthorImageMain>
                      <ContentImage>
                        <ImageHome src={me} alt="Luan Júnior" />
                        <ContentImageShadow></ContentImageShadow>
                      </ContentImage>
                    </ContentAuthorImageMain>
                  </ContainerAuthorImageWrap>
                </ContentAtuhorImageWrap>
              </ContainerAuthorImage>
            </ContentApresentationImage>
          </Content>
        </ContentWrap>
      </Container>
      <About />
      <Habilities />
      <Projects />
      <Experiences />
      <Training />
      <Contact />
    </>
  )
}
