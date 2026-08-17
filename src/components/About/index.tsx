import {
  SectionAbout,
  SectionAboutContent,
  SectionAboutContentWrap,
  Line,
  SectionAboutDescription,
  SectionAboutDescriptionWrap,
  SectionAboutDescriptionContent,
  SectionAboutDescriptionContentWrap,
  SectionAboutDescriptionContentIcon,
  SectionAboutDescriptionContentText,
  AboutExperienceYears,
  AboutExperienceYearsContent,
} from './styles'

import { useTranslate } from '@/hooks/useTranslate'

export const About = () => {
  const { translator } = useTranslate()
  return (
    <SectionAbout>
      <SectionAboutContent>
        <SectionAboutContentWrap>
          <h2>{translator('About me')}</h2>
          <Line />
        </SectionAboutContentWrap>
        <SectionAboutDescription>
          <SectionAboutDescriptionWrap>
            <SectionAboutDescriptionContent>
              <SectionAboutDescriptionContentWrap>
                <SectionAboutDescriptionContentIcon>
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    ></path>
                  </svg>
                </SectionAboutDescriptionContentIcon>
                <SectionAboutDescriptionContentText>
                  <h3 className="text-xl font-bold text-purple-400 mb-2">
                    {translator('Full Stack Developer')}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-justify text-base">
                    {translator('about.fullstack')}
                  </p>
                </SectionAboutDescriptionContentText>
              </SectionAboutDescriptionContentWrap>
            </SectionAboutDescriptionContent>
            <SectionAboutDescriptionContent>
              <SectionAboutDescriptionContentWrap>
                <SectionAboutDescriptionContentIcon>
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    ></path>
                  </svg>
                </SectionAboutDescriptionContentIcon>
                <SectionAboutDescriptionContentText>
                  <h3 className="text-xl font-bold text-pink-400 mb-2">
                    {translator('ERP Project Experience')}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-justify text-base">
                    {translator('about.erp')}
                  </p>
                </SectionAboutDescriptionContentText>
              </SectionAboutDescriptionContentWrap>
            </SectionAboutDescriptionContent>
          </SectionAboutDescriptionWrap>
          <AboutExperienceYears>
            <AboutExperienceYearsContent>
              <strong>9+</strong>
              <span>{translator('Years of Experience')}</span>
            </AboutExperienceYearsContent>
            <AboutExperienceYearsContent>
              <strong>12+</strong>
              <span>{translator('Completed Projects')}</span>
            </AboutExperienceYearsContent>
          </AboutExperienceYears>
        </SectionAboutDescription>
      </SectionAboutContent>
    </SectionAbout>
  )
}
