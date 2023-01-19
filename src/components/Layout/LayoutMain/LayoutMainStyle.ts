import styled from 'styled-components'

export const LayoutMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
export const LayoutContent = styled.div`
  width: 100%;
  min-width: ${({ theme }) => theme.breakpoints.values.minimum}px;
  min-height: calc(
    100vh - ${({ theme }) => theme.figure * 10}rem - ${({ theme }) => theme.figure * 20}rem
  );
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.default_padding}rem;
`
