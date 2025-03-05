'use client';
import React, { useEffect, useState } from 'react';
import styles from './ChatBox.module.css';

const ChatPopUpIcon = ({ handleButtonToggle }) => {
    const [color, setColor] = useState('red');

    useEffect(() => {
        const interval = setInterval(() => {
            setColor(prevColor => (prevColor === 'red' ? 'blue' : 'red'));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return <div
        className={styles.chatPopUpIcon}
        style={{backgroundColor: color}}
        onClick={handleButtonToggle}
    >
        <button className={styles.chatPopUpButton}>
            <i className="fas fa-comment-alt"></i>
        </button>
    </div>
}

export default ChatPopUpIcon;