import React, { useState } from "react";
import Message from './messages'

const messages = [
    [["Welcome 1", "welcome 2"],["other line 1", "other lune 2"]],
    [["lv 2 - 1", "this is lv 2 - 2"],["more lines - 1", "lots of lines - 2"]],
    ];

let lv = 0;

export default function DialogBox() {

    const [currentMessage, setCurrentMessage] = useState('');
    const [position, setPosition] = useState(0);

    const randomize = (lengthor) => { return Math.floor(Math.random() * lengthor.length)}

    const nextLine = () => {

        if (position <= messages[lv].length - 1) {
            // console.log('in if statement '+ position + ' ' + messages[lv] + 'RANDOM = '+ randomize(messages[lv][position]))
            setCurrentMessage(messages[lv][position][randomize(messages[lv][position])])
            setPosition(position+1)
        }
    };
        

    return (
        <div>
            <Message message={currentMessage} key={currentMessage} />
            <div onClick={nextLine}>
            Next
            </div>
            <img src="/hunk.png" alt="workout"/>
        </div>
    )
}