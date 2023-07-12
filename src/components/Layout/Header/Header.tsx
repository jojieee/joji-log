import Image from 'next/image'
import { HeaderWrapper, NavWrapper, Big, Logo, Navs, OpenIcon, CloseIcon } from './HeaderStyle'
import joji from 'assets/joji-memoji.jpeg'
import useHeader from './useHeader'
import { useDownCustom } from '@/utils/hooks/useMatch'

const Header = () => {
  const {
    isToggleOpen,
    setIsToggleOpen,
    handleToggleOpen,
    handleHome,
    handleDaily,
    handleAbout,
    handleSignUp
  } = useHeader()
  const matchDownXs = useDownCustom('550px')

  return (
    <>
      {matchDownXs ? (
        <>
          <HeaderWrapper>
            <NavWrapper isMobileSize={matchDownXs}>
              <Logo onClick={handleHome}>
                <Big>ZOZI</Big>studio.
              </Logo>
            </NavWrapper>
            <div onClick={() => setIsToggleOpen(!isToggleOpen)}>
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
            <HeaderWrapper>
              <NavWrapper isMobileSize={matchDownXs}>
                <Navs onClick={handleDaily}>DAILY</Navs>
                <Navs onClick={handleAbout}>ABOUT</Navs>
                <Navs onClick={handleSignUp}>Sign up</Navs>
                <Navs>Sign in</Navs>
                {/* <Image  src={joji} alt='조지의 미모지' width='40' height='40' /> */}
              </NavWrapper>
            </HeaderWrapper>
          )}
        </>
      ) : (
        <HeaderWrapper>
          <NavWrapper isMobileSize={matchDownXs}>
            <Logo onClick={handleHome}>
              <Big>ZOZI</Big>studio.
            </Logo>
            <Navs onClick={handleDaily}>DAILY</Navs>
            <Navs onClick={handleAbout}>ABOUT</Navs>
          </NavWrapper>
          <NavWrapper isMobileSize={matchDownXs}>
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
