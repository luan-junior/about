import styled from 'styled-components'

export const Header = styled.div`
  text-align: center;
  padding: 2rem 1rem;
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 2rem;
  padding: 2rem;
`

export const Figure = styled.figure`
  margin: 0;
  overflow: hidden;
  height: 583px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 6px;
    /* object-fit: scale-down; */
    transition: transform 0.4s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`

export const Figcaption = styled.figcaption`
  margin-top: 0.7rem;
  font-size: 0.95rem;
  text-align: center;
  color: ${({ theme }) => theme['gray-500']};
`

export const Title = styled.h1`
  text-align: center;
  padding: 2rem 1rem;
  font-weight: 400;
`

export const Description = styled.p``
