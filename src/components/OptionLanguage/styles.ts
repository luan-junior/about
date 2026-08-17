import { styled } from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: inline-block;
  margin-left: 2rem;
`

export const Flag = styled.span`
  display: inline-flex;
  width: 1.25rem;
  height: 0.9rem;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 2px;

  svg {
    width: 100%;
    height: 100%;
    display: block;
  }
`

export const Trigger = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.5rem;
  border: none;
  border-radius: 0.5rem;
  background: transparent;
  color: ${({ theme }) => theme['gray-300']};
  font-size: 0.875rem;
  font-family: inherit;
  cursor: pointer;

  svg:last-child {
    width: 1.1rem;
    height: 1.1rem;
  }

  &:hover,
  &:focus-visible {
    color: ${({ theme }) => theme.white};
    outline: none;
  }
`

export const Menu = styled.div`
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  z-index: 30;
  min-width: 10.5rem;
  padding: 0.35rem;
  border: 1px solid ${({ theme }) => theme['gray-800']};
  border-radius: 0.75rem;
  background: ${({ theme }) => theme['gray-900']};
  box-shadow: 0 12px 30px #00000073;
`

export const OptionButton = styled.button<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  width: 100%;
  padding: 0.55rem 0.65rem;
  border: none;
  border-radius: 0.5rem;
  background: ${({ theme, $active }) =>
    $active ? theme['gray-800'] : 'transparent'};
  color: ${({ theme }) => theme['gray-300']};
  font-size: 0.875rem;
  font-family: inherit;
  text-align: left;
  cursor: pointer;

  &:hover,
  &:focus-visible {
    background: ${({ theme }) => theme['gray-800']};
    color: ${({ theme }) => theme.white};
    outline: none;
  }
`
