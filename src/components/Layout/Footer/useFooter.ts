import useLocation from '@/utils/hooks/useLocation'

const useFooter = () => {
  const { openNewPage } = useLocation()

  const handleInstagram = () => {
    window.open('https://www.instagram.com/j5ning/', '_blank')
  }
  return { handleInstagram }
}

export default useFooter
