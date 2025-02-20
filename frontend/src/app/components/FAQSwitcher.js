import React from 'react';
import styled from 'styled-components';

const FAQSwitcher = ({ onSwitch }) => {
  return (
    <StyledWrapper>
      <div className="container">
        <div className="tabs">
          <input type="radio" id="radio-1" name="tabs" defaultChecked onChange={() => onSwitch('General')} />
          <label className="tab" htmlFor="radio-1">General</label>
          <input type="radio" id="radio-2" name="tabs" onChange={() => onSwitch('How It Works')} />
          <label className="tab" htmlFor="radio-2">How It Works</label>
          <input type="radio" id="radio-3" name="tabs" onChange={() => onSwitch('Features & Integration')} />
          <label className="tab" htmlFor="radio-3">Features & Integration</label>
          <input type="radio" id="radio-4" name="tabs" onChange={() => onSwitch('Privacy & Security')} />
          <label className="tab" htmlFor="radio-4">Privacy & Security</label>
          <input type="radio" id="radio-5" name="tabs" onChange={() => onSwitch('Support & Feedback')} />
          <label className="tab" htmlFor="radio-5">Support & Feedback</label>
          <span className="glider" />
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .tabs {
    display: flex;
    position: relative;
    background-color: #fff;
    box-shadow: 0 0 1px 0 rgba(24, 94, 224, 0.15), 0 6px 12px 0 rgba(24, 94, 224, 0.15);
    padding: 0.75rem;
    border-radius: 99px;
    width: 50%;
  }

  .tabs * {
    z-index: 2;
  }

  .container input[type="radio"] {
    display: none;
  }

  .tab {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 20%;
    font-size: .8rem;
    color: black;
    font-weight: 500;
    border-radius: 99px;
    cursor: pointer;
    transition: color 0.15s ease-in;
  }

  .container input[type="radio"]:checked + label {
    color: #185ee0;
  }

  .container input[id="radio-1"]:checked ~ .glider {
    transform: translateX(0);
  }

  .container input[id="radio-2"]:checked ~ .glider {
    transform: translateX(92.5%);
  }

  .container input[id="radio-3"]:checked ~ .glider {
    transform: translateX(192.5%);
  }

  .container input[id="radio-4"]:checked ~ .glider {
    transform: translateX(290%);
  }

  .container input[id="radio-5"]:checked ~ .glider {
    transform: translateX(385%);
  }

  .glider {
    position: absolute;
    display: flex;
    height: 30px;
    width: 20%;
    background-color: #e6eef9;
    z-index: 1;
    border-radius: 99px;
    transition: 0.25s ease-out;
  }

  @media (max-width: 700px) {
    .tabs {
      transform: scale(0.6);
    }
  }
`;

export default FAQSwitcher;