import styled from 'styled-components'

export const Container = styled.main`
  position: relative;
  z-index: 10;
  padding-top: 2rem;
`

export const ContainerSection = styled.section`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
`

export const ContainerHeader = styled.section`
  width: 100%;
  max-width: 72rem;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 640px) {
    max-width: 640px;
  }

  @media (min-width: 768px) {
    max-width: 768px;
  }

  @media (min-width: 1024px) {
    max-width: 1024px;
  }

  @media (min-width: 1280px) {
    max-width: 1280px;
  }
`

export const ContainerContentHeader = styled.div`
  display: grid;
  align-items: center;
  gap: 3rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`

export const Title = styled.h1`
  margin-bottom: 1.5rem;
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme['green-gradient']}
  );

  font-size: 3rem;
  font-weight: 900;
  color: transparent;
  -webkit-background-clip: text !important;
  background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  line-height: 1.1 !important;
  padding-bottom: 0.1em;

  @media (min-width: 768px) {
    font-size: 3.75rem;
    line-height: 1;
  }
`

export const Description = styled.p`
  margin-bottom: 2rem;
  font-size: 1.25rem;
  line-height: 1.625;
  color: ${({ theme }) => theme['gray-100']};
`

export const StackTag = styled.span<{ backgroundColor: string }>`
  background-color: ${({ backgroundColor }) => backgroundColor};

  border-radius: 9999px;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme['gray-100']};
`

export const HeaderLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 9999px;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.3s;

  color: ${({ theme }) => theme['gray-100']};

  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme['blue-gradient']}
  );

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`

export const ContainerContentOrder = styled.div`
  order: -9999;

  @media (min-width: 1024px) {
    order: 9999;
  }
`

export const ContainerContentImage = styled.div`
  position: relative;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.5s;
  overflow: hidden;
  border-radius: 20px;

  &:hover {
    transform: scale(1.05);
  }
`

export const ContentImageListen = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
  width: 1rem;
  height: 1rem;
  border-radius: 9999px;
  background-image: linear-gradient(
    to bottom right,
    ${({ theme }) => theme['green-gradient']}
  );
`

export const ContentImageWrapper = styled.div`
  position: relative;
  display: flex;
  max-height: 400px;
  min-height: 220px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 1rem;
  background-color: #00000033;
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
`

export const ContentImage = styled.img`
  max-width: 100%;
  width: 100%;
  height: auto;
  max-height: 100%;
  object-fit: contain;
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.5s;

  &:hover {
    transform: scale(1.05);
  }
`

export const ImageWrapperContent = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: none;
  align-items: center;
`

export const ImageWrapperSVG = styled.div`
  text-align: center;

  svg {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1rem;
    width: 4rem;
    height: 4rem;
    color: #ffffff99;
  }

  p {
    color: #ffffff99;
  }
`

export const ContainerAboutAndInfo = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 72rem;

  @media (min-width: 640px) {
    max-width: 640px;
  }

  @media (min-width: 768px) {
    max-width: 768px;
  }

  @media (min-width: 1024px) {
    max-width: 1024px;
  }

  @media (min-width: 1280px) {
    max-width: 1280px;
  }
`

export const ContainerAboutAndInfoGrid = styled.div`
  display: grid;
  gap: 2rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`

export const ContentAboutAndInfoGrid = styled.div`
  @media (min-width: 1024px) {
    grid-column: span 2 / span 2;
  }
`

export const TitleAbout = styled.div`
  margin-bottom: 1.5rem;
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme['green-gradient']}
  );
  background-clip: text;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;

  color: transparent;
`

export const AboutContentWrapper = styled.div`
  max-width: none;
  line-height: 1.625;

  color: ${({ theme }) => theme['gray-100']};
`

export const DescriptionAbout = styled.p`
  line-height: 1.625;

  color: ${({ theme }) => theme['gray-100']};
  margin-bottom: 1rem;
`

export const AboutContentList = styled.div`
  margin-top: 1.5rem;
`

export const AboutContentListTitle = styled.h3`
  margin-bottom: 1rem;
  margin-top: 1.5rem;
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 700;

  color: ${({ theme }) => theme['gray-100']};
`

export const AboutList = styled.ul`
  li {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;

    &:not(:first-child) {
      margin-top: 0.5rem;
    }

    svg {
      margin-top: 0.125rem;
      width: 1.25rem;
      height: 1.25rem;
      flex-shrink: 0;

      color: ${({ theme }) => theme['green-300']};
    }
  }
`

export const ContentAboutImages = styled.div`
  display: grid;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`

export const GalleryItem = styled.div`
  aspect-ratio: 16 / 9;
  cursor: pointer;
  overflow: hidden;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme['gray-900']};
  position: relative;
  transition: transform 0.3s ease;
`

export const GalleryItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.3s;
`

export const ContentAboutGallery = styled.div`
  margin-top: 1.5rem;
  text-align: center;

  button {
    border: none;
    cursor: pointer;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border-radius: 9999px;
    background-image: linear-gradient(
      to right,
      ${({ theme }) => theme['blue-dark-gradient']}
    );

    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    font-weight: 600;
    color: ${({ theme }) => theme['gray-100']};
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 0.3s;

    &:hover {
      transform: scale(1.05);
      background-image: linear-gradient(
        to right,
        ${({ theme }) => theme['blue-dark-gradient-hover']}
      );
    }

    svg {
      width: 1.25rem;
      height: 1.25rem;
    }
  }
`

export const Aside = styled.aside``

export const DetailCard = styled.div`
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.3s;

  border-radius: 1rem;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme['green-500']};
  background-color: #00000066;
  padding: 1.5rem;

  &:hover {
    border-color: ${({ theme }) => theme['green-700']};
  }

  &:not(:first-child) {
    margin-top: 1.5rem;
  }

  animation: fadeInUp-8512caeb 0.6s ease-out;

  @keyframes fadeInUp-8512caeb {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

export const DetailCardTitle = styled.h3`
  margin-bottom: 1rem;
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme['gray-100']};
`

export const ContentTechIcon = styled.div<{ backgroundColor: string }>`
  width: 1rem;
  height: 1rem;
  border-radius: 0.25rem;
  background-color: ${({ backgroundColor }) => backgroundColor};
`

export const DetailRounded = styled.div`
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 9999px;
  background-color: ${({ theme }) => theme['green-300']};
`

export const Conclused = styled.div`
  color: ${({ theme }) => theme['gray-100']};
`

export const CardWrapper = styled.div`
  div {
    &:not(:first-child) {
      margin-top: 0.75rem;
    }
  }
  span {
    font-weight: 600;
    color: ${({ theme }) => theme['green-300']};
  }

  p {
    margin-top: 0.4rem;
    color: ${({ theme }) => theme['gray-100']};
  }
`

export const ContentImpactWrapper = styled.div`
  text-align: center;

  &:not(:first-child) {
    margin-top: 0.6rem;
  }
`

export const ContentImpactItem = styled.div`
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme['green-gradient']}
  );

  font-size: 1.5rem;
  font-weight: 700;
  color: transparent;
  background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  line-height: 1.1 !important;
  padding-bottom: 0.1em;
`

export const ContentImpactItemDescription = styled.div`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: ${({ theme }) => theme['gray-100']};
`

export const OtherProjects = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 72rem;

  @media (min-width: 640px) {
    max-width: 640px;
  }

  @media (min-width: 768px) {
    max-width: 768px;
  }

  @media (min-width: 1024px) {
    max-width: 1024px;
  }

  @media (min-width: 1280px) {
    max-width: 1280px;
  }
`

export const TitleOther = styled.h2`
  margin-bottom: 3rem;
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme['green-gradient']}
  );

  text-align: center;
  font-size: 1.875rem;
  font-weight: 700;
  color: transparent;
  background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  line-height: 1.1 !important;
  padding-bottom: 0.1em;
`

export const ContainerOthersProject = styled.div`
  display: grid;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`

export const ContentItemOther = styled.div`
  cursor: pointer;
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme['green-300']};
  background-color: #00000066;
  padding: 1.5rem;
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.3s;

  &:hover {
    transform: scale(1.05);
    border: 1px solid ${({ theme }) => theme['green-500']};
  }

  h3 {
    margin-bottom: 0.5rem;
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 700;
    color: ${({ theme }) => theme.white};
  }

  p {
    margin-bottom: 1rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: ${({ theme }) => theme['gray-100']};
  }
`

export const StackTagOthers = styled.span<{ backgroundColor: string }>`
  background-color: ${({ backgroundColor }) => backgroundColor};

  border-radius: 9999px;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 600;

  color: ${({ theme }) => theme['gray-100']};
`

export const ContentListNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
  border-radius: 100%;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 700;

  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme['green-gradient']}
  );
`

export const TitleList = styled.h3`
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme['gray-100']};
`

export const DescriptionList = styled.p`
  color: ${({ theme }) => theme['gray-100']};
`
