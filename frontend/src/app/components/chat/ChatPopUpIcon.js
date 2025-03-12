'use client';
import React, { useEffect, useState } from 'react';
import styles from './ChatBox.module.css';

const ChatPopUpIcon = ({ handleButtonToggle }) => {
    return <div
        className={styles.chatPopUpIcon}
        style={{backgroundColor: "grey"}}
        onClick={handleButtonToggle}
    >
    </div>
}

export default ChatPopUpIcon;