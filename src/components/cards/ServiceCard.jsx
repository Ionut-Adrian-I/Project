import React from "react"
import styled from "styled-components/macro"

const Card = styled.div`
  border-bottom: 1px solid gray;

  h4 {
    font-weight: bold;
  }
  p {
    /* margin: 1rem 0; */
  }
`

const ServiceCard = ({ title, conntent }) => {
  return (
    <Card>
      <h4>{title}</h4>
      <p>{conntent}</p>
    </Card>
  )
}

export default ServiceCard
