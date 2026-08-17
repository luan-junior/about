import styled from 'styled-components'

export const SectionAbout = styled.section`
  position: relative;
  z-index: 10;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`

export const SectionAboutContent = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 72rem;

  @media (min-width: 1024px) {
    max-width: 1024px;
  }

  @media (min-width: 768px) {
    max-width: 768px;
  }
  @media (min-width: 640px) {
    max-width: 640px;
  }

  @media (min-width: 1280px) {
    max-width: 1280px;
  }
`

export const SectionAboutContentWrap = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  text-align: center;

  h2 {
    margin-bottom: 1.5rem;
    background-image: linear-gradient(
      to right,
      ${({ theme }) => theme['green-dark-gradient']}
    );

    font-weight: 900;
    color: transparent;

    background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
    line-height: 1.1 !important;
    padding-bottom: 0.1em;

    @media (min-width: 768px) {
      font-size: 3.75rem;
      line-height: 1;
    }
  }
`

export const Line = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 6rem;
  height: 0.25rem;
  border-radius: 9999px;

  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme['green-gradient']}
  );
`

export const SectionAboutDescription = styled.div``

export const SectionAboutDescriptionWrap = styled.div`
  display: grid;
  gap: 2rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`

export const SectionAboutDescriptionContent = styled.div`
  border-radius: 1.5rem;
  border-width: 1px;
  border-color: ${({ theme }) => theme['gray-700']};
  background-color: ${({ theme }) => theme['gray-800']};
  padding: 1.5rem;

  opacity: 1;
  transform: translateY(0px);
  transition:
    opacity 0.6s ease-out,
    transform 0.6s ease-out;
`

export const SectionAboutDescriptionContentWrap = styled.div`
  display: flex;
  align-items: flex-start;
`

export const SectionAboutDescriptionContentIcon = styled.div`
  display: flex;
  width: 2.5rem;
  height: 2.5rem;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 0.75rem;
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme['green-gradient']}
  );

  svg {
    width: 1.25rem;
    height: 1.25rem;
    color: ${({ theme }) => theme['gray-100']};
  }
`

export const SectionAboutDescriptionContentText = styled.div`
  margin-left: 1rem;

  h3 {
    margin-bottom: 0.5rem;
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 700;
    color: ${({ theme }) => theme['gray-300']};
  }

  p {
    text-align: justify;
    font-size: 1rem;
    line-height: 1.625;
    color: ${({ theme }) => theme['gray-100']};
  }
`

export const AboutExperienceYears = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: grid;
  max-width: 28rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
  margin-top: 4rem;

  opacity: 1;
  transform: translateY(0px);
  transition:
    opacity 0.6s ease-out,
    transform 0.6s ease-out;
`

export const AboutExperienceYearsContent = styled.div`
  border-radius: 1rem;
  border-width: 1px;
  border-color: ${({ theme }) => theme['gray-700']};
  background-color: ${({ theme }) => theme['gray-800']};
  padding: 1rem;
  text-align: center;

  strong {
    margin-bottom: 0.25rem;
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 700;
    display: block;

    color: ${({ theme }) => theme['yellow-300']};
  }

  span {
    color: ${({ theme }) => theme['green-500']};
  }
`
