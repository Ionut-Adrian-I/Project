import React, { useEffect, useState } from "react"
import { useLocation } from "react-router"
import {
  HeroSection,
  Services,
  CardProfessionals,
} from "../../components/cards"
import {
  StyledCol2,
  StyledCol1,
  StyledRow,
} from "../../components/layout/Rows&Collumns/Rows&Collumns.style.js"
import { useDocumentTitle } from "../../hook"
import { fetchData } from "../../API"
import styled from "styled-components"
import { fetchExpertise } from "../../store/actions/hls/hlsHome"
import { useDispatch, useSelector } from "react-redux"

const ExpertisePageContainer = styled.div`
  .leftSection {
    border-right: 3px solid var(--gray1);
    .expertiseIndustry {
      color: var(--hover-blue);
      padding-right: 1rem;
    }
  }
  .heroContainer {
    h1 {
      font-size: 80px;
      line-height: 80px;
      letter-spacing: 1px;
    }
  }
`

const ExpertisePage = () => {
  const dispatch = useDispatch()
  const { state } = useLocation()

  const expertise = useSelector(state => state.hlsHero.expertise)

  useEffect(() => {
    fetchData(setCarouselData)
    dispatch(fetchExpertise(state))
  }, [state])

  useDocumentTitle(
    "Expertise | Pharma & MedTech Portfolio Management | Alvarez & Marsal"
  )
  console.log(expertise)
  return (
    <ExpertisePageContainer>
      <HeroSection
        height={300}
        pageCategory="Expertise"
        title={expertise?.name}
      />
      <StyledRow>
        <StyledCol1 className="leftSection">
          <div
            dangerouslySetInnerHTML={{
              __html: expertise?.description ?? expertise?.teaser_text,
            }}
            className="descriptionContainer"
          />

          <h3 className="text-primary fw-bold">Our Services</h3>
          {[1, 2, 3].map(() => (
            <Services
              title="Strategic Transformation"
              conntent={
                "ea ut fugiat. Laborum irure non qui nulla minim anim ea ut fugiat. Laborum irure non qui nulla minim anim "
              }
            />
          ))}
          <div className="industrySection">
            <h3 className="text-primary fw-bold">Industry:</h3>

            {expertise?.industries?.map(expertiseIndustry => (
              <span key={expertiseIndustry.id} className="expertiseIndustry">
                {expertiseIndustry?.name}
              </span>
            ))}
          </div>
        </StyledCol1>
        <StyledCol2>
          {expertise?.experts?.map(expert => {
            let cardContent = {
              imageSrc: expert?.image,
              name: expert?.name,
              position: expert?.profession_title,
              country: expert?.global_location,
            }
            return <CardProfessionals {...cardContent} />
          })}
        </StyledCol2>
      </StyledRow>
    </ExpertisePageContainer>
  )
}

export default ExpertisePage
