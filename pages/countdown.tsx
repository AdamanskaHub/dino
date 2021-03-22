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
	const prettifiedTime = (time) => {
		return secondsToHms(time);
	};

	return (
		<div>
			<span className="timer">{prettifiedTime(timeLeft)}</span>
		</div>
	);
}
