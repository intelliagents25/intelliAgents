import React from 'react';
import styled from 'styled-components';
import Checkbox from './Checkbox';

const DropDown = () => {
  return (
    <>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Darumadrop+One&family=Dokdo&display=swap');
      </style>
      <StyledWrapper>
        <div className="menu">
          <div className="item">
            <a href="#" className="link">
              <Checkbox />
              <svg viewBox="0 0 360 360" xmlSpace="preserve">
                <g id="SVGRepo_iconCarrier">
                  <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z" />
                </g>
              </svg>
            </a>
            <div className="submenu">
              <div className="submenu-item">
                <a href="projects" className="submenu-link"> Projects </a>
              </div>
              <div className="submenu-item">
                <a href="#experience" className="submenu-link"> Experience </a>
              </div>
              <div className="submenu-item">
                <a href="#achievements" className="submenu-link"> Achievements </a>
              </div>
              <div className="submenu-item">
                <a href="#testimonials" className="submenu-link"> Testimonials </a>
              </div>
              <div className="submenu-item">
                <a href="#contact" className="submenu-link"> Contact </a>
              </div>
            </div>
          </div>
        </div>
      </StyledWrapper>
    </>
  );
}

const StyledWrapper = styled.div`
  .menu {
    font-size: 16px;
    line-height: 1.6;
    color: #000000;
    width: fit-content;
    display: flex;
    list-style: none;
  }

  .menu a {
    text-decoration: none;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  .menu .link {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: 12px 36px;
    border-radius: 16px;
    overflow: hidden;
    transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .menu .link::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #140B49;
    z-index: -1;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.48s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .menu .link svg {
    width: 14px;
    height: 14px;
    fill: #000000;
    transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .menu .item {
    position: relative;
  }

  .menu .item .submenu {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 100%;
    border-radius: 0 0 16px 16px;
    left: 0;
    width: 100%;
    overflow: hidden;
    border: 1px solid #cccccc;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-12px);
    transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
    z-index: 1;
    pointer-events: none;
    list-style: none;
    background-color: #ffffff; /* Change background color to white */
  }

  .menu .item:hover .submenu {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    pointer-events: auto;
    border-top: transparent;
    border-color: #0a3cff;
  }

  .menu .item:hover .link {
    color: #ffffff;
    border-radius: 16px 16px 0 0;
  }

  .menu .item:hover .link::after {
    transform: scaleX(1);
    transform-origin: right;
  }

  .menu .item:hover .link svg {
    fill: #ffffff;
    transform: rotate(-180deg);
  }

  .menu .menu-text {
    font-family: 'Darumadrop One', sans-serif; /* Change the font here */
    font-size: 24px;
  }

  .submenu .submenu-item {
    width: 100%;
    transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .submenu .submenu-link {
    display: block;
    padding: 12px 24px;
    width: 100%;
    position: relative;
    text-align: center;
    transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
    background-color: #ffffff; /* Change background color to white */
  }

  .submenu .submenu-item:last-child .submenu-link {
    border-bottom: none;
  }

  .submenu .submenu-link::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    transform: scaleX(0);
    width: 100%;
    height: 100%;
    background-color: #0a3cff;
    z-index: -1;
    transform-origin: left;
    transition: transform 0.48s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .submenu .submenu-link:hover:before {
    transform: scaleX(1);
    transform-origin: right;
  }

  .submenu .submenu-link:hover {
    text-decoration: underline;
  }
`;

export default DropDown;