import { ReactNode } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { LayoutMainWrapper, LayoutContent } from './LayoutMainStyle'
interface ContentProps {
  children: ReactNode
}

const LayoutMain = ({ children }: ContentProps) => {
  return (
    <LayoutMainWrapper>
      <Header />
      <LayoutContent>{children}</LayoutContent>
      <Footer />
    </LayoutMainWrapper>
  )
}

export default LayoutMain
