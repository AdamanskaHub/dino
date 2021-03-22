import React, { useState, useEffect } from "react";
import Message from "./messages";
// import jay_neutral from '../public/svg/jay_neutral.svg'

interface DialogBoxProps {
	screen: string;
}

const messages = [
	[
		// Level 0
		[
			{ pic: "/jay_neutral.svg", txt: "ske 0" },
			{ pic: "/jay_neutral.svg", txt: "frog 0" },
		],
		[
			{ pic: "/jay_neutral.svg", txt: "ske 1" },
			{ pic: "/jay_neutral.svg", txt: "frog b1" },
		],
		[
			{ pic: "/jay_neutral.svg", txt: "ske 2" },
			{ pic: "/jay_neutral.svg", txt: "frog 2" },
		],
	],
	[
		// Level 1
		[
			{ pic: "/jay_neutral.svg", txt: "ske 1.0" },
			{ pic: "/jay_neutral.svg", txt: "frog 1.0" },
		],
		[
			{ pic: "/jay_neutral.svg", txt: "ske 1.1" },
			{ pic: "/jay_neutral.svg", txt: "frog b1.1" },
		],
		[
			{ pic: "/jay_neutral.svg", txt: "ske 1.2" },
			{ pic: "/jay_neutral.svg", txt: "frog 1.2" },
		],
	],
	[
		// Level 2
		[
			{ pic: "/jay_neutral.svg", txt: "ske 2.0" },
			{ pic: "/jay_neutral.svg", txt: "frog 2.0" },
		],
		[
			{ pic: "/jay_neutral.svg", txt: "ske 2.1" },
			{ pic: "/jay_neutral.svg", txt: "frog b2.1" },
		],
		[
			{ pic: "/jay_neutral.svg", txt: "ske 2.2" },
			{ pic: "/jay_neutral.svg", txt: "frog 2.2" },
		],
	],
];

const studyOn = [
	[
		// Level 0
		[
			{ pic: "/jay_frown.svg", txt: "STUDY ON 0" },
			{ pic: "/jay_frown.svg", txt: "STUDY ON 0" },
		],
		[
			{ pic: "/jay_frown.svg", txt: "ske 1" },
			{ pic: "/jay_frown.svg", txt: "frog b1" },
		],
		[
			{ pic: "/jay_frown.svg", txt: "ske 2" },
			{ pic: "/jay_frown.svg", txt: "frog 2" },
		],
	],
	[
		// Level 1
		[
			{ pic: "/jay_frown.svg", txt: "ske 1.0" },
			{ pic: "/jay_frown.svg", txt: "frog 1.0" },
		],
		[
			{ pic: "/jay_frown.svg", txt: "ske 1.1" },
			{ pic: "/jay_frown.svg", txt: "frog b1.1" },
		],
		[
			{ pic: "/jay_frown.svg", txt: "ske 1.2" },
			{ pic: "/jay_frown.svg", txt: "frog 1.2" },
		],
	],
];

const welcome = [
	[
		// Level 0
		[
			{
				pic: "/jay_neutral.svg",
				txt: "welcome welcome",
			},
			{ pic: "/jay_smirk.svg", txt: "AAAAAAH 0" },
		],
		[
			{ pic: "/jay_neutral.svg", txt: "welcome 1" },
			{ pic: "/jay_smirk.svg", txt: "AAAAAAH b1" },
		],
		[
			{ pic: "/jay_neutral.svg", txt: "welcome 2" },
			{ pic: "/jay_neutral.svg", txt: "AAAAAAH 2" },
		],
	],
	[
		// Level 1
		[
			{ pic: "/jay_neutral.svg", txt: "welcome 1.0" },
			{ pic: "/jay_neutral.svg", txt: "AAAAAAH 1.0" },
		],
		[
			{ pic: "/jay_neutral.svg", txt: "welcome 1.1" },
			{ pic: "/jay_neutral.svg", txt: "AAAAAAH b1.1" },
		],
		[
			{ pic: "/jay_neutral.svg", txt: "welcome 1.2" },
			{ pic: "/jay_neutral.svg", txt: "AAAAAAH 1.2" },
		],
	],
	[
		// Level 2
		[
			{ pic: "/jay_neutral.svg", txt: "welcome 2.0" },
			{ pic: "/jay_neutral.svg", txt: "AAAAAAH 2.0" },
		],
		[
			{ pic: "/jay_neutral.svg", txt: "welcome 2.1" },
			{ pic: "/jay_neutral.svg", txt: "AAAAAAH b2.1" },
		],
		[
			{ pic: "/jay_neutral.svg", txt: "welcome 2.2" },
			{ pic: "/jay_neutral.svg", txt: "AAAAAAH 2.2" },
		],
	],
];

let lv = 0;
const cookieValue = () => {
	if (document.cookie === undefined || "") {
		return "0";
	} else {
		// console.log('cookie creation : '+document.cookie)
		return document.cookie
			.split("; ")
			.find((row) => row.startsWith("myLv="))
			.split("=")[1];
	}
};

const DialogBox = (props) => {
	console.log(props.screen);
	const [currentMessage, setCurrentMessage] = useState("");
	const [position, setPosition] = useState(0); // position in the text, line #
	const [pic, setPic] = useState("");

	const randomize = (lengthor) => {
		return Math.floor(Math.random() * lengthor.length);
	};

	React.useEffect(() => {
		window.addEventListener("keydown", downHandler);
		document.cookie = `myLv=0; path=/; secure=Lax; samesite=Lax; expires=Tue, 01 Jan 2030 00:00:00 GMT"`;
		parseInt(cookieValue()) !== undefined
			? (lv = parseInt(cookieValue()))
			: (lv = 0);
		nextLine("welcome");
	}, []); // <-- empty array means 'run once'

	function downHandler({ key }) {
		if (key === "Enter" || key === " ") {
			document.querySelector("button").click();
		}
	}

	const nextLine = (props) => {
		if (props === "welcome") {
			props = welcome;
		} else if (props === "study") {
			props = messages;
		} else if (props === "studyOn") {
			props = studyOn;
			setPosition(0);
			// console.log("position" + position);
		}
		// console.log(lv + ' the prop is **** ' + props[0][0][0].txt)
		if (position <= props[lv].length - 1) {
			const randomNum = randomize(props[lv][position]);
			setPic(props[lv][position][randomNum].pic);
			setCurrentMessage(props[lv][position][randomNum].txt);
			setPosition(position + 1);
		}
	};
	// console.log('props in dialog box '+props.screen)
	return (
		<div className="vn">
			<div className="character-box">
				<img className="character" src={pic} alt="coach image" />
			</div>
			<div className="dialog-box">
				<Message message={currentMessage} key={currentMessage} />
				<button className="next" onClick={() => nextLine(props.screen)}>
					Next
				</button>
			</div>
		</div>
	);
};

// TO DO :
// Move text to other file
// when I get a level increase it in the lv and in the cookie myLv, always both
export default DialogBox;

{
	/* <button onClick={() => document.cookie = `myLv=1; path=/; secure=Lax; samesite=Lax; 
expires=Tue, 01 Jan 2030 00:00:00 GMT"`}>BRING ME AT LEVEL 1</button>
<button onClick={() => document.cookie = `myLv=0; path=/; secure=Lax; samesite=Lax; 
expires=Tue, 01 Jan 2030 00:00:00 GMT"`}>BRING ME AT LEVEL 0</button> */
}
