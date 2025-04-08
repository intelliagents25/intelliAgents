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

  // main part of the chat component, handles the box and the button.
  return (
    <>
      {showChat && <ChatBox handleButtonToggle={toggleChat}  />}
      <div
        className={showChat ? styles.minimizedIcon : styles.maximizeIcon}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <ChatPopUpIcon handleButtonToggle={toggleChat} />
        {!showChat && <p className="suez-font text-color-dark" style={{ marginTop: '1rem', fontSize: '1.5rem' }}> Click Me to Chat! </p>}
      </div>
    </>
  );
};

export default Chat;
