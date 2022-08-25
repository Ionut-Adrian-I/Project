import React, { useState, useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"
import { getSingleArticle } from "../../API"
import { useDocumentTitle } from "../../hook/useDocumentTitle"
import {
  ContactSubscribeCard,
  HeroSection,
  SocialsCard,
  FeaturedProfileCard,
} from "../../components/cards"
import { Spinner } from "../../components"
import { StyledContainer } from "../../components/layout/Rows&Collumns/Rows&Collumns.style"
import * as S from "./styles/SingleInsgightPage.styles"
import DOMPurify from "dompurify"
// import { jsPDF } from "jspdf"

const SingleInsgightPage = () => {
  const { state } = useLocation()
  // const doc = new jsPDF()
  const article = useRef(null)

  const [articleData, setArticleData] = useState(null)

  useEffect(() => {
    getSingleArticle(setArticleData, state)
  }, [])

  useDocumentTitle(articleData?.title)

  const SavePdf = () => {
    // doc.text(article?.current.textContent, 10, 10)
    // doc.save("a4.pdf")
    console.log("Print?")
  }

  return (
    <>
      {articleData ? (
        <>
          <HeroSection
            height={360}
            title={articleData.title || "No title"}
            backgroundUrl="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            date={articleData.date || "No date"}
            route={{
              route: "health & life insigths",
              subRoute: "health & life case studies",
            }}
          />
          <StyledContainer>
            <S.Container>
              <S.Article
                ref={article}
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(articleData.content),
                }}
              ></S.Article>
              <S.RightSection>
                <>
                  <h3>AUTHORS</h3>

                  {articleData.authors &&
                    articleData.authors.map((author, index) => (
                      <FeaturedProfileCard {...author} key={index} />
                    ))}
                </>

                <>
                  <h3>FEATURED PROFILES</h3>

                  {articleData.experts &&
                    articleData.experts.map((expert, index) => (
                      <FeaturedProfileCard {...expert} key={index} />
                    ))}
                </>
                <ContactSubscribeCard />
                <SocialsCard />
              </S.RightSection>
            </S.Container>
            {/* <div onClick={SavePdf} className="btn-primary">
              Get the Pdf
            </div> */}
          </StyledContainer>
        </>
      ) : (
        <Spinner />
      )}
    </>
  )
}

export default SingleInsgightPage
