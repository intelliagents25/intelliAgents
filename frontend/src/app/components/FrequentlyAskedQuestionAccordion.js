"use client";

import React from 'react';
import styled from 'styled-components';

const honors = [
  {
    name: "What exactly does IntelliAgents do?",
    content: "IntelliAgents is an AI-powered assistant designed to organize and manage your schedule, making it easier to keep track of deadlines, appointments, and tasks."
  },
  {
    name: "What kind of deadlines does IntelliAgents extract?",
    content: "IntelliAgents extracts various types of deadlines, including project deadlines, class assignments, meetings, and personal commitments, to help you stay organized."
  },
  {
    name: "How accurate is the AI in extracting deadlines?",
    content: "IntelliAgents uses advanced AI algorithms to ensure high accuracy when extracting deadlines, with continuous improvements based on user feedback and data."
  },
  {
    name: "Can I sync IntelliAgents with other calendar apps?",
    content: "Yes, IntelliAgents can be synced with popular calendar apps like Google Calendar, Apple Calendar, and Outlook to provide a seamless scheduling experience."
  },
  {
    name: "The AI missed some deadlines—how can I fix this?",
    content: "If IntelliAgents misses a deadline, you can manually update the schedule or provide feedback to improve its accuracy for future events."
  },
  {
    name: "Where does my data go?",
    content: "Your data is securely stored and processed by IntelliAgents, adhering to privacy standards. We do not share or sell your data to third parties without your consent."
  }
];

const FrequentlyAskedQuestionAccordion = () => {
  return (
    <StyledWrapper>
      <div className="accordion">
        {honors.map((item, index) => (
          <div className="accordion-item" key={index}>
            <input type="radio" id={`section${index}`} name="accordion" defaultChecked={index === 0} />
            <label htmlFor={`section${index}`} className="accordion-header">
              <div className="accordion-title">
                <span className="name">{item.name}</span>
                <span className="issuer">{item.issuer}</span>
              </div>
              <div className="accordion-icon">v</div>
            </label>
            <div className="content text-[#140B49]">
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width:80%;
  
  .title {
    font-size: 32px;
    font-weight: bold;
    color: #140B49;
    margin-bottom: 16px;
    text-align: center;
  }
  
  .accordion {
    width: 100%;
  }

  .accordion-item {
    margin-bottom: 10px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    overflow: hidden;
    transition: transform 0.3s ease;
  }

  .accordion input[type="radio"] {
    display: none;
  }

  .accordion-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    cursor: pointer;
    font-weight: bold;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    padding-top: 32px;
    padding-left: 32px;
    padding-right: 32px;
  }

  .accordion-title {
    display: flex;
    flex-direction: column;
    color: #152935;
    
  }

  .name {
    font-size: 24px;
    font-weight: 400;
    font-family: 'Suez One', sans-serif;
  }

  .accordion-icon {
    font-size: 24px;
    transition: transform 0.3s;
    color: #0073FB;
  }

  .accordion input[type="radio"]:checked + .accordion-header .accordion-icon {
    transform: rotate(180deg);
    color: #627394
  }

  .accordion input[type="radio"]:checked + .accordion-header {
    background: #FFFFFF;
  }

  .content {
    height: 0;
    overflow: hidden;
    background: #FFFFFF;
    transition: all 0.3s ease;
    text-align: justify;
    font-family: 'Roboto Mono', monospace;
  }

  .accordion input[type="radio"]:checked + .accordion-header + .content {
    padding-bottom: 32px;
    padding-left: 32px;
    padding-right: 32px;
    height: auto;
  }
`;

export default FrequentlyAskedQuestionAccordion;