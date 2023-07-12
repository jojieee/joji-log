import styled from 'styled-components'

export const RegisterFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.figure * 3}rem;
  width: 100%;
`
export const RegisterFormTitle = styled.div`
  font-size: ${({ theme }) => theme.figure * 5}rem;
`

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({ theme }) => theme.figure * 3}rem;
  width: 100%;
  max-width: ${({ theme }) => (theme.figure / 2) * 125}rem;
`
export const FieldsetWrapper = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.figure * 2}rem;
`
export const FormInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => `${(theme.figure / 2) * 3}rem ${(theme.figure / 2) * 5}rem`};
  border: 1px solid ${({ theme }) => theme.color.gray_200};
  border-radius: ${({ theme }) => (theme.figure / 4) * 3}rem;
`

export const SignUpBtn = styled.button`
  width: fit-content;
  border: 1px solid transparent;
  border-radius: ${({ theme }) => (theme.figure / 4) * 3}rem;
  background: ${({ theme }) => theme.color.success_500};
  padding: ${({ theme }) => `${(theme.figure / 2) * 3}rem ${theme.figure * 3}rem`};
  margin-left: auto;
  color: ${({ theme }) => theme.color.white};
  &:hover {
    background: ${({ theme }) => theme.color.success_600};
  }
`
