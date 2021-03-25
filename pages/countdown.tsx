import React from "react";

type CountdownProps = {
	timeLeft?: number;
};

export default function Countdown({ timeLeft }: CountdownProps) {
	const secondsToHms = (timeAmount) => {
		if (!timeAmount) return 0;

		let hours = timeAmount / 3600;
		timeAmount = timeAmount % 3600;
		let min = timeAmount / 60;
		timeAmount = timeAmount % 60;

		let sec = parseInt(timeAmount);

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
