import {
  RegisterFormTitle,
  RegisterFormWrapper,
  FormWrapper,
  FieldsetWrapper,
  FormInput,
  SignUpBtn
} from './RegisterFormStyle'
import useRegisterForm from './useRegisterForm'

const RegisterForm = () => {
  const {
    // isLoading,
    // errors,
    // username,
    // email,
    // password,
    handleUsernameChange,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit
  } = useRegisterForm()

  return (
    <>
      {/* <ListErrors errors={errors} /> */}
      <RegisterFormWrapper>
        <RegisterFormTitle>Sign up</RegisterFormTitle>
        <FormWrapper onSubmit={handleSubmit}>
          <FieldsetWrapper>
            <fieldset>
              <FormInput
                type='text'
                placeholder='Username'
                // value={username}
                onChange={handleUsernameChange}
              />
            </fieldset>
            <fieldset>
              <FormInput
                type='email'
                placeholder='Email'
                // value={email}
                onChange={handleEmailChange}
              />
            </fieldset>
            <fieldset>
              <FormInput
                type='password'
                placeholder='Password'
                // value={password}
                onChange={handlePasswordChange}
              />
            </fieldset>
          </FieldsetWrapper>
          <SignUpBtn
            type='submit'
            // disabled={isLoading}
          >
            Sign up
          </SignUpBtn>
        </FormWrapper>
      </RegisterFormWrapper>
    </>
  )
}

export default RegisterForm
