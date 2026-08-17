import styled from 'styled-components'

export const TitleStyled = styled.h2`
  text-align: center;
  margin-top: 5rem;
  margin-bottom: 1.5rem;
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme['blue-dark-gradient']}
  );
  font-weight: 900;
  color: transparent;

  padding-bottom: 0.1em;
  background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  line-height: 1.1 !important;

  @media (min-width: 768px) {
    font-size: 3.75rem;
    line-height: 1;
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
    ${({ theme }) => theme['blue-gradient']}
  );
`
