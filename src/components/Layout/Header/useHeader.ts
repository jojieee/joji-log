import { layout } from '@/lib/config/urlConfig'
import useLocation from '@/utils/hooks/useLocation'

const useHeader = () => {
  const { goLocation } = useLocation()

  const handleHome = () => {
    goLocation(layout.index)
  }
  const handleStudy = () => {
    goLocation(layout.study)
  }
  const handleAbout = () => {
    goLocation(layout.about)
  }

  return { handleHome, handleStudy, handleAbout }
}

export default useHeader
