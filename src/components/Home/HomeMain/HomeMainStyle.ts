import styled from 'styled-components'

export const HomeMainWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.figure * 2}rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1080px;
`
export const ContentWrapper = styled.div`
  padding: ${({ theme }) => theme.figure * 3}rem;
  width: ${({ theme }) => theme.figure * 30}rem;
  height: ${({ theme }) => theme.figure * 17}rem;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 4px 12px 30px 6px rgb(0 0 0 / 20%);
  }
  box-shadow: 4px 12px 30px 6px rgb(0 0 0 / 9%);
  transition: all 0.2s ease-in-out;
  background: rgba(133, 240, 50, 0.5);
`
