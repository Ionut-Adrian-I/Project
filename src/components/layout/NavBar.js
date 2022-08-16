import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { routeNames } from "../../routes/routes";
import { Search, XIcon, Logo } from "../../assets/icons";
import styled from "styled-components";
import { sizem } from "../../utils/breakpoints";

import { expertiseData } from "../../utils/data";

const CustomNavbar = styled(Navbar)`
  /* max-width: 1280px; */
  /* width: 100%; */
  /* background-color: #0085ca; */
  /* color: var(--white); */

  .logo {
    svg {
      width: 50px;
      height: 50px;
    }
  }
  #navbarScroll > div.me-auto.my-2.my-lg-0.fw-bold.f.navbar-nav > a {
    color: var(--white);
    font-size: 12px;
    letter-spacing: 1px;
    font-family: "Helvetica Neue LT Std", sans-serif;
    font-weight: 300;
    font-style: medium;
    text-transform: uppercase;
  }
  #navbar-scrolling-dropdown,
  .web-title {
    color: var(--white);
    padding: 20px 12px !important;
    font-size: 12px;
    font-family: "Helvetica Neue LT Std", sans-serif;
    font-weight: 300;
    font-style: medium;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  .nav-item.show.dropdown {
    background-color: #00254a;
  }
  .nav-item.show.dropdown a {
    color: white !important;
    color: var(--white);
  }
  .nav-item.show.dropdown div {
    background-color: #00254a;
    border-radius: 0;
    margin-top: 0;
    padding-bottom: 0.5rem;
    border: 0;
  }
  .nav-item.show.dropdown a {
    background-color: #00254a;
  }
  .container-icon {
    margin-top: 0px !important;
    width: 70px;
    height: 70px;
    /* border: 2px solid green; */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .active-link {
    background-color: #0085ca;
    color: var(--white);
  }
  .inactive-link {
    background-color: transparent;
  }
  .rightIconsContainer {
    /* border: 2px solid yellow; */
    /* background-color: white; */
    margin-top: 20px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    width: 100%;
    /* font-size: 18px; */
    .searchIcon {
      padding-top: 5px;
      width: inherit;
    }
    #AlvarezAndMarsal {
      /* width: 130px; */
      width: 8rem;
    }
    svg {
      fill: white;
    }
  }
`;
const NavbarSearchContainer = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #0085ca;
  .input-class {
    height: 40px;
    background-color: #0b72a7;
    border: none;
    border-radius: 5px;
  }
  .active-link {
    background-color: #0085ca;
  }
  .form-group {
    width: 94%;
    margin: auto;
  }
  .has-search .form-control {
    padding-left: 2.375rem;
  }

  .has-search .form-control-feedback {
    /* border: 2px solid red; */
    position: absolute;
    z-index: 2;
    display: block;
    right: 200px;
    width: 2.375rem;
    height: 2.375rem;
    line-height: 2.375rem;
    text-align: right;
    pointer-events: none;
    align-items: center;
  }
  @media ${sizem.lgm} {
    .has-search .form-control-feedback {
      right: 60px;
    }
  }
`;

const NavBar = () => {
  const navigate = useNavigate();
  const [showSearchDiv, setShowSearchDiv] = useState(false);

  return (
    <>
      {showSearchDiv && (
        <NavbarSearchContainer
          className=" container-navbar-search
	  "
        >
          {/* <input className="w-100 mx-5   input-class" />
          <button className="me-5" /> */}

          <div class="form-group has-search">
            <span class="fa fa-search form-control-feedback"></span>
            <input type="text" class="form-control" />
          </div>
        </NavbarSearchContainer>
      )}
      <CustomNavbar className="py-0 " expand="lg">
        <Container fluid>
          <CustomNavbar.Brand href={routeNames.home} className="logo">
            <Logo style={{ width: "40px" }} />
          </CustomNavbar.Brand>
          <div className="d-flex justify-content-around mx-3 align-items-center">
            <CustomNavbar.Toggle aria-controls="navbarScroll" />
            <CustomNavbar.Text
              className={` d-lg-none align-items-center d-flex my-1  container-icon ${
                showSearchDiv ? "active-link" : " inactive-link"
              } `}
            >
              {" "}
              {showSearchDiv ? (
                <div
                  className="  d-flex  align-items-center mx-2 "
                  onClick={() => {
                    setShowSearchDiv(false);
                  }}
                >
                  {console.log(showSearchDiv)}
                  <XIcon />
                </div>
              ) : (
                <div
                  className="  d-flex  align-items-center mx-2 "
                  onClick={() => {
                    setShowSearchDiv(true);
                  }}
                >
                  <Search />
                </div>
              )}
            </CustomNavbar.Text>
          </div>

          <CustomNavbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0 fw-bold f">
              <Nav.Link className="active web-title" href={routeNames.home}>
                {"HLS Home"}
              </Nav.Link>

              <NavDropdown
                className=""
                title="Expertise"
                id="navbar-scrolling-dropdown"
              >
                {expertiseData?.map((expertise, index) => (
                  <NavDropdown.Item
                    onClick={() => {
                      navigate(
                        `/expertise/${expertise?.title?.toLowerCase()}`,
                        {
                          state: expertise,
                        }
                      );
                    }}
                    id="something"
                    key={index}
                  >
                    {expertise.title}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>

              {/* <Nav.Link href={routeNames.insight}>{"Insights"}</Nav.Link> */}
              <NavDropdown
                className=""
                title="Insights"
                id="navbar-scrolling-dropdown"
              >
                <NavDropdown.Item href={routeNames.insightLatest}>
                  {"Latest Insights"}
                </NavDropdown.Item>
                <NavDropdown.Item href={routeNames.insightCase}>
                  {"Case Studies"}
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                className="active web-title"
                href={routeNames.leadership}
              >
                {"Leadership"}
              </Nav.Link>
              <Nav.Link className="active web-title " href={routeNames.contact}>
                {"Contact"}
              </Nav.Link>
              <Nav.Link
                className="active web-title text-danger d-none  d-lg-block"
                href={routeNames.brazilian}
              >
                {"Brazilian MicroSite"}
              </Nav.Link>
              <Nav.Link
                className="active web-title text-danger d-none  d-lg-block"
                href={routeNames.digital}
              >
                {"Digital MicroSite"}
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link
                className={`d-none d-lg-flex my-2 container-icon ${
                  showSearchDiv ? "active-link" : " inactive-link"
                } `}
                href="#action2"
              >
                {showSearchDiv ? (
                  <div
                    className="  d-flex  align-items-center  "
                    onClick={() => {
                      setShowSearchDiv(false);
                    }}
                  >
                    {console.log(showSearchDiv)}
                    <XIcon />
                  </div>
                ) : (
                  <div
                    onClick={() => {
                      setShowSearchDiv(true);
                    }}
                  >
                    <Search />
                  </div>
                )}
              </Nav.Link>
            </Nav>
          </CustomNavbar.Collapse>
        </Container>
      </CustomNavbar>
    </>
  );
};

export default NavBar;
=======
>>>>>>> leadershipTest
