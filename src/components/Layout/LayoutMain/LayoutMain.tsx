import { ReactNode } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { LayoutMainWrapper, LayoutContent } from './LayoutMainStyle'
import mainBackground from 'assets/main_background.jpg'

interface ContentProps {
  children: ReactNode
}

const LayoutMain = ({ children }: ContentProps) => {
  return (
    <LayoutMainWrapper>
      <Header />
      <LayoutContent mainBackground={mainBackground.src}>{children}</LayoutContent>
      <Footer />
    </LayoutMainWrapper>
  )
}

export default LayoutMain
