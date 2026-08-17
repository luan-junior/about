import styled, { css } from 'styled-components'

type MenuContainerListProps = {
  active?: boolean
}

const NAV_BREAKPOINT = '1023px'

export const Container = styled.header`
  background-color: #000000cc;
  border-color: ${({ theme }) => `${theme['green-700']}33`};
  border-bottom-width: 1px;
  width: 100%;
  z-index: 50;
  top: 0;
  position: sticky;

  -webkit-backdrop-filter: blur(16px);
  backdrop-filter: blur(16px);
`

export const ContentNav = styled.nav`
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  margin-left: auto;
  margin-right: auto;
  width: 100%;

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

export const MenuContent = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: ${NAV_BREAKPOINT}) {
    display: none;
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`

export const ContentWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`

export const ContentLogo = styled.div`
  cursor: pointer;
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme['green-dark-gradient']}
  );
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  font-weight: 700;
  color: transparent;
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.3s;
  background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  line-height: 1.1 !important;
  padding-bottom: 0.1em;
  flex-shrink: 0;
  min-width: 0;
`

export const MenuContentLink = styled.li<MenuContainerListProps>`
  :hover {
    color: ${({ theme }) => theme['green-300']};
  }
  a {
    margin: 0;
    padding: 0;

    font-family: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    font-size: 100%;
    font-weight: inherit;
    line-height: inherit;
    letter-spacing: inherit;

    cursor: pointer;
    border-style: none;
    background-color: transparent;

    position: relative;
    color: ${({ theme }) => theme['gray-300']};
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 0.3s;

    margin-left: 2rem;

    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 2px;
      background: linear-gradient(
        90deg,
        ${({ theme }) => theme['green-dark-gradient']}
      );
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 100%;
    }
  }

  ${({ active }) =>
    active &&
    css`
      a::after {
        width: 100% !important;
      }
    `}
`

export const ButtonMenuMobile = styled.button<{ $open?: boolean }>`
  border: none;
  display: none;
  margin: 0;
  padding: 0.5rem;
  font-family: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  font-size: 100%;
  font-weight: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  text-transform: none;
  -webkit-appearance: button;
  background-color: transparent;
  background-image: none;
  cursor: pointer;
  border-radius: 0.5rem;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.white};
  transition-property:
    color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;
  flex-shrink: 0;

  &:hover {
    background-color: #ffffff0f;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme['green-300']};
    outline-offset: 2px;
  }

  @media (max-width: ${NAV_BREAKPOINT}) {
    display: flex;
  }

  svg {
    width: 1.75rem;
    height: 1.75rem;
  }
`

export const MobileMenuBackdrop = styled.button<{ $open: boolean }>`
  display: none;

  @media (max-width: ${NAV_BREAKPOINT}) {
    display: ${({ $open }) => ($open ? 'block' : 'none')};
    position: fixed;
    inset: 0;
    border: none;
    padding: 0;
    margin: 0;
    background: #0000009e;
    z-index: 90;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    backdrop-filter: blur(6px);
  }
`

export const MobileMenuPanel = styled.aside<{ $open: boolean }>`
  display: none;

  @media (max-width: ${NAV_BREAKPOINT}) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    max-height: 100dvh;
    width: min(20rem, 88vw);
    background: ${({ theme }) => theme['gray-900']};
    border-left: 1px solid ${({ theme }) => theme['gray-800']};
    z-index: 100;
    padding: 3.5rem 1.25rem 1.5rem;
    box-shadow: -12px 0 40px #00000073;
    transform: translateX(${({ $open }) => ($open ? '0' : '100%')});
    visibility: ${({ $open }) => ($open ? 'visible' : 'hidden')};
    transition:
      transform 0.32s cubic-bezier(0.4, 0, 0.2, 1),
      visibility 0.32s;
    overflow-y: auto;
    overscroll-behavior: contain;
  }
`

export const MobileMenuClose = styled.button`
  display: none;

  @media (max-width: ${NAV_BREAKPOINT}) {
    display: flex;
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border: none;
    border-radius: 0.5rem;
    background: transparent;
    color: ${({ theme }) => theme['gray-300']};
    cursor: pointer;
    transition: background-color 0.15s ease;

    &:hover {
      background-color: #ffffff14;
      color: ${({ theme }) => theme.white};
    }

    &:focus-visible {
      outline: 2px solid ${({ theme }) => theme['green-300']};
      outline-offset: 2px;
    }
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`

export const MobileNavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
  flex: 1;
`

export const MobileNavItem = styled.li<{ $active?: boolean }>`
  border-bottom: 1px solid ${({ theme }) => theme['gray-800']};

  a {
    display: block;
    padding: 1rem 0.25rem;
    color: ${({ theme, $active }) =>
      $active ? theme['green-300'] : theme['gray-300']};
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s ease;

    &:hover {
      color: ${({ theme }) => theme['green-300']};
    }
  }
`

export const MobileMenuFooter = styled.div`
  margin-top: auto;
  padding-top: 1.5rem;
  border-top: 1px solid ${({ theme }) => theme['gray-800']};

  nav {
    margin-left: 0 !important;
    margin-right: 0 !important;
    width: 100%;
  }
`
