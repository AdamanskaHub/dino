import React, { useState, useEffect } from "react";

type HeartsBarProps = {
	lovePoints?: number;
	timeLeft?: number;
};

export default function HeartsBar({ lovePoints }: HeartsBarProps) {
	const [heartOneColor, setheartOneColor] = useState("#ffffff85");
	const [heartTwoColor, setheartTwoColor] = useState("#ffffff85");
	const [heartThreeColor, setheartThreeColor] = useState("#ffffff85");
	const [heartFourColor, setheartFourColor] = useState("#ffffff85");
	const [heartFiveColor, setheartFiveColor] = useState("#ffffff85");

	useEffect(() => {
		if (lovePoints >= 160) {
			console.log("%clove points augmentés LV 11",'color:#00d5e4');
			document.cookie = `myLv=11; path=/; secure=Lax; sameSite=Lax; expires=Tue, 01 Jan 2030 00:00:00 GMT"`;
			setheartFiveColor("#d55656");
		} else if (lovePoints >= 130) {
			console.log("%clove points augmentés LV 10",'color:#00d5e4');
			document.cookie = `myLv=10; path=/; secure=Lax; sameSite=Lax; expires=Tue, 01 Jan 2030 00:00:00 GMT"`;
			setheartFiveColor("#e3c56a");
		} else if (lovePoints >= 100) {
			console.log("%clove points augmentés LV 9",'color:#00d5e4');
			document.cookie = `myLv=9; path=/; secure=Lax; sameSite=Lax; expires=Tue, 01 Jan 2030 00:00:00 GMT"`;
			setheartFourColor("#d55656");
		} else if (lovePoints >= 80) {
			console.log("%clove points augmentés LV 8",'color:#00d5e4');
			document.cookie = `myLv=8; path=/; secure=Lax; sameSite=Lax; expires=Tue, 01 Jan 2030 00:00:00 GMT"`;
			setheartFourColor("#e3c56a");
		} else if (lovePoints >= 65) {
			console.log("%clove points augmentés LV 7",'color:#00d5e4');
			document.cookie = `myLv=7; path=/; secure=Lax; sameSite=Lax; expires=Tue, 01 Jan 2030 00:00:00 GMT"`;
			setheartThreeColor("#d55656");
		} else if (lovePoints >= 50) {
			console.log("%clove points augmentés LV 6",'color:#00d5e4');
			document.cookie = `myLv=6; path=/; secure=Lax; sameSite=Lax; expires=Tue, 01 Jan 2030 00:00:00 GMT"`;
			setheartThreeColor("#e3c56a");
		} else if (lovePoints >= 35) {
			console.log("%clove points augmentés LV 5",'color:#00d5e4');
			document.cookie = `myLv=5; path=/; secure=Lax; sameSite=Lax; expires=Tue, 01 Jan 2030 00:00:00 GMT"`;
			setheartTwoColor("#d55656");
		} else if (lovePoints >= 20) {
			console.log("%clove points augmentés LV 4",'color:#00d5e4');
			document.cookie = `myLv=4; path=/; secure=Lax; sameSite=Lax; expires=Tue, 01 Jan 2030 00:00:00 GMT"`;
			setheartTwoColor("#e3c56a");
		} else if (lovePoints >= 10) {
			console.log("%clove points augmentés LV 3",'color:#00d5e4');
			document.cookie = `myLv=3; path=/; secure=Lax; sameSite=Lax; expires=Tue, 01 Jan 2030 00:00:00 GMT"`;
			setheartOneColor("#d55656");
		} else if (lovePoints >= 5) {
			console.log("%clove points augmentés LV 2",'color:#00d5e4');
			document.cookie = `myLv=2; path=/; secure=Lax; sameSite=Lax; expires=Tue, 01 Jan 2030 00:00:00 GMT"`;
			setheartOneColor("#e3c56a");
		} else if (lovePoints >= 0) {
			console.log("%clove points augmentés LV 1",'color:#00d5e4');
			document.cookie = `myLv=1; path=/; secure=Lax; sameSite=Lax; expires=Tue, 01 Jan 2030 00:00:00 GMT"`;
		}
	}, [lovePoints]);

	return (
		<div className="hearts">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill={heartOneColor}
				stroke="#fff"
				strokeWidth="1"
				className="heart"
			>
				<path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z " />
			</svg>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill={heartTwoColor}
				stroke="#fff"
				strokeWidth="1"
				className="heart"
			>
				<path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z " />
			</svg>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill={heartThreeColor}
				stroke="#fff"
				strokeWidth="1"
				className="heart"
			>
				<path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z " />
			</svg>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill={heartFourColor}
				stroke="#fff"
				strokeWidth="1"
				className="heart"
			>
				<path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z " />
			</svg>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill={heartFiveColor}
				stroke="#fff"
				strokeWidth="1"
				className="heart"
			>
				<path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z " />
			</svg>
		</div>
	);
}
