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
	const [timePretty, setTimePretty] = useState(0);

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
			setTimePretty(secondsToHms(timeLeft - 1));
		}, 1000);

		// clear interval on re-render to avoid memory leaks
		return () => clearInterval(intervalId);
		// add timeLeft as a dependency to re-rerun the effect when we update it
	}, [timeLeft]);

	const secondsToHms = (timeAmount) => {
		if (!timeAmount) return 0;

		let hours = timeAmount / 3600;
		timeAmount = timeAmount % 3600;
		let min = timeAmount / 60;
		timeAmount = timeAmount % 60;

		let sec = parseInt(timeAmount);

		// return min;

		// if (min <= 1) {
		// 	return `00:${sec}`;
		// }
		// if (hours !== 0) {
		// 	return `${hours}:${min}:${sec}`;
		// }

		// return `${min}:${sec}`;
		// return timeAmount;

		if (sec < 10) {
			sec = `0${sec}`;
		}
		if (min < 10 || min < 10 || hours !== 0) {
			min = `0${min}`;
		}
		if (hours < 1) {
			hours = 0;
		}
		if (min < 1) {
			min = 0;
		}

		return hours === 0
			? `${Math.floor(min)}:${sec}`
			: `${Math.floor(hours)}:${Math.floor(min)}:${sec} --- ${min}`;

		// if (parseInt(hours, 10) > 0) {
		// 	return `${parseInt(hours, 10)}h ${min}m ${sec}s`;
		// } else if (min == 0) {
		// 	return `${sec}s`;
		// } else {
		// 	return `${min}m ${sec}s`;
		// }
	};

	return (
		<div>
			<span className="timer">{timePretty}</span>
		</div>
	);
}
