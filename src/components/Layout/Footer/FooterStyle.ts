import styled from 'styled-components'
import instagramIcon from 'assets/instagram.svg'

export const FooterWrapper = styled.div`
  display: flex;
  width: 100%;
  height: ${({ theme }) => theme.figure * 20}rem;
  padding: ${({ theme }) => theme.default_padding}rem;
  align-items: center;
  justify-content: space-between;
  background: #3a3a3a;
  color: ${({ theme }) => theme.color.black};
  border-top: 1px solid #ebebeb;
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
`
export const ContactTitle = styled.div`
  color: #9b9b9b;
`
export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.figure}rem;
`
export const Info = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.figure * 2}rem;
  font-size: ${({ theme }) => (theme.figure / 4) * 7}rem;
`
export const InstagramIcon = styled(instagramIcon)`
  width: ${({ theme }) => theme.figure * 3}rem;
  height: ${({ theme }) => theme.figure * 3}rem;
  ${({ theme }) => theme.pointer};
`
