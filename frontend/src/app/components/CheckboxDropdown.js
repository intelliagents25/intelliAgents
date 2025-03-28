'use client';
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
            className={`item ${isOpen ? 'open' : ''}`}
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
                {/* Left Column */}
                <div className="column left-column">
                  <div className="submenu-item">
                    <a href="projects" className="submenu-link" style={{ fontFamily: 'Roboto Mono' }}>Home</a>
                  </div>
                  <div className="submenu-item">
                    <a href="#experience" className="submenu-link" style={{ fontFamily: 'Roboto Mono' }}>About</a>
                  </div>
                  <div className="submenu-item">
                    <a href="#achievements" className="submenu-link" style={{ fontFamily: 'Roboto Mono' }}>Contact</a>
                  </div>
                </div>
                
                {/* Right Column */}
                <div className="column right-column">
                  <div className="submenu-item">
                    <a href="#testimonials" className="submenu-link" style={{ fontFamily: 'Roboto Mono' }}>How It Works</a>
                  </div>
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
    padding: 12px;
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
    opacity: 1;
    left: 0;
    transition: .25s ease-in-out;
  }

  .menu .item:hover .link,
  .menu .item:hover .link::after {
    color: #ffffff;
    transform: scaleX(1);
    transform-origin: right;
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

  .menu .item.open .burger span:nth-of-type(1) {
    transform: rotate(45deg);
    top: 0px;
    left: 5px;
  }

  .menu .item.open .burger span:nth-of-type(2) {
    width: 0%;
    opacity: 0;
  }

  .menu .item.open .burger span:nth-of-type(3) {
    transform: rotate(-45deg);
    top: 28px;
    left: 5px;
  }

  .menu .item .submenu {
    display: flex;
    position: absolute;
    top: 100%;
    right: -56.5px;
    width: 100vw;
    overflow: hidden;
    z-index: 1;
    background-color: #ffffff;
    border-top: 1px solid #000000;
    gap: 20px; /* Space between columns */
  }

  .column {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    align-items: flex-start; // Added for better left alignment
  }


  .submenu-item {
    width: 100%;
    transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
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
    text-align: left;
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