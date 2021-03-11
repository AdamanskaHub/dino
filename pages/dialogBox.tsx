import React, { useState,useEffect } from "react";
import Message from './messages';

const messages = [
    [ // Level 0
        [{pic: '/other.png', txt:"ske 0"}, {pic: '/hunk.png', txt:"frog 0"}],
        [{pic: '/other.png', txt:"ske 1"}, {pic: '/hunk.png', txt:"frog b1"}], 
        [{pic: '/other.png', txt:"ske 2"}, {pic: '/hunk.png', txt:"frog 2"}],
    ], 
    [ // Level 1
        [{pic: '/other.png', txt:"ske 1.0"}, {pic: '/hunk.png', txt:"frog 1.0"}],
        [{pic: '/other.png', txt:"ske 1.1"}, {pic: '/hunk.png', txt:"frog b1.1"}], 
        [{pic: '/other.png', txt:"ske 1.2"}, {pic: '/hunk.png', txt:"frog 1.2"}],
    ], 
    [ // Level 2
        [{pic: '/other.png', txt:"ske 2.0"}, {pic: '/hunk.png', txt:"frog 2.0"}],
        [{pic: '/other.png', txt:"ske 2.1"}, {pic: '/hunk.png', txt:"frog b2.1"}], 
        [{pic: '/other.png', txt:"ske 2.2"}, {pic: '/hunk.png', txt:"frog 2.2"}],
    ], 
];


let lv = 0;
const cookieValue = () => {
    if (document.cookie === undefined || '' ){
        return '0'
    } else {
        console.log('cookie creation : '+document.cookie)
        return document.cookie.split('; ').find(row => row.startsWith('myLv=')).split('=')[1]
    };
};


export default function DialogBox() {

    const [currentMessage, setCurrentMessage] = useState('');
    const [position, setPosition] = useState(0); // position in the text, line #
    const [pic, setPic] = useState('')

    const randomize = (lengthor) => { return Math.floor(Math.random() * lengthor.length)}

    React.useEffect(() => {
        document.cookie = `myLv=0; path=/; secure=Lax; samesite=Lax; expires=Tue, 01 Jan 2030 00:00:00 GMT"`
        parseInt(cookieValue()) !== undefined ? lv = parseInt(cookieValue()) : lv = 0;
        nextLine();
    }, [])// <-- empty array means 'run once'

    const nextLine = () => {
        console.log(lv)
        if (position <= messages[lv].length - 1) {
            const randomNum = randomize(messages[lv][position])
            setPic(messages[lv][position][randomNum].pic)
            setCurrentMessage(messages[lv][position][randomNum].txt)
            setPosition(position+1)
        }
    };
    
    return (
        
        <div>
            <Message message={currentMessage} key={currentMessage} />
            <div onClick={nextLine}>
            Next
            </div>
            <button onClick={() => document.cookie = `myLv=1; path=/; secure=Lax; samesite=Lax; 
            expires=Tue, 01 Jan 2030 00:00:00 GMT"`}>BRING ME AT LEVEL 1</button>
            <button onClick={() => document.cookie = `myLv=0; path=/; secure=Lax; samesite=Lax; 
            expires=Tue, 01 Jan 2030 00:00:00 GMT"`}>BRING ME AT LEVEL 0</button>
            <img src={pic} alt="coach image"/>
        </div>
    )
}

// TO DO :
// if no cookie then set cookie, other take the existing one
// when I get a level increase it in the lv and in the cookie myLv, always both