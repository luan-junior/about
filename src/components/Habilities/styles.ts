import styled from 'styled-components'

type ProgressContentProps = {
  pct: number
}

export const CardWrap = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  display: grid;
  gap: 2rem;
  max-width: 72rem;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`

export const Card = styled.div`
  transition-property: all;
  border-radius: 1rem;
  border-width: 1px;
  border-color: ${({ theme }) => `${theme['green-700']}33`};
  background-color: #00000033;
  padding: 1.5rem;
  transition:
    opacity 0.7s ease,
    transform 0.7s ease;
  will-change: opacity, transform;
  opacity: 1;
  transform: translateY(0);

  transition-delay: 0ms;
`

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`

export const Container = styled.div`
  margin-top: 1rem;
`

export const CardHeader = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;

  h3 {
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 700;
    color: ${({ theme }) => theme['gray-100']};
    margin-left: 1rem;
  }
`

export const CardIconWrap = styled.div`
  display: flex;
  width: 3rem;
  height: 3rem;
  align-items: center;
  justify-content: center;
  border-radius: 0.75rem;
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme['green-gradient']}
  );
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.3s;

  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: ${({ theme }) => theme['gray-100']};
  }
`

export const ContainerItems = styled.div`
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.3s;
`

export const ContainerItemTitle = styled.span`
  display: inline-block;
  font-weight: 700;
  color: ${({ theme }) => theme['gray-300']};
  transition-property:
    color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`

export const ContainerItemPct = styled.span`
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme['green-300']};
`

export const ProgressContainer = styled.div`
  width: 100%;
  height: 0.5rem;
  overflow: hidden;
  border-radius: 9999px;
  background-color: ${({ theme }) => theme['gray-700']};
`

export const ProgressContent = styled.div<ProgressContentProps>`
  height: 100%;
  transform-origin: left;
  border-radius: 9999px;
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme['blue-dark-gradient']}
  );
  transition-property: all;
  transition-duration: 1s;
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);

  width: ${({ pct }) => `${pct}%`};
  transform: scaleX(1);
`
