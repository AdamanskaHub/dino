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

const welcome = [
	[
		// Level 0
		[
			{
				pic: "/jay_neutral.svg",
				txt:
					"welcome 0 welcome 0 welcome 0 welcome 0 welcome 0 welcome 0 welcome 0 welcome 0 welcome 0 welcome 0 welcome 0 welcome 0 welcome 0 ",
			},
			{ pic: "/jay_neutral.svg", txt: "AAAAAAH 0" },
		],
		[
			{ pic: "/jay_neutral.svg", txt: "welcome 1" },
			{ pic: "/jay_neutral.svg", txt: "AAAAAAH b1" },
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
	// console.log(props.screen)
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
		if (key === "Enter") {
			document.querySelector("button").click();
		}
	}

	const nextLine = (props) => {
		console.log(props);
		if (props === "welcome") {
			props = welcome;
		} else if (props === "study") {
			props = messages;
		}
		// console.log(lv + ' the prop is **** ' + props[0][0][0].txt)
		if (position <= props[lv].length - 1) {
			const randomNum = randomize(props[lv][position]);
			console.log(
				"here " +
					position +
					" - " +
					randomNum +
					" - " +
					props[lv].length
			);
			setPic(props[lv][position][randomNum].pic);
			setCurrentMessage(props[lv][position][randomNum].txt);
			setPosition(position + 1);
			console.log("there " + position);
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
// when I get a level increase it in the lv and in the cookie myLv, always both
export default DialogBox;

{
	/* <button onClick={() => document.cookie = `myLv=1; path=/; secure=Lax; samesite=Lax; 
expires=Tue, 01 Jan 2030 00:00:00 GMT"`}>BRING ME AT LEVEL 1</button>
<button onClick={() => document.cookie = `myLv=0; path=/; secure=Lax; samesite=Lax; 
expires=Tue, 01 Jan 2030 00:00:00 GMT"`}>BRING ME AT LEVEL 0</button> */
}
