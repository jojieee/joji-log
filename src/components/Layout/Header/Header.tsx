import Image from 'next/image'
import { HeaderWrapper, NavWrapper, Big, Logo, Navs } from './HeaderStyle'
import joji from 'assets/joji-memoji.jpeg'
import useHeader from './useHeader'

const Header = () => {
  const { handleHome, handleAbout } = useHeader()

  return (
    <HeaderWrapper>
      <NavWrapper>
        <Logo onClick={handleHome}>
          <Big>ZOZI</Big>studio.
        </Logo>
        <Navs>Study</Navs>
        <Navs onClick={handleAbout}>About</Navs>
      </NavWrapper>
      <Image src={joji} alt='조지의 미모지' width='40' height='40' />
    </HeaderWrapper>
  )
}

export default Header
