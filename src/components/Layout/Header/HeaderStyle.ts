import styled from 'styled-components'
import openIcon from 'assets/open.svg'
import closeIcon from 'assets/close.svg'

export const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  height: ${({ theme }) => theme.figure * 10}rem;
  padding: ${({ theme }) => theme.default_padding}rem;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  background: ${({ theme }) => theme.color.gray_900};
  border-bottom: 1px solid ${({ theme }) => theme.color.key_color};
  color: ${({ theme }) => theme.color.white};
  z-index: 9999;
  img {
    border-radius: ${({ theme }) => (theme.figure / 4) * 25}rem;
    border: 1px solid ${({ theme }) => theme.color.gray_300};
    ${({ theme }) => theme.pointer};
  }
`

export const NavWrapper = styled.div<{ isMobileSize: boolean }>`
  display: flex;
  align-items: center;
  ${({ isMobileSize }) => isMobileSize && `flex-direction: column`}
`

export const Logo = styled.div`
  padding: ${({ theme }) => `${theme.figure}rem  ${theme.figure * 3}rem ${theme.figure}rem  0 
  `};
  display: flex;
  ${({ theme }) => theme.pointer};
  gap: ${({ theme }) => theme.figure / 4}rem;
  color: ${({ theme }) => theme.color.gray_200};
  align-items: flex-end;
  font-size: ${({ theme }) => (theme.figure / 4) * 7}rem;
`
export const Big = styled.div`
  font-size: ${({ theme }) => theme.figure * 3}rem;
  font-weight: bold;
  color: ${({ theme }) => theme.color.key_color};
`

export const Navs = styled.div`
  padding: 0 ${({ theme }) => (theme.figure / 2) * 5}rem;
  ${({ theme }) => theme.pointer};
  transition: all 0.2s;
  position: relative;
  height: ${({ theme }) => theme.figure * 10}rem;
  line-height: ${({ theme }) => theme.figure * 10}rem;

  &:hover {
    color: ${({ theme }) => theme.color.key_color};
  }
  &:after {
    content: '';
    display: block;
    height: 100%;
    width: 0;
    position: absolute;
    border-bottom: 2px solid ${({ theme }) => theme.color.key_color};
    top: -${({ theme }) => theme.figure * 2}rem;
    left: 50%;
    transform: translateX(-50%);
    transition: width 0.2s ease-in-out;
  }
  &:hover::after {
    width: 50%;
  }
`

export const NavMenu = styled.div<{
  isToggleOpen: boolean
}>`
  display: ${({ isToggleOpen }) => (isToggleOpen ? 'block' : 'none')};
  width: 100%;
`

export const OpenIcon = styled(openIcon)`
  width: 100%;
  max-width: ${({ theme }) => theme.figure * 3}rem;
  min-width: ${({ theme }) => theme.figure * 3}rem;
  height: auto;
  color: ${({ theme }) => theme.color.white};
`

export const CloseIcon = styled(OpenIcon)``
