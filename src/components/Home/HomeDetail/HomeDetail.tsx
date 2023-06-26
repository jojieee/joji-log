import { contentListData } from '@/lib/contentListData'
import { useRouter } from 'next/router'

const HomeDetail = () => {
  const router = useRouter()

  return (
    <div>
      <div>{contentListData[parseInt(router.query.id as string, 10) - 1].title}</div>
      <div>{contentListData[parseInt(router.query.id as string, 10) - 1].content}</div>
    </div>
  )
}

export default HomeDetail
