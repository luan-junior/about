import type { PropsWithChildren, CSSProperties } from 'react'
import { Container } from './styles'

interface FlexProps extends PropsWithChildren {
  alignItems?:
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
  justifyContent?:
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
  gap?: string
  flexWrap?:
    | 'nowrap'
    | 'wrap'
    | 'wrap-reverse'
    | 'inherit'
    | 'initial'
    | 'revert'
    | 'revert-layer'
    | 'unset'
  flexDirection?: 'row' | 'column'
  style?: CSSProperties
}

export const Flex = ({
  children,
  flexDirection,
  alignItems,
  justifyContent,
  gap,
  flexWrap,
  ...props
}: FlexProps) => {
  return (
    <Container
      $alignItems={alignItems}
      $justifyContent={justifyContent}
      $gap={gap}
      $flexWrap={flexWrap}
      $flexDirection={flexDirection}
      {...props}
    >
      {children}
    </Container>
  )
}
