import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  height: ${({ theme }) => theme.figure * 10}rem;
  padding: ${({ theme }) => theme.default_padding}rem;
  align-items: center;
  justify-content: space-between;
  img {
    border-radius: ${({ theme }) => (theme.figure / 4) * 25}rem;
    border: 1px solid ${({ theme }) => theme.color.gray_300};
  }
  position: sticky;
  top: 0;
  background: ${({ theme }) => theme.color.gray_900};
  border-bottom: 1px solid ${({ theme }) => theme.color.key_color};
  color: ${({ theme }) => theme.color.white};
`

export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
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
  padding: ${({ theme }) => `${theme.figure}rem ${theme.figure * 3}rem`};
  ${({ theme }) => theme.pointer};
  transition: all 0.8s;
  &:hover {
    color: ${({ theme }) => theme.color.key_color};
  }
`
