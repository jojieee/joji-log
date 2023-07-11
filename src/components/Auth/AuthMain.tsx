import { AuthMainWrapper, AuthContent, LoginBtn } from './AuthMainStyle'

const AuthMain = ({ children }: any) => {
  return (
    <AuthMainWrapper>
      <AuthContent>
        <div>ZOZI studio</div>
        <div>인풋{children}</div>
      </AuthContent>
      <LoginBtn>로그인</LoginBtn>
    </AuthMainWrapper>
  )
}

export default AuthMain
