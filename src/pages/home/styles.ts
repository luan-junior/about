import styled from 'styled-components'

export const Container = styled.section`
  position: relative;
  z-index: 10;
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
`

export const ContentWrap = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 80rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;

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

export const Content = styled.div`
  display: grid;
  align-items: center;
  gap: 4rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`

export const ContentApresentation = styled.div`
  order: 2;
  animation: fade-in-up 1s ease-out;

  @media (min-width: 1024px) {
    order: 1;
  }
`

export const ContentApresentationImage = styled.div`
  position: relative;
  order: 1;

  @media (min-width: 1024px) {
    order: 2;
  }
`

export const ContentApresentationWrap = styled.div``

export const ContentApresentationProfession = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
`

export const ContentApresentationLine = styled.div`
  height: 0.25rem;
  width: 4rem;
  border-radius: 9999px;
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme['green-dark-gradient']}
  );
`

export const ContentApresentationAuthor = styled.span`
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme['green-500']};
  margin-left: 1rem;
`

export const Title = styled.h1`
  font-weight: 900;

  @media (min-width: 768px) {
    font-size: 4.5rem;
    line-height: 1;
  }

  @media (min-width: 1024px) {
    font-size: 5.5rem;
    line-height: 1;
  }

  span:nth-child(1) {
    display: block;
    color: ${({ theme }) => theme['gray-100']};
  }

  span:nth-child(2) {
    display: block;
    background-image: linear-gradient(
      to right,
      ${({ theme }) => theme['green-gradient']}
    );
    color: transparent;
    background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
    line-height: 1.1 !important;
    padding-bottom: 0.1em;
    background-size: 400% 400%;
    animation: gradient 3s ease-in-out infinite;

    /* @keyframes gradient {
      0% {
        background-image: linear-gradient(
          to right,
          ${({ theme }) => theme['green-gradient']}
        );
      }
      50% {
        background-image: linear-gradient(
          to right,
          ${({ theme }) => theme['green-dark-gradient']}
        );
      }
      to {
        background-image: linear-gradient(
          to right,
          ${({ theme }) => theme['green-gradient-hover']}
        );
      }
    } */
  }

  span:nth-child(3) {
    margin-top: 0.5rem;
    display: block;
    font-weight: 500;
    color: ${({ theme }) => theme['gray-100']};

    @media (min-width: 768px) {
      font-size: 2.25rem;
      line-height: 2.5rem;
    }

    @media (min-width: 1024px) {
      font-size: 3rem;
      line-height: 1;
    }
  }
`

export const Text = styled.p`
  max-width: 36rem;
  color: ${({ theme }) => theme['gray-100']};
  margin-top: 2rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
    line-height: 2rem;
  }

  span:nth-child(1) {
    font-weight: 600;
    color: ${({ theme }) => theme['yellow-500']};
  }

  span:nth-child(2) {
    font-weight: 600;
    color: ${({ theme }) => theme['yellow-300']};
  }
`

export const ContentApresentationContainerButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-top: 1rem;
  margin-top: 2rem;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`

export const ButtonPrimary = styled.button`
  margin: 0;
  text-transform: none;
  letter-spacing: inherit;
  font-family: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  text-transform: none;

  -webkit-appearance: button;
  background-color: transparent;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border: none;
  border-radius: 1rem;
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme['green-dark-gradient']}
  );

  padding-left: 2.5rem;
  padding-right: 2.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 700;

  color: ${({ theme }) => theme['gray-100']};

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;
  transition-duration: 0.3s;

  position: relative;
  overflow: hidden;

  &:hover {
    background-image: linear-gradient(
      to right,
      ${({ theme }) => theme['green-gradient-dark-hover']}
    );
    box-shadow: 1px 1px 15px 5px ${({ theme }) => theme['green-300']};
  }

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;

    transition: left 0.5s;
  }
`

export const ButtonPrimarySpan = styled.span`
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    display: block;
    vertical-align: middle;
    height: 1.25rem;
    width: 1.25rem;

    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 0.15s;

    transition-duration: 0.3s;
    margin-left: 0.5rem;
  }
`

export const ButtonPrimaryDownloadLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme['gray-100']};
`

export const ButtonPrimaryDownload = styled.button`
  margin: 0;
  letter-spacing: inherit;
  font-family: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;

  text-transform: none;
  -webkit-appearance: button;
  background-color: transparent;
  background-image: none;
  cursor: pointer;
  position: relative;

  overflow: hidden;
  border-radius: 1rem;
  border-width: 2px;

  border-color: ${({ theme }) => theme['green-300']};

  padding-left: 2.5rem;
  padding-right: 2.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;

  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 700;

  color: ${({ theme }) => theme['gray-100']};
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;

  transition-duration: 0.3s;

  &:hover {
    border-color: ${({ theme }) => theme['green-500']};
    color: ${({ theme }) => theme['gray-500']};
  }
`

export const ButtonPrimaryDownloadSpan = styled.span`
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    height: 1.25rem;
    width: 1.25rem;
  }

  span {
    margin-left: 0.5rem;
  }
`

export const ContainerAuthorImage = styled.div`
  position: relative;
`

export const ContentAtuhorImageWrap = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  height: 20rem;

  @media (min-width: 768px) {
    width: 24rem;
    height: 24rem;
  }
`

export const ContainerAuthorImageWrap = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 9999px;
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme['blue-gradient']}
  );

  padding: 0.25rem;
  background-size: 400% 400%;
  animation: gradient 3s ease infinite;
`

export const ContentAuthorImageMain = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 9999px;
  background-color: ${({ theme }) => theme['gray-900']};
  padding: 1rem;
`

export const ContentImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 9999px;
  background-image: linear-gradient(
    to bottom right,
    ${({ theme }) => theme['blue-gradient']}
  );
`

export const ImageHome = styled.img`
  display: block;
  vertical-align: middle;
  max-width: 100%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.7s;
`

export const ContentImageShadow = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: linear-gradient(
    to bottom right,
    #3b82f61a 0%,
    transparent 50%,
    #06b6d41a 100%
  );
`
