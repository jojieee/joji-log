import { ReactNode } from 'react'

interface ContentProps {
  children: ReactNode
}

const LayoutMain = ({ children }: ContentProps) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  )
}

export default LayoutMain
