import styled from "styled-components/macro"

export const Container = styled.a`
  display: inline-flex;
  cursor: pointer;
  text-decoration: none;

  span {
    transition: all 0.5s ease-out;
  }

  :hover {
    & :nth-child(2) {
      padding: 0.75rem 1.5rem 0.75rem 2.5rem;

      :after {
        width: 100%;
        opacity: 1;
        transition: 500ms;
        -webkit-transition: 500ms;
      }
    }

    span {
      background-color: ${({ black }) =>
        black ? "var(--black1)" : "var(--hover-blue)"};

      color: var(--white);
    }
  }
`

export const ChevronContainer = styled.span`
  background-color: ${({ black }) =>
    black ? "var(--black1)" : "var(--hover-blue)"};
  display: flex;
  align-items: center;
  padding: 0.75rem;

  svg {
    width: 20px;
    height: 20px;
    fill: white;
  }
`

export const TextContainer = styled.span`
  color: ${({ black }) => (black ? "var(--black1)" : "var(--hover-blue)")};
  transition: all 0.5s ease-out;
  font-size: 0.8rem;
  font-weight: bolder;
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  position: relative;
  text-transform: uppercase;

  div {
    z-index: 2;
  }

  :after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    height: 100%;
    background-color: var(--hover-blue);
    opacity: 0;
  }
`
