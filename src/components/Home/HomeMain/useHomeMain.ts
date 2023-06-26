import { layout } from '@/lib/config/urlConfig'
import useLocation from '@/utils/hooks/useLocation'

const useHomeMain = () => {
  const { goLocation } = useLocation()
  const handleContent = (uid: number) => {
    goLocation(`${layout.content}/${uid}`)
  }

  return { handleContent }
}

export default useHomeMain
