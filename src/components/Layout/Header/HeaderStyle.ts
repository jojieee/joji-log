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
    border: 1px solid #ddd;
  }

  border-bottom: 1px solid #ebebeb;
  background: #050505;
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
  color: #eee;
  align-items: flex-end;
  font-size: ${({ theme }) => (theme.figure / 4) * 7}rem;
`
export const Big = styled.div`
  font-size: ${({ theme }) => theme.figure * 3}rem;
  font-weight: bold;
  color: #85f032;
`

export const Navs = styled.div`
  padding: ${({ theme }) => `${theme.figure}rem ${theme.figure * 3}rem`};
  ${({ theme }) => theme.pointer};
  transition: all 0.8s;
  &:hover {
    color: #85f032;
  }
`
