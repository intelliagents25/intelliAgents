'use client';
import React, { useEffect, useState } from 'react';
import styles from './ChatBox.module.css';
import {sendDataToBot} from './ChatRequests';
import LoadingAnimation from './ChatLoadingAnimation';

const Chat = () => {
    let inputBox = null;
    let messageEnd = null;

    const [messageText, setMessageText] = useState("");
    const [receivedMessages, setMessages] = useState([
        {data: "Hello", author: "me"},
        {data: "Hello There!", author: "other"}
    ]);
    const [awaitingResponse, setAwaitingResponse] = useState(false);
    const [showRetryMessage, setShowRetryMessage] = useState(false);
    const disableSend = messageText.trim().length === 0 || awaitingResponse;

    const sendChatMessage = async (messageText) => {
        let message = messageText;
        setShowRetryMessage(false);
        setMessageText("");
        let new_messages = [...receivedMessages, { data: messageText, author: "me" }];

        inputBox.focus();
        setAwaitingResponse(true);
        const response = await sendDataToBot(message);

        if (response instanceof Error) {
            setShowRetryMessage(true);
        }else{
            new_messages = [...new_messages, { data: response, author: "other" }];
            
        }
        setMessages(new_messages);
        setAwaitingResponse(false);
    }
    


    const handleFormSubmission = (event) => {
        event.preventDefault();
        sendChatMessage(messageText);
    }


    const handleKeyPress = (event) => {
        if (event.charCode !== 13 || disableSend) {
            return;
        }
        sendChatMessage(messageText);
        event.preventDefault();
    }

    
    const messages = receivedMessages.map((message, index) => {
        const author = message.author;
        return <span key={index} className={styles.message} data-author={author}>{message.data}</span>;
    });

    const retryMessage = <><h1> Something went wrong, please retry sending a message</h1></>

    
    return (
    <div className={styles.chatHolder}>
        <div className={styles.chatText}>
        {messages}
        {awaitingResponse && (<LoadingAnimation />)}
        {showRetryMessage && retryMessage}
        <div ref={(element) => { messageEnd = element; }}></div>
        </div>
        <form onSubmit={handleFormSubmission} className={styles.form}>
        <textarea
            ref={(element) => { inputBox = element; }}
            value={messageText}
            placeholder="Type a message..."
            onChange={e => setMessageText(e.target.value)}
            onKeyPress={handleKeyPress}
            className={styles.textarea}
        ></textarea>
        <button type="submit" className={styles.button} disabled={disableSend}>Send</button>
        </form>
    </div>
    );
};

export default Chat;