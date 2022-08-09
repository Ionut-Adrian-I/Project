import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { dateToShortLocale } from "../../utils";
import DOMPurify from "dompurify";

const CustomTitle = styled.h5`
  font-weight: bold;

  :hover {
    color: #0085ca;
    cursor: pointer;
  }
`;

const ArticleCard = ({ title, field_teaser_text, nid, uuid, created }) => {
  const navigate = useNavigate();

  return (
    <div className="col-sm-12 col-md-11 col-lg-5 border-bottom h-100 py-3 ">
      <CustomTitle
        onClick={() => navigate(`/insights/case/${uuid}`, { state: uuid })}
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(title),
        }}
      ></CustomTitle>
      <span className="text-muted"> {dateToShortLocale(created)}</span>

      <p
        className="py-2 fs-6"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(field_teaser_text),
        }}
      ></p>
    </div>
  );
};

export default ArticleCard;
