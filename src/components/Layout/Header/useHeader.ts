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

  const handleAuth = () => {
    goLocation(layout.auth)
  }

  return { handleHome, handleDaily, handleAbout, handleAuth }
}

export default useHeader
