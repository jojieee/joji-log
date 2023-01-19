import { useRouter } from 'next/router'
import { useCallback } from 'react'

const useLocation = () => {
  const { push, replace } = useRouter()

  const goLocation = useCallback(
    (url: string, options?: any) => {
      push({
        pathname: url,
        ...options
      })
    },
    [push]
  )

  const replaceLocation = useCallback(
    (url: string) => {
      replace(url)
    },
    [replace]
  )

  const openNewPage = (url: string) => {
    window.open(url, '_blank')
  }

  return { goLocation, replaceLocation, openNewPage }
}

export default useLocation
