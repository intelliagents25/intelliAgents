'use client';
import React, { useEffect, useState } from 'react';
import styles from './ChatBox.module.css';

const ChatPopUpIcon = ({ handleButtonToggle }) => {
    return <div
        className={styles.chatPopUpIcon}
        style={{backgroundColor: "grey"}}
        onClick={handleButtonToggle}
    >
        <button className={styles.chatPopUpButton}>
            <i className="fas fa-comment-alt"></i>
        </button>
    </div>
}

export default ChatPopUpIcon;