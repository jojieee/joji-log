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
  padding: ${({ theme }) => theme.figure * 2}rem;
  width: ${({ theme }) => theme.figure * 30}rem;
  height: ${({ theme }) => theme.figure * 17}rem;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 4px 12px 30px 6px rgb(0 0 0 / 20%);
  }
  box-shadow: 4px 12px 30px 6px rgb(0 0 0 / 9%);
  transition: all 0.2s ease-in-out;
  background: rgba(238, 238, 238, 0.6);
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.figure * 2}rem;
  border: 1px solid ${({ theme }) => theme.color.key_color};
`
export const ContentTitle = styled.div`
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  font-size: ${({ theme }) => (theme.figure / 2) * 5}rem;
`
export const Content = styled(ContentTitle)`
  -webkit-line-clamp: 4;
  font-size: ${({ theme }) => theme.figure * 2}rem;
  color: ${({ theme }) => theme.color.gray_900};
`
