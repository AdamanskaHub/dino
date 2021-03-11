import React, { useState,useEffect } from "react";
import Message from './messages';

const messages = [
    [
        [{pic: '/other.png', txt:"ske 0"}, {pic: '/hunk.png', txt:"frog 0"}],
        [{pic: '/other.png', txt:"ske 1"}, {pic: '/hunk.png', txt:"frog b1"}], 
        [{pic: '/other.png', txt:"ske 2"}, {pic: '/hunk.png', txt:"frog 2"}],
    ], 
    [["lv 2 - 1", "this is lv 2 - 2"],["more lines - 1", "lots of lines - 2"]],

    ];


let lv = 0;
const cookieValue = () => {
    if (document.cookie === undefined || '' ){
        return '0'
    } else {
        console.log(document.cookie)
        return document.cookie.split('; ').find(row => row.startsWith('myLv=')).split('=')[1]};
    }
    


export default function DialogBox() {

    const [currentMessage, setCurrentMessage] = useState('');
    const [position, setPosition] = useState(0);
    const [pic, setPic] = useState('/hunk.png')

    const randomize = (lengthor) => { return Math.floor(Math.random() * lengthor.length)}

    React.useEffect(() => {
        nextLine();
        document.cookie = `myLv=0; path=/; secure=Lax; samesite=Lax; expires=Tue, 01 Jan 2030 00:00:00 GMT"`
        parseInt(cookieValue()) !== undefined ? lv = parseInt(cookieValue()) : lv = 0;
        
    }, [])// <-- empty array means 'run once'

    const nextLine = () => {
        console.log(lv)
        if (position <= messages[lv].length - 1) {
            // console.log('in if statement '+ position + ' ' + messages[lv] + 'RANDOM = '+ randomize(messages[lv][position]))
            // IF it's an image do something else like setting the image
            const randomNum = randomize(messages[lv][position])
            // set the img
            setPic(messages[lv][position][randomNum].pic)
            // set the text
            setCurrentMessage(messages[lv][position][randomNum].txt)
            // setCurrentMessage(messages[lv][position][randomize(messages[lv][position])])
            setPosition(position+1)
        }
    };
    
    return (
        
        <div>
            <Message message={currentMessage} key={currentMessage} />
            <div onClick={nextLine}>
            Next
            </div>
            {/* <button onClick={() => document.cookie = `myLv=0; path=/; secure=Lax; samesite=Lax; 
            expires=Tue, 01 Jan 2030 00:00:00 GMT"`}>CREATE COOKIE 0</button>
            <button onClick={() => document.cookie = `myLv=33;`}>CREATE COOKIE 33</button>
            <button onClick={() => console.log(document.cookie + ' ' + lv)}>SHOW ME </button> */}
            <img src={pic} alt="workout"/>
        </div>
    )
}

// TO DO :
// if no cookie then set cookie, other take the existing one
// when I get a level increase it in the lv and in the cookie myLv, always both