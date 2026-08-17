import { styled } from 'styled-components'

type ContainerProps = {
  $alignItems?:
    | 'center'
    | 'end'
    | 'flex-end'
    | 'flex-start'
    | 'inherit'
    | 'initial'
    | 'left'
    | 'normal'
    | 'revert'
    | 'right'
    | 'space-around'
    | 'space-between'
    | 'space-evenly'
    | 'start'
    | 'stretch'
    | 'unset'
  $justifyContent?:
    | 'center'
    | 'end'
    | 'flex-end'
    | 'flex-start'
    | 'inherit'
    | 'initial'
    | 'left'
    | 'normal'
    | 'revert'
    | 'right'
    | 'space-around'
    | 'space-between'
    | 'space-evenly'
    | 'start'
    | 'stretch'
    | 'unset'
  $gap?: string
  $flexWrap?:
    | 'nowrap'
    | 'wrap'
    | 'wrap-reverse'
    | 'inherit'
    | 'initial'
    | 'revert'
    | 'revert-layer'
    | 'unset'
  $flexDirection?: 'row' | 'column'
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: ${({ $alignItems }) => $alignItems};
  justify-content: ${({ $justifyContent }) => $justifyContent};
  gap: ${({ $gap }) => $gap};
  flex-wrap: ${({ $flexWrap }) => $flexWrap};
  flex-direction: ${({ $flexDirection }) => $flexDirection};
`
