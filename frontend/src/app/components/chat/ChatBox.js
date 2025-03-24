"use client";
import React, { useEffect, useState } from "react";
import styles from "./ChatBox.module.css";
import { sendDataToBot } from "./ChatRequests";
import LoadingAnimation from "./ChatLoadingAnimation";

const initialChatState = [
  {
    data: "Hello There! Feel free to ask me any questions :)",
    author: "other",
  },
];

const ChatBox = ({ handleButtonToggle }) => {
  // ==== state variables ====
  let inputBox = null;
  let messageEnd = null;

  const [messageText, setMessageText] = useState("");
  const [receivedMessages, setMessages] = useState(initialChatState);
  const [awaitingResponse, setAwaitingResponse] = useState(false);
  const [showRetryMessage, setShowRetryMessage] = useState(false);

  const disableSend = messageText.trim().length === 0 || awaitingResponse;

  // check if there are existing messages in this session and try to load. 
  useEffect(() => {
    try{
      let chatMsg = sessionStorage.getItem(process.env.CHAT_BOX);
      if (chatMsg) {
        let chatMessages = JSON.parse(sessionStorage.getItem(process.env.CHAT_BOX));
        setMessages(chatMessages);
      } else {
        setMessages(initialChatState);
        let msg_json = JSON.stringify(initialChatState);
        sessionStorage.setItem(process.env.CHAT_BOX, msg_json);
      }
    } catch (error) {
      console.log(error);
      setMessages(initialChatState);
      let msg_json = JSON.stringify(initialChatState);
      sessionStorage.setItem(process.env.CHAT_BOX, msg_json);
    }
  }, []);

  // ==== helper functions ====

  // scroll to the bottom of the chat box
  // TODO: re-implement this so it works with the new chat box location
  const scrollToBottom = () => {
    // const el = document.getElementById("anchor");
    // el.scrollIntoView({ behavior: "smooth", block: "start" });

    // setTimeout(() => {
    //   el.scrollIntoView({ behavior: "smooth", block: "start" });
    // }, 10);
  };

  // given a text message, send the message to n8n and update the chat box with the response
  const sendChatMessage = async (messageText) => {
    setShowRetryMessage(false);

    let message = messageText;
    let new_messages = [
      ...receivedMessages,
      { data: messageText, author: "me" },
    ];
    setMessages(new_messages);
    setMessageText("");

    setAwaitingResponse(true);

    scrollToBottom();
    inputBox.focus();

    const response = await sendDataToBot(message);

    setAwaitingResponse(false);

    if (response instanceof Error) {
      setShowRetryMessage(true);
    } else {
      new_messages = [...new_messages, { data: response, author: "other" }];
    }

    setMessages(new_messages);
    sessionStorage.setItem(process.env.CHAT_BOX, JSON.stringify(new_messages));

    scrollToBottom();
  };

  // ==== event handlers ====

  const handleFormSubmission = (event) => {
    event.preventDefault();
    sendChatMessage(messageText);
  };

  const handleKeyPress = (event) => {
    if (event.charCode !== 13 || disableSend) {
      return;
    }
    sendChatMessage(messageText);
    event.preventDefault();
  };

  // ==== html rendering constants ====
  const messages = receivedMessages.map((message, index) => {
    const author = message.author;
    return (
      <span key={index} className={styles.message} data-author={author}>
        {message.data}
      </span>
    );
  });

  const retryMessage = (
    <>
      <h1 className={styles.retryMessage}>
        {" "}
        Something went wrong, please retry sending a message
      </h1>
    </>
  );

  return (
    <div className={styles.chatHolder}>
      <div className={styles.chatHeader}>
        <h1>Chat</h1>
        <button className={styles.closeButton} onClick={handleButtonToggle}>
          X
        </button>
      </div>
      <div id="chatTextContents" className={styles.chatTextContents}>
        {messages}
        <div id="loading">{awaitingResponse && <LoadingAnimation />}</div>
        {showRetryMessage && retryMessage}
        <div
          className={styles.anchor}
          id="anchor"
          ref={(element) => {
            messageEnd = element;
          }}
        ></div>
      </div>
      <form onSubmit={handleFormSubmission} className={styles.form}>
        <textarea
          ref={(element) => {
            inputBox = element;
          }}
          value={messageText}
          placeholder="Type a message..."
          onChange={(e) => setMessageText(e.target.value)}
          onKeyPress={handleKeyPress}
          className={styles.textarea}
        ></textarea>
        <button
          type="submit"
          className={styles.sendButton}
          disabled={disableSend}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatBox;
