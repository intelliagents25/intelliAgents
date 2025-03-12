import React, { useState } from 'react';
import styled from 'styled-components';

const CheckboxDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Darumadrop+One&family=Dokdo&display=swap');
      </style>
      <StyledWrapper>
        <div className="menu">
          <div 
            className="item" 
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <a href="#" className="link">
              <label className="burger">
                <span />
                <span />
                <span />
              </label>
            </a>
            {isOpen && (
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
            )}
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

  .menu .item {
    position: relative;
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
    cursor: pointer;
  }

  .menu .link::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.48s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .burger {
    position: relative;
    width: 40px;
    height: 30px;
    background: transparent;
    cursor: pointer;
    display: block;
  }

  .burger span {
    display: block;
    position: absolute;
    height: 4px;
    width: 100%;
    background: black;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transition: .25s ease-in-out;
  }

  .menu .item:hover .link,
  .menu .item:hover .link::after {
    color: #ffffff;
    transform: scaleX(1);
    transform-origin: right;
    border-radius: 16px 16px 0 0;
  }

  .menu .item:hover .link svg {
    fill: #ffffff;
    transform: rotate(-180deg);
  }

  .burger span:nth-of-type(1) {
    top: 0px;
    transform-origin: left center;
  }

  .burger span:nth-of-type(2) {
    top: 50%;
    transform: translateY(-50%);
    transform-origin: left center;
  }

  .burger span:nth-of-type(3) {
    top: 100%;
    transform-origin: left center;
    transform: translateY(-100%);
  }

  .menu .item:hover .burger span:nth-of-type(1) {
    transform: rotate(45deg);
    top: 0px;
    left: 5px;
  }
#
  .menu .item:hover .burger span:nth-of-type(2) {
    width: 0%;
    opacity: 0;
  }

  .menu .item:hover .burger span:nth-of-type(3) {
    transform: rotate(-45deg);
    top: 28px;
    left: 5px;
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
    z-index: 1;
    list-style: none;
    background-color: #ffffff;
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
    background-color: #ffffff;
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

export default CheckboxDropdown;