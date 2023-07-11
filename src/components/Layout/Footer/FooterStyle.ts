import styled from 'styled-components'
import instagramIcon from 'assets/instagram.svg'

export const FooterWrapper = styled.div`
  display: flex;
  width: 100%;
  height: ${({ theme }) => theme.figure * 20}rem;
  padding: ${({ theme }) => theme.default_padding}rem;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.color.gray_900};
  color: ${({ theme }) => theme.color.black};
  border-top: 1px solid ${({ theme }) => theme.color.key_color};
`
export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${({ theme }) => theme.figure * 2}rem;
`
export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  color: ${({ theme }) => theme.color.white};
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.figure * 2}rem;
`
export const ContactTitle = styled.div`
  color: ${({ theme }) => theme.color.gray_400};
`
export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.figure}rem;
`
export const Info = styled.div`
  display: flex;
  font-size: ${({ theme }) => (theme.figure / 4) * 7}rem;
  align-items: center;
  flex-wrap: wrap;
  div {
    margin-bottom: ${({ theme }) => theme.figure}rem;
    &:after {
      content: '';
      display: inline-block;
      border-left: 1px solid ${({ theme }) => theme.color.gray_500};
      height: ${({ theme }) => (theme.figure / 4) * 7}rem;
      margin: 0 ${({ theme }) => (theme.figure / 2) * 3}rem -${({ theme }) => theme.figure / 4}rem;
    }
    &:last-child::after {
      content: none;
    }
  }
`
export const InstagramIcon = styled(instagramIcon)`
  width: ${({ theme }) => theme.figure * 3}rem;
  height: ${({ theme }) => theme.figure * 3}rem;
  ${({ theme }) => theme.pointer};
  color: ${({ theme }) => theme.color.gray_300};
  margin-bottom: ${({ theme }) => theme.figure}rem;
  &:hover {
    transition: all 0.5s;
    color: ${({ theme }) => theme.color.key_color};
  }
`
