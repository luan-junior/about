import styled, { css } from 'styled-components'
import { Link } from '@tanstack/react-router'

type ProjectContentTagProps = {
  backgroundColor?: string
}

type ProjectContentLinkProps = {
  disabled?: boolean
}

export const Container = styled.div`
  scroll-margin-top: 5.5rem;
`

export const SectionCarousel = styled.div`
  position: relative;
  z-index: 10;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  margin-top: 3rem;
`

export const SectionCarouselContainer = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 80rem;

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

export const SectionCarouselContainerRelative = styled.div`
  position: relative;
`

export const ButtonCarouselLeft = styled.button<{ $disabled?: boolean }>`
  border: none;
  outline: none;
  position: absolute;
  top: 50%;
  z-index: 20;
  background-color: #00000099;
  color: ${({ theme }) => theme.white};

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.3s;
  border-radius: 9999px;
  border-width: 1px;
  border-color: ${({ theme }) => theme['gray-900']};
  padding: 0.75rem;

  left: 0.5rem;
  transform: translateY(-50%);

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  ${({ $disabled }) =>
    $disabled &&
    css`
      opacity: 0.35;
      cursor: not-allowed;
      pointer-events: none;
    `}

  svg {
    width: 1.5rem;
    height: 1.5rem;
    transform: translateX(4px);
  }
`

export const ButtonCarouselRight = styled(ButtonCarouselLeft)`
  left: auto;
  right: 0.5rem;
`

export const ContainerIndicator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2rem;
`

export const ButtonIndicator = styled.button<{ $active?: boolean }>`
  border: none;
  font-family: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  font-size: 100%;
  font-weight: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  color: inherit;
  margin: 0;
  padding: 0;
  text-transform: none;

  background-image: none;
  -webkit-appearance: button;
  cursor: pointer;
  height: 0.75rem;
  width: 0.75rem;
  border-radius: 9999px;
  background-color: ${({ theme, $active }) =>
    $active ? theme['green-300'] : theme['gray-600']};
  transition-property: background-color, transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.3s;

  ${({ $active }) =>
    $active &&
    css`
      transform: scale(1.15);
    `}
`

export const CarouselContainer = styled.div`
  overflow: hidden;
  border-radius: 1.5rem;
  position: relative;
  /* padding: 15px 20px; */
  /* margin: 0 -20px; */
`

export const CarouselWrapper = styled.div<{
  $activeIndex: number
  $slidesPerView: number
}>`
  display: flex;
  transition-property: transform;
  transition-duration: 0.5s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  gap: 1rem;

  transform: translateX(
    calc(
      -1 * ${(props) => props.$activeIndex} *
        ((100% / ${(props) => props.$slidesPerView}) + 1rem)
    )
  );
`

export const CarouselSlide = styled.div`
  width: 100%;
  flex: none;
  /* padding-left: 1rem;
  padding-right: 1rem; */
  padding-top: 5px;
  padding-bottom: 5px;

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (min-width: 1024px) {
    width: 33.333333%;
  }
`

export const ProjectCardWrapper = styled(Link)`
  display: block;
  background-image: linear-gradient(
    to bottom right,
    ${({ theme }) => theme['blue-dark-gradient']}
  );
  position: relative;
  height: 16rem;
  cursor: pointer;
  overflow: hidden;
`

export const ProjectCardWrapperOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00000099;
  opacity: 0;

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.3s;
`

export const ProjectCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 1.5rem;
  border-width: 1px;
  border-color: ${({ theme }) => theme['gray-900']};
  background-color: #00000099;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.5s;

  /* &:hover {
    transform: scale(1.05);
    border-color: ${({ theme }) => theme['green-300']};
    box-shadow: 0 25px 50px -12px #00000040, 0 25px 50px -12px ${({ theme }) => `${theme['green-300']}33`};
  } */

  &:hover ${ProjectCardWrapperOverlay} {
    opacity: 1;
  }
`

export const ProjectCardWrapperText = styled.div`
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme.white};
`

export const ProjectContent = styled.div`
  padding: 2rem;
`

export const ProjectContentTitle = styled.h3`
  margin-bottom: 0.75rem;
  cursor: pointer;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.white};
  transition-property:
    color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.3s;

  &:hover {
    color: ${({ theme }) => theme['green-300']};
  }
`

export const ProjectContentDescription = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.625;
  color: ${({ theme }) => theme['gray-400']};
`

export const ProjectContentTag = styled.span<ProjectContentTagProps>`
  border-radius: 9999px;
  padding: 0.25rem 0.75rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.white};

  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : 'transparent'};
`

export const ProjectContentLink = styled.a<ProjectContentLinkProps>`
  position: relative;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.white};
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.3s;

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      pointer-events: none;
    `}
`
