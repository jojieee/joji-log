import styled from 'styled-components'

export const AuthMainWrapper = styled.div`
  background: ${({ theme }) => theme.color.white};
  width: ${({ theme }) => (theme.figure / 2) * 125}rem;
  height: auto;
  border: 1px solid ${({ theme }) => theme.color.gray_200};
  background: ${({ theme }) => theme.color.gray_100};
  padding: ${({ theme }) => `${theme.figure * 4}rem ${theme.figure * 5}rem`};
  border-radius: ${({ theme }) => theme.figure}rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.figure * 5}rem;
`

export const AuthContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.figure * 2}rem;
`

export const LoginBtn = styled.div`
  border-radius: ${({ theme }) => theme.figure}rem;
  background: ${({ theme }) => theme.color.key_color};
  width: 100%;
  text-align: center;
  padding: ${({ theme }) => `${theme.figure * 2}rem ${theme.figure * 3}rem`};
  color: ${({ theme }) => theme.color.gray_900};
  ${({ theme }) => theme.pointer};
`
