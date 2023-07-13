import { layout } from '@/lib/config/urlConfig'
import useLocation from '@/utils/hooks/useLocation'
import { useState } from 'react'

const useHeader = () => {
  const { goLocation } = useLocation()
  const [isToggleOpen, setIsToggleOpen] = useState(false)

  const handleToggleOpen = () => {
    setIsToggleOpen(!isToggleOpen)
  }

  const handleHome = () => {
    goLocation(layout.index)
  }
  const handleDaily = () => {
    goLocation(layout.daily)
  }
  const handleAbout = () => {
    goLocation(layout.about)
  }
  const handleSignUp = () => {
    goLocation(layout.register)
  }

  return {
    isToggleOpen,
    handleToggleOpen,
    handleHome,
    handleDaily,
    handleAbout,
    handleSignUp
  }
}

export default useHeader
