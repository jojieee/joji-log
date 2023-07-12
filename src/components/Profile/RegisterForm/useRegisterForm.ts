import { SetStateAction, useCallback, useState } from 'react'
import { layout } from '@/lib/config/urlConfig'
import useLocation from '@/utils/hooks/useLocation'
// import { mutate } from 'swr'

const useRegisterForm = () => {
  const { goLocation } = useLocation()

  const [isLoading, setIsloading] = useState(false)
  const [errors, setErrors] = useState([])
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleUsernameChange = useCallback(
    (e: { target: { value: SetStateAction<string> } }) => setUsername(e.target.value),
    []
  )
  const handleEmailChange = useCallback(
    (e: { target: { value: SetStateAction<string> } }) => setEmail(e.target.value),
    []
  )
  const handlePasswordChange = useCallback(
    (e: { target: { value: SetStateAction<string> } }) => setPassword(e.target.value),
    []
  )

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setIsloading(true)

    // try {
    //   const {data, status} = await UserAPI.register(username, email, password)
    //   if(status !== 200 && data?.errors) {
    //     setErrors(data.errors)
    //   }
    //   if(data?.user) {
    //     window.localStorage.setItem('user',JSON.stringify(data.user));
    //     mutate('user', data.user);
    //     goLocation(layout.index)
    //   }
    // } catch (error) {
    //   console.log(error);
    // } finally {
    //   setIsloading(false);
    // }
  }

  return { handleUsernameChange, handleEmailChange, handlePasswordChange, handleSubmit }
}

export default useRegisterForm
