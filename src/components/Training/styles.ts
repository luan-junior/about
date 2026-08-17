import styled from 'styled-components'

type ConcludedProps = {
  concluded?: boolean
}

export const Container = styled.section`
  position: relative;
  z-index: 10;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`

export const ContainerRelative = styled.div`
  position: relative;
  margin-top: 5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`

export const LineVertical = styled.div`
  position: absolute;
  left: 2rem;
  height: 100%;
  width: 0.25rem;

  border-radius: 9999px;
  background-image: linear-gradient(
    to bottom,
    ${({ theme }) => theme['green-gradient']}
  );

  @media (min-width: 768px) {
    left: 50%;
  }
`

export const Wrapper = styled.div``

export const WrapperContentItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    &:nth-child(odd) {
      justify-content: flex-end;
    }

    &:nth-child(even) {
      justify-content: flex-start;
    }
  }
`

export const LineCircle = styled.div`
  position: absolute;
  left: 2rem;
  top: 50%;
  z-index: 20;

  transform: translate(0, -50%) rotate(0) skew(0) skewY(0) scaleX(1) scaleY(1);

  @media (min-width: 768px) {
    left: 50%;

    transform: translate(-50%, -50%) rotate(0) skew(0) skewY(0) scaleX(1)
      scaleY(1);
  }
`

export const LineCircleBackground = styled.div`
  display: flex;
  height: 2rem;
  width: 2rem;
  justify-content: center;
  align-items: center;
  border-radius: 9999px;
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme['green-dark-gradient']}
  );

  animation: pulse-glow 2s ease-in-out infinite;

  box-shadow:
    ${({ theme }) => `${theme['green-300']}97`} 0px 0px 23.091px 0px,
    ${({ theme }) => `${theme['green-300']}5D`} 0px 0px 46.182px 0px;
`

export const Content = styled.div`
  position: relative;
  margin-left: 5rem;
  width: 100%;

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;
    transform: translateY(-8px);
  }

  @media (min-width: 768px) {
    width: 41.666667%;
    margin-left: 0;
    margin-right: 4rem;
  }
`

export const ContentWrap = styled.div`
  position: absolute;
  top: -0.25rem;
  right: -0.25rem;
  bottom: -0.25rem;
  left: -0.25rem;
  border-radius: 1.5rem;
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme['green-dark-gradient']}
  );

  opacity: 0.2;
  filter: blur(8px);
  transition-property:
    color,
    background-color,
    border-color,
    text-decoration-color,
    fill,
    stroke,
    opacity,
    box-shadow,
    transform,
    filter,
    backdrop-filter,
    -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.5s;
`

export const ContentWrapper = styled.div`
  position: relative;
  border-radius: 1.5rem;
  padding: 2rem;
  -webkit-backdrop-filter: blur(16px);
  backdrop-filter: blur(16px);

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.3s;

  background: #00000066;
  border: 1px solid ${({ theme }) => `${theme['green-700']}33`};

  &:hover {
    box-shadow:
      0 20px 40px ${({ theme }) => `${theme['green-300']}33`},
      0 0 0 1px ${({ theme }) => `${theme['green-300']}1A`};
  }
`

export const ContentHeader = styled.div`
  margin-bottom: 1.5rem;
`

export const Concluded = styled.div<ConcludedProps>`
  position: absolute;
  right: 1rem;
  top: 1rem;

  span {
    border-radius: 9999px;
    display: inline-block;
    border: ${({ theme, concluded }) =>
      concluded
        ? `1px solid ${theme['green-300']}66`
        : `1px solid ${theme['yellow-500']}66`};
    background-color: ${({ theme, concluded }) =>
      concluded ? `${theme['green-300']}33` : `${theme['yellow-500']}33`};
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    font-size: 0.75rem;
    line-height: 1rem;
    font-weight: 600;

    color: ${({ theme, concluded }) =>
      concluded ? theme['green-300'] : theme['yellow-300']};
  }
`

export const ContentHeaderPosition = styled.h3`
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.white};
  transition-property:
    color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.3s;
`

export const ContentHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  p {
    background-image: linear-gradient(
      to right,
      ${({ theme }) => theme['green-gradient']}
    );
    font-size: 1.125rem;
    font-weight: 600;
    color: transparent;
    background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
    line-height: 1.1 !important;
    padding-bottom: 0.1em;
  }
`

export const ContentHeaderSpan = styled.span`
  border-radius: 9999px;
  background-color: ${({ theme }) => `${theme['green-700']}33`};
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: ${({ theme }) => theme['gray-100']};
  text-align: center;
`

export const ContentHeaderCR = styled.span`
  border-radius: 9999px;
  border-width: 1px;
  border-color: ${({ theme }) => `${theme['green-300']}4D`};
  background-color: ${({ theme }) => `${theme['green-700']}33`};
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: ${({ theme }) => theme['green-300']};
`

export const ContentHeaderPeriod = styled.p`
  margin-top: 0.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme['yellow-300']};
`

export const ContentHeaderDescription = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.625;
  color: ${({ theme }) => theme['gray-100']};
`

export const ContentActivity = styled.div`
  margin-bottom: 1.5rem;
`

export const ContentActivityTitle = styled.div`
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 600;
  color: ${({ theme }) => theme.white};

  svg {
    margin-right: 0.5rem;
    width: 1.25rem;
    height: 1.25rem;
    color: ${({ theme }) => theme['green-300']};
  }
`

export const ContentList = styled.ul`
  li {
    display: flex;
    transform: translate(0, 0) rotate(0) skew(0) skewY(0) scaleX(1) scaleY(1);
    align-items: flex-start;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: ${({ theme }) => theme['gray-100']};
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 0.3s;

    &:hover {
      transform: translate(0.5rem, 0) rotate(0) skew(0) skewY(0) scaleX(1)
        scaleY(1);
    }

    span {
      margin-right: 0.75rem;
      margin-top: 0.25rem;
      color: ${({ theme }) => theme['green-300']};
    }
  }
`

export const ContentTechnologies = styled.div`
  border-top-width: 1px;
  border-color: ${({ theme }) => theme['green-700']};
  padding-top: 1.5rem;
  border-top-style: solid;
`

export const ContentTechnologiesTitle = styled.h4`
  margin-bottom: 0.75rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme['gray-100']};
`

export const ContentTechnologiesTag = styled.span`
  cursor: default;
  border-radius: 9999px;
  border-width: 1px;
  border-color: ${({ theme }) => theme['green-700']};
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme['green-dark-gradient']}
  );
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.white};
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.3s;
`

export const ContentWrapperIcon = styled.div`
  position: absolute;
  right: -1rem;
  top: 50%;
  transform: translate(0, -50%) rotate(0) skew(0) skewY(0) scaleX(1) scaleY(1);
  opacity: 0;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.3s;

  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: ${({ theme }) => theme['green-300']};
  }
`
