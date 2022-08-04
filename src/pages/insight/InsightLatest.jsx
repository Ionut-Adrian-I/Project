import React, { useState, useEffect } from "react";
import {
  ArticleCard,
  HeroSection,
  CarouselSection,
} from "../../components/cards";
import {
  FiltrationNavbar,
  NavbarDropdown,
} from "../../components/navbarComponents";
import { ArticleContainers } from "./styles/inisghts.style";
import { BreadCrumb, FilterBy, Spinner } from "../../components";
import { filtrationNavbarData, PostsArr } from "../../utils/data";
import { getInsights, fetchData } from "../../API";
import { StyledContainer } from "../../components/layout/Rows&Collumns/Rows&Collumns.style";
import { useDocumentTitle } from "../../hook";

const InsightLatest = () => {
  const [filterByTags, setFilterByTags] = useState([
    "sunshine",
    "sunshine",
    "sunshine2",
  ]);

  // Getting the latest articles from server
  const [carouselData, setCarouselData] = useState([]);
  const [insightsContent, setInsightsContent] = useState([]);

  useEffect(() => {
    fetchData(setCarouselData);
    getInsights(setInsightsContent);
  }, []);

  useDocumentTitle("Insights | Latest Insights | Alvarez & Marsal");

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let date = new Date().getFullYear();
  console.log(date);

  return (
    <>
      <HeroSection
        title=" Latest Studies"
        backgroundUrl="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      />

      <FiltrationNavbar
        searchBar2={{ placeholder: "enter search here" }}
        setFilterByTags={setFilterByTags}
        filterByTags={filterByTags}
      >
        {/* {filtrationNavbarData.map((item, index) => (
          <NavbarDropdown data={item.tagNames} key={index}>
            {item.title}
          </NavbarDropdown>
        ))} */}
        <NavbarDropdown data={months}>{"months"}</NavbarDropdown>
      </FiltrationNavbar>
      <FilterBy setFilterByTags={setFilterByTags} filterByTags={filterByTags} />

      <StyledContainer>
        <BreadCrumb route={"Insights"} subRoute={"Latest Insights"} />

        <ArticleContainers>
          {insightsContent?.map((article, index) => (
            <ArticleCard {...article} key={index} />
          ))}
        </ArticleContainers>
      </StyledContainer>
      {carouselData.length == 0 ? (
        <Spinner />
      ) : (
        <CarouselSection
          categoryCarousel={carouselData?.block_two?.title}
          backgroundColor="#002B49"
          arr={carouselData?.block_two?.data}
          titleColor="#0085CA"
          textColor="#fff"
          textDate="#FFFFFF"
          carouselDotBackground="#002b49"
        />
      )}
    </>
  );
};

export default InsightLatest;
