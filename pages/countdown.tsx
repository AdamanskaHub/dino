import React, { useEffect, useState } from "react";

type CountdownProps = {
	duration?: number;
	countdownFinished?: any;
};

export default function Countdown({
	duration,
	countdownFinished,
}: CountdownProps) {
	const [timeLeft, setTimeLeft] = useState(duration);

	const tellParent = () => countdownFinished(true);

	useEffect(() => {
		if (timeLeft === 0) {
			console.log("TIME LEFT IS 0");
			setTimeLeft(0);
			tellParent();
		}

		// exit early when we reach 0
		if (!timeLeft) return;

		// save intervalId to clear the interval when the component re-renders
		const intervalId = setInterval(() => {
			setTimeLeft(timeLeft - 1);
		}, 1000);

		// clear interval on re-render to avoid memory leaks
		return () => clearInterval(intervalId);
		// add timeLeft as a dependency to re-rerun the effect when we update it
	}, [timeLeft]);

	const secondsToHms = (duration) => {
		if (!duration) return "nope";

		let hours = duration / 3600;
		duration = duration % 3600;
		let min = duration / 60;
		duration = duration % 60;

		let sec = parseInt(duration);

		if (sec < 10) {
			sec = `0${sec}`;
		}
		if (min < 10) {
			min = `0${min}`;
		}

		if (parseInt(hours, 10) > 0) {
			return `${parseInt(hours, 10)}h ${min}m ${sec}s`;
		} else if (min == 0) {
			return `${sec}s`;
		} else {
			return `${min}m ${sec}s`;
		}
	};

	return (
		<div>
			<span className="timer">
				{timeLeft} bfueiw {() => secondsToHms()}
			</span>
		</div>
	);
}

// const [num, setNum] = useState(duration);
// const [pause, setPause] = useState(true);
// let intervalRef = useRef();

// const [countdownDone, setcountdownDone] = useState(false);

// const [counter, setCounter] = useState(duration);
// useEffect(
// () => {
//     const id = setInterval(() => {
//     setCounter((count) => count === 0 ? (console.log("c'est 0"), (setcountdownDone(true)), (count= 0),
//     (
//     reset()
//     )
//     :
//     (count - 1));
//     }, 1000);
//     return () => {
//     clearInterval(id);
//     };
// },
// [] // empty dependency array
// );

// const decreaseNum = () => setNum((prev) => prev - 1);
// const decreaseNum = () => setNum((prev) => prev == 0 ? prev = 0  : prev - 1);
// const decreaseNum = () => {
//     setNum((prev)=>{
//         if (prev === 0){
//             countdownFinished=true;
//             console.log("decreased");
//             return prev = 0
//         } else {
//             console.log("AHAHAH decreased");
//             prev -1;
//         }
//     })
// }

// useEffect(() => {
//     console.log("USE EFFECT")
//     setPause(false);
//     intervalRef.current = setInterval
//         (decreaseNum, 1000);
//     return () => clearInterval(intervalRef.current);
// }, []);

// const handleClick = () => {
//     if (!pause) {
//         clearInterval(intervalRef.current);
//     } else {
//         intervalRef.current = setInterval
//             (decreaseNum, 1000);
//     }
//     setPause((prev) => !prev);
// };
