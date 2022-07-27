import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { ChevronRight } from "../../assets/icons";

const Card = styled.div`
  display: flex;
  padding: 20px;
  border-bottom: 1px solid gray;
  gap: 20px;
`;
const ImageContainer = styled.div`
  background: gray;
  width: 150px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const CardBody = styled.div`
  flex: 5;
  padding: 10px;

  h6 {
    margin: 0;
    color: var(--hover-blue);
    text-transform: uppercase;
  }

  h4 {
    margin: 0;
    font-weight: bold;
    cursor: pointer;

    :hover {
      color: var(--hover-blue);
    }
  }
`;
const CardArrow = styled.div`
  flex: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

const CardInsights = ({ image, type, title, teaserText, podcast }) => {
  const navigate = useNavigate();
  return (
    <Card>
      <ImageContainer>
        <img src={podcast?.image} alt="Insight photo" />
      </ImageContainer>

      <CardBody>
        <h6>{podcast?.type}</h6>
        <h4
          onClick={() => {
            navigate(`/digital/insights/${podcast?.title}`, { state: podcast });
          }}
        >
          {podcast?.title}
        </h4>
        <p className="text-muted">{podcast?.teaserText}</p>
      </CardBody>
      <CardArrow>
        <ChevronRight />
      </CardArrow>
    </Card>
  );
};

export default CardInsights;
