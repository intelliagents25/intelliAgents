"use client";
import React, { useEffect, useState } from "react";
import styles from "./ChatBox.module.css";
import ChatPopUpIcon from "./ChatPopUpIcon";
import ChatBox from "./ChatBox";
const Chat = () => {
  const [showChat, setShowChat] = useState(false);

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  return (
    <>
      <ChatBox handleButtonToggle={toggleChat} />
      {showChat && <ChatBox />}
      <ChatPopUpIcon handleButtonToggle={toggleChat} />
    </>
  );
};

export default Chat;
