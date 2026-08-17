import { useState } from 'react'
import { Link, useRouterState } from '@tanstack/react-router'

import {
  Container,
  Content,
  Hamburger,
  Menu,
  MenuContainer,
  MenuContainerList,
  Closed,
} from './styles'
import { useWindowSize } from '@/hooks/useWindowSize'
import { useTranslate } from '@/hooks/useTranslate'
import { MENU } from '@/utils/constants'
import { OptionLanguage } from '../OptionLanguage'

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { width } = useWindowSize()
  const { translator } = useTranslate()

  const location = useRouterState({ select: (s) => s.location })
  const currentPath = '/' + location.pathname.split('/').filter(Boolean).pop()

  return (
    <Container>
      <Content>
        <Hamburger onClick={() => setMenuOpen(true)}>
          <span />
          <span />
          <span />
        </Hamburger>
        <OptionLanguage />
      </Content>
      <Menu open={menuOpen} width={width}>
        <Closed onClick={() => setMenuOpen(false)}>X</Closed>
        <MenuContainer>
          {MENU.map((link) => (
            <MenuContainerList
              key={link.label}
              active={currentPath === link.to}
            >
              <Link to={link.to}>{translator(link.label)}</Link>
            </MenuContainerList>
          ))}
        </MenuContainer>
      </Menu>
    </Container>
  )
}
