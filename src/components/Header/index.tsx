import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link, useNavigate, useRouterState } from '@tanstack/react-router'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

import {
  Container,
  ContentNav,
  Content,
  ContentLogo,
  MenuContent,
  MenuContentLink,
  ButtonMenuMobile,
  ContentWrap,
  MobileMenuLayer,
  MobileMenuBackdrop,
  MobileMenuPanel,
  MobileMenuClose,
  MobileNavList,
  MobileNavItem,
  MobileMenuFooter,
} from './styles'
import { useTranslate } from '@/hooks/useTranslate'
import { MENU } from '@/utils/constants'
import { OptionLanguage } from '../OptionLanguage'

const MOBILE_NAV_MQ = '(max-width: 1023px)'

function isRouteActive(to: string, pathname: string) {
  if (to === '/') {
    return pathname === '/' || pathname === ''
  }
  return pathname === to
}

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { translator } = useTranslate()
  const navigate = useNavigate()

  const location = useRouterState({ select: (s) => s.location })
  const pathname = location.pathname

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!mobileMenuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [mobileMenuOpen])

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_NAV_MQ)
    const onChange = () => {
      if (!mq.matches) setMobileMenuOpen(false)
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (!mobileMenuOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [mobileMenuOpen])

  const text = '{ code & creativity }'

  const openMobileMenu = () => setMobileMenuOpen(true)
  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <>
      <Container>
        <ContentNav aria-label={translator('Main')}>
          <Content>
            <ContentLogo
              role="button"
              tabIndex={0}
              onClick={() => navigate({ to: '/' })}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  navigate({ to: '/' })
                }
              }}
            >
              {text}
            </ContentLogo>
            <ContentWrap>
              <MenuContent>
                {MENU.map((link) => (
                  <MenuContentLink
                    key={link.label}
                    active={isRouteActive(link.to, pathname)}
                  >
                    <Link to={link.to}>{translator(link.label)}</Link>
                  </MenuContentLink>
                ))}
                <OptionLanguage />
              </MenuContent>
              <ButtonMenuMobile
                type="button"
                aria-label={
                  mobileMenuOpen
                    ? translator('Close menu')
                    : translator('Open menu')
                }
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation"
                $open={mobileMenuOpen}
                onClick={() =>
                  mobileMenuOpen ? closeMobileMenu() : openMobileMenu()
                }
              >
                {mobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
              </ButtonMenuMobile>
            </ContentWrap>
          </Content>
        </ContentNav>
      </Container>
      {createPortal(
        <MobileMenuLayer $open={mobileMenuOpen}>
          <MobileMenuBackdrop
            type="button"
            aria-label={translator('Close menu')}
            tabIndex={mobileMenuOpen ? 0 : -1}
            $open={mobileMenuOpen}
            onClick={closeMobileMenu}
          />
          <MobileMenuPanel
            id="mobile-navigation"
            $open={mobileMenuOpen}
            aria-hidden={!mobileMenuOpen}
          >
            <MobileMenuClose
              type="button"
              aria-label={translator('Close menu')}
              onClick={closeMobileMenu}
            >
              <AiOutlineClose />
            </MobileMenuClose>
            <MobileNavList>
              {MENU.map((link) => (
                <MobileNavItem
                  key={link.label}
                  $active={isRouteActive(link.to, pathname)}
                >
                  <Link to={link.to} onClick={closeMobileMenu}>
                    {translator(link.label)}
                  </Link>
                </MobileNavItem>
              ))}
            </MobileNavList>
            <MobileMenuFooter>
              <OptionLanguage />
            </MobileMenuFooter>
          </MobileMenuPanel>
        </MobileMenuLayer>,
        document.body,
      )}
    </>
  )
}
