import styled, { css } from 'styled-components'

type MenuProps = {
  open: boolean
  width: number
}

type MenuContainerListProps = {
  active: boolean
}

export const Container = styled.header`
  display: flex;
  flex-direction: column;
`

export const Content = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 578px) {
    justify-content: space-between;
  |
`

export const Menu = styled.nav<MenuProps>`
  margin-top: 2rem;
  background: ${(props) => props.theme['gray-900']};

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 578px) {
    justify-content: flex-start;
    position: absolute;
    margin-top: 0;
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme['gray-900']};
    z-index: 999;
    margin-left: ${({ open, width }) => (open ? 0 : `-${width}px`)};

    // transition: all 0.2s ease-in-out;
    ${({ open }) =>
      open &&
      css`
        transition: all 0.2s ease-in-out;
      `}
  }
`

export const MenuContainer = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
  padding: 2rem;

  @media (max-width: 578px) {
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }
`

export const MenuContainerList = styled.li<MenuContainerListProps>`
  @media (max-width: 578px) {
    border-bottom: 1px solid ${(props) => props.theme['gray-300']};
  }
  a {
    position: relative;

    &:hover::after {
      width: 100%;
    }

    ${({ active }) =>
      active &&
      css`
        &::after {
          width: 100% !important;
        }
      `}

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0%;
      height: 2px;
      background: #007bff;
      transition: width 0.3s ease;
      display: inline-block;
    }

    @media (max-width: 578px) {
      margin-bottom: 1rem;
      display: inline-block;
    }
  }
`

export const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  position: relative;
  left: 1rem;
  top: 1rem;
  flex-direction: column;
  gap: 5px;

  span {
    width: 25px;
    height: 3px;
    background: white;
    border-radius: 2px;
    transition: 0.3s;
  }

  @media (max-width: 578px) {
    display: flex;
  }
`

export const Closed = styled.span`
  display: none;

  @media (max-width: 578px) {
    font-size: 20px;
    font-weight: bold;
    display: block;
    position: absolute;
    top: 15px;
    right: 22px;
  }
`
