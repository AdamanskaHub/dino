import React from "react";

type CountdownProps = {
	timeLeft?: number;
};

export default function Countdown({ timeLeft }: CountdownProps) {
	const secondsToHms = (timeAmount) => {
		if (!timeAmount) return '00:00';

		let hours = timeAmount / 3600;
		timeAmount = timeAmount % 3600;
		let min = timeAmount / 60;
		timeAmount = timeAmount % 60;

		let sec = parseInt(timeAmount);
		min = Math.floor(min)
		hours = Math.floor(hours)

		if (sec < 10) {
			sec = `0${sec}`;
		}
		if (min < 10 ) {
			min = '0'+ min;
		}

		return hours == 0 
			? `${min}:${sec}`
			: `${hours}:${min}:${sec}`;
	};
	const prettifiedTime = (time) => {
		return secondsToHms(time);
	};

	return (
		<div>
			<span className="timer">{prettifiedTime(timeLeft)}</span>
		</div>
	);
}
