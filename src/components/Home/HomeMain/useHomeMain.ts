import { layout } from '@/lib/config/urlConfig'
import useLocation from '@/utils/hooks/useLocation'

const useHomeMain = (contentListData: any) => {
  const { goLocation } = useLocation()
  const handleContent = (uid: number) => {
    goLocation(`${layout.content}/${uid}`, contentListData)
  }

  return { handleContent }
}

export default useHomeMain
