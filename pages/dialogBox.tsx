import React, {
	useState,
	forwardRef,
	useImperativeHandle,
	useEffect,
} from "react";
import Message from "./messages";

// interface DialogBoxProps {
// 	screen: string;
// 	timeLeft?: number;
// 	lovePoints?: number;
// }

const study = [
	[
		// Level 0
		[
			{ pic: "/jay_neutral.svg", txt: "ske 0.0" },
			{ pic: "/jay_neutral.svg", txt: "study 00" },
		],
		[
			{ pic: "/jay_neutral.svg", txt: "ske 01" },
			{ pic: "/jay_neutral.svg", txt: "frog 01" },
		],
		[
			{ pic: "/jay_neutral.svg", txt: "ske 02" },
			{ pic: "/jay_neutral.svg", txt: "frog 02" },
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
			{ pic: "/jay_frown.svg", txt: "STUDY ON 1" },
			{ pic: "/jay_frown.svg", txt: "STUDY ON b1" },
		],
		[
			{ pic: "/jay_frown.svg", txt: "STUDY ON 2" },
			{ pic: "/jay_frown.svg", txt: "STUDY ON b2" },
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

const workout = [
	[
		// Level 0
		[
			{ pic: "/jay_neutral.svg", txt: "workout 0.0" },
			{ pic: "/jay_neutral.svg", txt: "workout 00" },
		],
		[
			{ pic: "/jay_neutral.svg", txt: "workout 01" },
			{ pic: "/jay_neutral.svg", txt: "workout 01" },
		],
		[
			{ pic: "/jay_neutral.svg", txt: "workout 02" },
			{ pic: "/jay_neutral.svg", txt: "workout 02" },
		],
	],
	[
		// Level 1
		[
			{ pic: "/jay_neutral.svg", txt: "workout 1.0" },
			{ pic: "/jay_neutral.svg", txt: "workout 1.0" },
		],
		[
			{ pic: "/jay_neutral.svg", txt: "workout 1.1" },
			{ pic: "/jay_neutral.svg", txt: "workout b1.1" },
		],
		[
			{ pic: "/jay_neutral.svg", txt: "workout 1.2" },
			{ pic: "/jay_neutral.svg", txt: "workout 1.2" },
		],
	],
	[
		// Level 2
		[
			{ pic: "/jay_neutral.svg", txt: "workout 2.0" },
			{ pic: "/jay_neutral.svg", txt: "workout 2.0" },
		],
		[
			{ pic: "/jay_neutral.svg", txt: "workout 2.1" },
			{ pic: "/jay_neutral.svg", txt: "workout b2.1" },
		],
		[
			{ pic: "/jay_neutral.svg", txt: "workout 2.2" },
			{ pic: "/jay_neutral.svg", txt: "workout 2.2" },
		],
	],
];

const workoutOn = [
	[
		// Level 0
		[
			{ pic: "/jay_frown.svg", txt: "workout ON 0" },
			{ pic: "/jay_frown.svg", txt: "workout ON 0" },
		],
		[
			{ pic: "/jay_frown.svg", txt: "workout ON 1" },
			{ pic: "/jay_frown.svg", txt: "workout ON b1" },
		],
		[
			{ pic: "/jay_frown.svg", txt: "workout ON 2" },
			{ pic: "/jay_frown.svg", txt: "workout ON b2" },
		],
	],
	[
		// Level 1
		[
			{ pic: "/jay_frown.svg", txt: "workout 1.0" },
			{ pic: "/jay_frown.svg", txt: "workout 1.0" },
		],
		[
			{ pic: "/jay_frown.svg", txt: "workout 1.1" },
			{ pic: "/jay_frown.svg", txt: "workout b1.1" },
		],
		[
			{ pic: "/jay_frown.svg", txt: "workout 1.2" },
			{ pic: "/jay_frown.svg", txt: "workout 1.2" },
		],
	],
];

const other = [
	[
		// Level 0
		[
			{ pic: "/jay_neutral.svg", txt: "other 0.0" },
			{ pic: "/jay_neutral.svg", txt: "other 00" },
		],
		[
			{ pic: "/jay_neutral.svg", txt: "other 01" },
			{ pic: "/jay_neutral.svg", txt: "other 01" },
		],
		[
			{ pic: "/jay_neutral.svg", txt: "other 02" },
			{ pic: "/jay_neutral.svg", txt: "other 02" },
		],
	],
	[
		// Level 1
		[
			{ pic: "/jay_neutral.svg", txt: "other 1.0" },
			{ pic: "/jay_neutral.svg", txt: "other 1.0" },
		],
		[
			{ pic: "/jay_neutral.svg", txt: "other 1.1" },
			{ pic: "/jay_neutral.svg", txt: "other b1.1" },
		],
		[
			{ pic: "/jay_neutral.svg", txt: "other 1.2" },
			{ pic: "/jay_neutral.svg", txt: "other 1.2" },
		],
	],
	[
		// Level 2
		[
			{ pic: "/jay_neutral.svg", txt: "other 2.0" },
			{ pic: "/jay_neutral.svg", txt: "other 2.0" },
		],
		[
			{ pic: "/jay_neutral.svg", txt: "other 2.1" },
			{ pic: "/jay_neutral.svg", txt: "other b2.1" },
		],
		[
			{ pic: "/jay_neutral.svg", txt: "other 2.2" },
			{ pic: "/jay_neutral.svg", txt: "other 2.2" },
		],
	],
];

const otherOn = [
	[
		// Level 0
		[
			{ pic: "/jay_frown.svg", txt: "other ON 0" },
			{ pic: "/jay_frown.svg", txt: "other ON 0" },
		],
		[
			{ pic: "/jay_frown.svg", txt: "other ON 1" },
			{ pic: "/jay_frown.svg", txt: "other ON b1" },
		],
		[
			{ pic: "/jay_frown.svg", txt: "other ON 2" },
			{ pic: "/jay_frown.svg", txt: "other ON b2" },
		],
	],
	[
		// Level 1
		[
			{ pic: "/jay_frown.svg", txt: "other 1.0" },
			{ pic: "/jay_frown.svg", txt: "other 1.0" },
		],
		[
			{ pic: "/jay_frown.svg", txt: "other 1.1" },
			{ pic: "/jay_frown.svg", txt: "other b1.1" },
		],
		[
			{ pic: "/jay_frown.svg", txt: "other 1.2" },
			{ pic: "/jay_frown.svg", txt: "other 1.2" },
		],
	],
];

const welcome = [
	[
		// Level 0
		[{ pic: "/jay_neutral.svg", txt: "Hey, welcome." },],
		[
			{
				pic: "/jay_neutral.svg",
				txt: "I'm Jay. I'm here to help you to get stuff done.",
			},
		],
		[
			{
				pic: "/jay_neutral.svg",
				txt:
					"Just pick an activity and for how long you want to do it.",
			},
		],
		[
			{
				pic: "/jay_smirk.svg",
				txt: "Let's go.",
			},
		],
	],
	[
		// Level 1
		[
			{ pic: "/jay_neutral.svg", txt: "welcome 1.0" },
			{ pic: "/jay_neutral.svg", txt: "welcome222 1.0" },
		],
		[
			{ pic: "/jay_neutral.svg", txt: "welcome 1.1" },
			{ pic: "/jay_neutral.svg", txt: "welcome222 b1.1" },
		],
		[
			{ pic: "/jay_neutral.svg", txt: "welcome 1.2" },
			{ pic: "/jay_neutral.svg", txt: "welcome222 1.2" },
		],
	],
	[
		// Level 2
		[
			{ pic: "/jay_neutral.svg", txt: "welcome 2.0" },
			{ pic: "/jay_neutral.svg", txt: "welcome222 2.0" },
		],
		[
			{ pic: "/jay_neutral.svg", txt: "welcome 2.1" },
			{ pic: "/jay_neutral.svg", txt: "welcome222 b2.1" },
		],
		[
			{ pic: "/jay_neutral.svg", txt: "welcome 2.2" },
			{ pic: "/jay_neutral.svg", txt: "welcome222 2.2" },
		],
	],
];

const keepGoing = [
	[
		// Level 0
		[
			{ pic: "/jay_smirk.svg", txt: "continue A" },
			{ pic: "/jay_smirk.svg", txt: "continue B" },
			{ pic: "/jay_smirk.svg", txt: "continue C" },
			{ pic: "/jay_smirk.svg", txt: "continue D" },
		],
	],
	[
		// Level 1
		[
			{ pic: "/jay_smirk.svg", txt: "continue XXX A" },
			{ pic: "/jay_smirk.svg", txt: "continue XXX B" },
			{ pic: "/jay_smirk.svg", txt: "continue XXX C" },
			{ pic: "/jay_smirk.svg", txt: "continue XXX D" },
		],
	],
];

// let lv = props.level;
// const cookieValue = () => {
// 	if (document.cookie === undefined || "") {
// 		return "0";
// 	} else {
// 		// console.log('cookie creation : '+document.cookie)
// 		return document.cookie
// 			.split("; ")
// 			.find((row) => row.startsWith("myLv="))
// 			.split("=")[1];
// 	}
// };
// ================================================================================
// ================================================================================
const DialogBox = forwardRef((props, ref) => {
	// const Component = React.forwardRef<RefType, PropsType>((props, ref) =>
	let lv = props.level ? props.level : 0;
	useImperativeHandle(ref, () => ({
		motivate() {
			nextLine(props.screen);
		},
		keepGoing() {
			const randomNum = randomize(keepGoing[props.level][0]);
			setPic(keepGoing[props.level][0][randomNum].pic);
			setCurrentMessage(keepGoing[props.level][0][randomNum].txt);
		},
	}));

	const [currentMessage, setCurrentMessage] = useState("");
	const [position, setPosition] = useState(0); // position in the text, line #
	const [pic, setPic] = useState("");

	const randomize = (lengthor) => {
		return Math.floor(Math.random() * lengthor.length);
	};

	function downHandler({ key }) {
		let shouldHandleKeyDown = true;
		if (key === "Enter" || key === " ") {
			if (shouldHandleKeyDown) {
				document.querySelector("button").click();
				shouldHandleKeyDown = false;
			}
		}
	}

	useEffect(() => {
		window.addEventListener("keyup", downHandler);
		// document.cookie = `myLv=0; path=/; secure=Lax; samesite=Lax; expires=Tue, 01 Jan 2030 00:00:00 GMT"`;
		// parseInt(cookieValue()) !== undefined
		// 	? (lv = parseInt(cookieValue()))
		// 	: (lv = 0);
		nextLine("welcome");
	}, []); // <-- empty array means 'run once'

	useEffect(() => {
		setPosition(0);
		console.log("%cActivity changed, position=> " + position,'color:#6ed64e');
	}, [props.screen]);

	const nextLine = (props) => {
		// eval() <== transform en var
		if (props === "welcome") {
			props = welcome;
		} else if (props === "study") {
			props = study;
		} else if (props === "studyOn") {
			props = studyOn;
		} else if (props === "workout") {
			props = workout;
		} else if (props === "workoutOn") {
			props = workoutOn;
		}else if (props === "other") {
			props = other;
		} else if (props === "otherOn") {
			props = otherOn;
			// setPosition(0); // creates a loop
			// console.log("position in studyon" + position);
		} else {
			return;
		}
		// console.log(props[lv] + ' the prop is **** ' + props[0][0][0].txt)
		if (position <= props[lv].length - 1 && lv === 0) {
			const randomNum = randomize(props[lv][position]);
			// console.log("I'm in the if lv0, the random is -- " + randomNum);
			setPic(props[lv][position][randomNum].pic);
			setCurrentMessage(props[lv][position][randomNum].txt);
			setPosition(position + 1);
			// ========= J'augmente automatiquement du lv 0 à 1 à la fin ===========
			// if (position == props[lv].length - 1) {
			// 	document.cookie = `mylv=1; path=/; secure=Lax; samesite=Lax; expires=Tue, 01 Jan 2030 00:00:00 GMT"`;
			// }
		} else if (position <= props[lv].length - 1) {
			const randomNum = randomize(props[lv][position]);
			// console.log("I'm in the else, the random is -- " + randomNum);
			setPic(props[lv][position][randomNum].pic);
			setCurrentMessage(props[lv][position][randomNum].txt);
			setPosition(position + 1);
		} else {
			// console.log(
			// 	"Pos is bigger than props of that lv length. pos-length "
			// );
		}
	};

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
});

// TO DO :
// when I get a level increase it in the lv and in the cookie myLv, always both
export default DialogBox;

{
	/* <button onClick={() => document.cookie = `myLv=1; path=/; secure=Lax; samesite=Lax; 
expires=Tue, 01 Jan 2030 00:00:00 GMT"`}>BRING ME AT LEVEL 1</button>
<button onClick={() => document.cookie = `myLv=0; path=/; secure=Lax; samesite=Lax; 
expires=Tue, 01 Jan 2030 00:00:00 GMT"`}>BRING ME AT LEVEL 0</button> */
}
