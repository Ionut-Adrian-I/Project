import React, { useState, useEffect } from "react"
import {
  PodcastCard,
  ArticlePreviewCard,
  ExpertiseCard,
  HeroSection,
} from "../../components/cards"
import { ButtonWithAnimation } from "../../components/buttons"
import UnalignedItemsConainer from "../../components/layout/UnalignedItemsContainer"

const Practice = () => {
  const link = process.env.REACT_APP_CUSTOM_API_URL + "/hls"

  console.log(link)

  const content =
    "Lorem  Consequat anim eiusmod reprehenderit ut in eiusmod ea ipsum ex. Elit anim amet quis excepteur sint voluptate cillum minim incididunt veniam sint. Esse pariatur magna adipisicing amet do sint amet reprehenderit adipisicing."

  return (
    <>
      <HeroSection height={300} pageCategory="Expertise" title={"f"} />
      <div className="p-3">
        <ButtonWithAnimation text={"some text"} />
        <ButtonWithAnimation black />

        <h1>Those are expertises</h1>
        <UnalignedItemsConainer columnsNumber={3}>
          <ExpertiseCard content={content} />
          <ExpertiseCard />
          <ExpertiseCard />
          <ExpertiseCard />
          <ExpertiseCard content={content} />
          <ExpertiseCard />
          <ExpertiseCard />
          <ExpertiseCard />
        </UnalignedItemsConainer>
        <h1>Those are Articles</h1>
        <UnalignedItemsConainer>
          <ArticlePreviewCard content={content} />
          <ArticlePreviewCard />
          <ArticlePreviewCard />
          <ArticlePreviewCard />
          <ArticlePreviewCard content={content} />
          <ArticlePreviewCard />
          <PodcastCard />
        </UnalignedItemsConainer>
      </div>
    </>
  )
}

export default Practice