import styled from "styled-components"
import { size } from "../../../../utils/breakpoints"

export const NavbarCell = styled.div`
  /* border: 2px solid green; */

  height: 100%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  color: var(--filtersBlue);

  text-transform: uppercase;
  margin: 0.5rem 0;
  font-size: 1.5rem;

  transition: all 0.2s ease-in-out;
  text-decoration: none;

  color: ${({ selected, highlight }) =>
    selected || highlight ? "var(--yellowCategory)" : "var(--filtersBlue)"};

  :hover {
    color: var(--yellowCategory);
  }

  svg {
    transition: all 0.2s ease-in-out;

    padding-left: 0.5rem;
    width: 2rem;
    height: rem;
  }

  :hover {
    color: var(--yellowCategory);
    svg {
      fill: var(--yellowCategory);
      /* transform: rotate(180deg);
      padding-right: 0.5rem;
      padding-left: 0; */
    }
  }

  @media ${size.md} {
    display: ${({ onlyMobile }) => (onlyMobile ? "none" : "initial")};
  }
`
