"use client";
import React, { useEffect, useState } from "react";
import styles from "./ChatBox.module.css";
import { sendDataToBot } from "./ChatRequests";
import LoadingAnimation from "./ChatLoadingAnimation";
import { IoCloseOutline } from "react-icons/io5";
import { IoMdSend } from "react-icons/io";

const initialChatState = [
  {
    data: "Hello There! I'm Intelli. Feel free to ask me any questions :)",
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


  // PDFs array from the database (Replace with actual database data)
  const pdfs = [
    { name: "syllabus-1.pdf" },
    { name: "sylla-2.pdf" },
    { name: "syllabus-final-3.pdf" },
    { name: "math-101.pdf" },
  ];

  // Generate all unique pairs of PDFs
  const generatePromptSuggestions = (pdfs) => {
    if (!pdfs || pdfs.length < 2) return []; // Ensure at least 2 PDFs exist

    const suggestions = [];
    for (let i = 0; i < pdfs.length; i++) {
      for (let j = i + 1; j < pdfs.length; j++) {
        suggestions.push(`Conflicts between ${pdfs[i].name} and ${pdfs[j].name}?`);
      }
    }
    return suggestions;
  };

  // Generate suggestions
  const promptSuggestions = generatePromptSuggestions(pdfs);

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
        Oh no! Something went wrong. Please try again.
      </h1>
    </>
  );

  return (
    <div className={styles.chatHolder}>
      <button className={styles.closeButton} onClick={handleButtonToggle}>
        <IoCloseOutline />
      </button>
      <div className={styles.whiteBox}>
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
        {pdfs.length >= 2 && (
          <>
            <p className={styles.suggestionsMessage}>
              Try suggested prompts for quick insights!
            </p>
          </>)}
        <div className={styles.suggestionsContainer}>
          {promptSuggestions.map((suggestion, index) => (
            <button 
              key={index} 
              className={styles.suggestionButton} 
              onClick={() => setMessageText(suggestion)}
            >
              {suggestion}
            </button>
          ))}
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
            <IoMdSend className={styles.sendButtonIcon}/>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatBox;
