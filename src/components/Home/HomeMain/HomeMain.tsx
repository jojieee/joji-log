import React from 'react'
import { HomeMainWrapper, ContentWrapper, ContentTitle, Content } from './HomeMainStyle'
import useHomeMain from './useHomeMain'
import { contentListData } from '@/lib/contentListData'

const HomeMain = () => {
  const { handleContent } = useHomeMain()

  return (
    <HomeMainWrapper>
      {contentListData.map((val, idx) => (
        <ContentWrapper key={idx} onClick={() => handleContent(idx + 1)}>
          <ContentTitle>{val.title}</ContentTitle>
          <Content>{val.content}</Content>
        </ContentWrapper>
      ))}
    </HomeMainWrapper>
  )
}

export default HomeMain
