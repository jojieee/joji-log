import Image from 'next/image'
import {
  HeaderWrapper,
  NavWrapper,
  MobileNavWrapper,
  Big,
  Logo,
  Navs,
  OpenIcon,
  CloseIcon
} from './HeaderStyle'
import joji from 'assets/joji-memoji.jpeg'
import useHeader from './useHeader'
import { useDownCustom } from '@/utils/hooks/useMatch'

const Header = () => {
  const { isToggleOpen, handleToggleOpen, handleHome, handleDaily, handleAbout, handleSignUp } =
    useHeader()
  const matchDownXs = useDownCustom('550px')

  return (
    <>
      {matchDownXs ? (
        <>
          <HeaderWrapper>
            <NavWrapper>
              <Logo onClick={handleHome}>
                <Big>ZOZI</Big>studio.
              </Logo>
            </NavWrapper>
            <div onClick={() => handleToggleOpen()}>
              {isToggleOpen ? (
                <div>
                  <CloseIcon />
                </div>
              ) : (
                <div>
                  <OpenIcon />
                </div>
              )}
            </div>
          </HeaderWrapper>
          {isToggleOpen && (
            <MobileNavWrapper isMobileSize={matchDownXs}>
              <Navs onClick={handleDaily}>DAILY</Navs>
              <Navs onClick={handleAbout}>ABOUT</Navs>
              <Navs onClick={handleSignUp}>Sign up</Navs>
              <Navs>Sign in</Navs>
              {/* <Image  src={joji} alt='조지의 미모지' width='40' height='40' /> */}
            </MobileNavWrapper>
          )}
        </>
      ) : (
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
      )}
    </>
  )
}

export default Header
