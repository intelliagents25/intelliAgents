'use client';
import React, { useEffect, useState } from 'react';

// class for the button/icon that will toggle the chatbox
const ChatPopUpIcon = ({ handleButtonToggle }) => {
    return <img src="/images/temp_mascot.gif" alt="Animated mascot" className="hidden lg:block" onClick={handleButtonToggle} style={{ width: '45%'}}/>
}
export default ChatPopUpIcon;