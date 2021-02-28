import React, { useState } from "react";
import Message from './messages'

const messages = [
    "Welcome chum",
    "This is message 2",
    "Do the thing",
    ];

export default function DialogBox() {

const [currentMessage, setCurrentMessage] = useState(0);
    const handleClick = () => {
        if (currentMessage < messages.length - 1) {
        setCurrentMessage(currentMessage + 1);
        } else {
        setCurrentMessage(0);
        }};

    return (
        <div>
            <Message message={messages[currentMessage]} key={currentMessage} />
            <div onClick={handleClick}>
            Next
            </div>
            <img src="/hunk.png" alt="workout"/>
        </div>
    )
}