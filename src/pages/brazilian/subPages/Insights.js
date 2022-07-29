import React, { useState, useEffect } from "react";
import CardInsights from "../../../components/cards/CardInsights";
import { StyledContainer } from "../../../components/layout/Rows&Collumns/Rows&Collumns.style";
import { getPodcasts } from "../../../API";
import TranslateButton from "../../../components/buttons/TranslateButton";

const Insights = () => {
  // this is the Insights that will come from drupal
  // let drupal = [
  // 	{
  // 		image: image,
  // 		type: 'podcast',
  // 		title: 'This is a very long Title',
  // 		content:
  // 			'laboris. Laboris ea eu ut dolor commodo commodo voluptate aute ea. laboris. Laboris ea eu ut dolor commodo commodo voluptate aute ea. laboris. Laboris ea eu ut dolor commodo commodo voluptate aute ea.',
  // 	},
  // 	{
  // 		image: image,
  // 		type: 'podcast',
  // 		title: 'This is a very long Title',
  // 		content:
  // 			'laboris. Laboris ea eu ut dolor commodo commodo voluptate aute ea. laboris. Laboris ea eu ut dolor commodo commodo voluptate aute ea. laboris. Laboris ea eu ut dolor commodo commodo voluptate aute ea.',
  // 	},
  // 	{
  // 		image: image,
  // 		type: 'podcast',
  // 		title: 'This is a very long Title',
  // 		content:
  // 			'laboris. Laboris ea eu ut dolor commodo commodo voluptate aute ea. laboris. Laboris ea eu ut dolor commodo commodo voluptate aute ea. laboris. Laboris ea eu ut dolor commodo commodo voluptate aute ea.',
  // 	},
  // ]
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    getPodcasts(setPodcasts);
  }, []);

  return (
    <StyledContainer>
      <TranslateButton text1={"English"} text2={"Portuguese"} />
      {podcasts.map((podcast, index) => (
        <CardInsights
          key={index}
          podcast={podcast}
          // image={podcast.image}
          // type={podcast.type}
          // title={podcast.title}
          // teaserText={podcast.teaserText}
        />
      ))}
    </StyledContainer>
  );
};

export default Insights;
