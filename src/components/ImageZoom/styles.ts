import styled from'styled-components';

export type FigureProps = {
  width?: number
  height?: number
}

export const Figure = styled.figure<FigureProps>`
  width: ${props => props.width ? `${props.width}px` : '200px'};
  height: ${props => props.height ? `${props.height}px` : '200px'};
  margin: 20px auto;
  border: 5px solid ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.white};
  box-shadow: 1px 1px 3px #00000066;
  overflow: hidden;
  position: relative;
  transition: all 0.4s ease-in;

  &:hover {
    transform: scale(1.5);
    z-index: 2;
  }

  &:hover img {
    transform: scale(1);
  }

  &:hover figcaption {
    opacity: 1;
  }
  
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.4s ease-in;
  transform: scale(2);
  transform-origin: center;
`

export const FigCaption = styled.figcaption`
  opacity: 0;
  color: ${({ theme }) => theme.white};
  text-shadow: 1px 1px 1px #000000;
  background-color: #0000004d;
  font-size: 9pt;
  padding: 5px;
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  transition: opacity 0.4s ease-in;
`