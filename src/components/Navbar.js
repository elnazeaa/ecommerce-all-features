import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import logo from "../images/logo.png";
import { FaBars } from "react-icons/fa";
import { navLinks } from "../utils/infos";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const navHeight = useRef(null);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [menuHeight, setMenuHeight] = useState();

  useEffect(() => {
    if (isNavOpen) {
      const getH = navHeight.current.getBoundingClientRect().height + 20;
      setMenuHeight(getH);
    } else {
      setMenuHeight(0);
    }
  }, [isNavOpen]);

  return (
    <Wrapper>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="shopping app" className="logo" />
          <button
            className="nav-toggle"
            onClick={() => {
              setIsNavOpen(!isNavOpen);
            }}
          >
            <FaBars />
          </button>
        </div>
        <div className="links-container" style={{ height: menuHeight + "px" }}>
          <ul className="links" ref={navHeight}>
            {navLinks.map((links) => {
              return (
                <li key={links.id} onClick={() => setIsNavOpen(false)}>
                  <Link to={links.url}>{links.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  position: absolute;
  width: 100%;
  z-index: 1;
  top: 0;
  left: 0;
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }
  .nav-toggle {
    font-size: 1.5rem;
    color: #496595;
    background: transparent;
    border-color: transparent;
    transition: 1s ease;
    cursor: pointer;
  }
  .nav-toggle:hover {
    color: #496595;
    transform: rotate(90deg);
  }
  .logo {
    height: 50px;
  }

  .links a {
    color: #001436;
    font-size: 1rem;
    text-transform: capitalize;
    letter-spacing: 1px;
    display: block;
    padding: 0.5rem 1rem;
    transition: 1s ease-in-out;
  }
  .links a:hover {
    color: #001436;
    padding-left: 1.5rem;
  }

  .links-container {
    height: 0;
    overflow: hidden;
    transition: 1s ease;
  }
  .show-container {
    height: 10rem;
  }
  @media screen and (min-width: 760px) {
    .nav-center {
      max-width: 1170px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 1rem;
    }
    .nav-header {
      padding: 0;
    }
    .nav-toggle {
      display: none;
    }
    .links-container {
      height: auto !important;
    }
    .links {
      display: flex;
    }
    .links a {
      padding: 0;
      margin: 0 0.5rem;
    }
    .links a:hover {
      padding: 0;
      background: transparent;
    }
  }
  @media screen and (min-width: 200px) and (max-width: 755px) {
    .links {
      background: #f1f1f1;
    }
  }
`;

export default Navbar;
