import { layout } from '@/lib/config/urlConfig'
import useLocation from '@/utils/hooks/useLocation'

const useHeader = () => {
  const { goLocation } = useLocation()

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

  return { handleHome, handleDaily, handleAbout, handleSignUp }
}

export default useHeader
