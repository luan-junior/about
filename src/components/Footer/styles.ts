import styled from 'styled-components'

export const Container = styled.footer`
  position: relative;
  z-index: 10;
  border-top: 1px solid ${({ theme }) => `${theme['green-700']}66`};
  background-color: ${({ theme }) => theme['gray-900']};

  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  color: ${({ theme }) => theme.white};
`

export const Wrapper = styled.footer`
  width: 100%;

  margin-left: auto;
  margin-right: auto;
  max-width: 72rem;
  text-align: center;

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

export const Description = styled.footer`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: ${({ theme }) => theme['gray-400']};
  margin-top: 1.5rem;
`

export const Link = styled.a`
  color: ${({ theme }) => theme['green-500']};

  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;
`
