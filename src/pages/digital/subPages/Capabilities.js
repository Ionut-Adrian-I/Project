import React from "react";
import {
  CareersInDigital,
  CardProfessionals,
} from "../../../components/cards/";
import image from "../../../assets/images/ConnorWine";
import IFrame from "../../../components/IFrame";
import {
  StyledCol2,
  StyledCol1,
  StyledRow,
} from "../../../components/layout/Rows&Collumns/Rows&Collumns.style.js";

const Capabilities = () => {
  // Card overview content from backend
  const cardContent = {
    imageSrc: image,
    name: "Connor Colquhoun",
    position: "wine connoisseur",
    country: "japan",
    buttonText: "connect",
  };

  return (
    <>
      <StyledRow>
        <StyledCol1>
          <h2>Our Goal is to Deliver practical</h2>
          <p>
            Proident veniam quis proident duis velit. Id ipsum mollit officia
            sint irure enim magna nisi. Nostrud cupidatat adipisicing tempor eu.
            Nisi sint officia ea ex proident enim Lorem voluptate non esse
          </p>
          <p>
            Proident veniam quis proident duis velit. Id ipsum mollit officia
            sint irure enim magna nisi. Nostrud cupidatat adipisicing tempor eu.
            Nisi sint officia ea ex proident enim Lorem voluptate non esse
          </p>
          <p>
            Proident veniam quis proident duis velit. Id ipsum mollit officia
            sint irure enim magna nisi. Nostrud cupidatat adipisicing tempor eu.
            Nisi sint officia ea ex proident enim Lorem voluptate non esse
          </p>
          <p>
            Proident veniam quis proident duis velit. Id ipsum mollit officia
            sint irure enim magna nisi. Nostrud cupidatat adipisicing tempor eu.
            Nisi sint officia ea ex proident enim Lorem voluptate non esse
          </p>
          <p>
            Proident veniam quis proident duis velit. Id ipsum mollit officia
            sint irure enim magna nisi. Nostrud cupidatat adipisicing tempor eu.
            Nisi sint officia ea ex proident enim Lorem voluptate non esse
          </p>
          <p>
            Proident veniam quis proident duis velit. Id ipsum mollit officia
            sint irure enim magna nisi. Nostrud cupidatat adipisicing tempor eu.
            Nisi sint officia ea ex proident enim Lorem voluptate non esse
          </p>

          <IFrame />
          <h2>Our Goal is to Deliver practical</h2>
          <p>
            Proident veniam quis proident duis velit. Id ipsum mollit officia
            sint irure enim magna nisi. Nostrud cupidatat adipisicing tempor eu.
            Nisi sint officia ea ex proident enim Lorem voluptate non esse
          </p>
        </StyledCol1>
        <StyledCol2>
          <CardProfessionals {...cardContent} />
          <CardProfessionals {...cardContent} />
          <CareersInDigital />
        </StyledCol2>
      </StyledRow>
    </>
  );
};

export default Capabilities;
