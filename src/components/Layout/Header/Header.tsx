import Image from 'next/image'
import { HeaderWrapper, NavWrapper, Big, Logo, Navs } from './HeaderStyle'
import joji from 'assets/joji-memoji.jpeg'
import useHeader from './useHeader'
import { layout } from '@/lib/config/urlConfig'

const Header = () => {
  const { handleHome, handleDaily, handleAbout, handleSignUp } = useHeader()

  return (
    <HeaderWrapper>
      <NavWrapper>
        <Logo onClick={handleHome}>
          <Big>ZOZI</Big>studio.
        </Logo>
        <Navs onClick={handleDaily}>DAILY</Navs>
        <Navs onClick={handleAbout}>ABOUT</Navs>
      </NavWrapper>
      <NavWrapper>
        <Navs onClick={handleSignUp}>Sign up</Navs>
        <Navs>Sign in</Navs>
        {/* <Image  src={joji} alt='조지의 미모지' width='40' height='40' /> */}
      </NavWrapper>
    </HeaderWrapper>
  )
}

export default Header
