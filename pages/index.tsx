import Head from "next/head";
import styles from "../styles/globals.scss";
import React, { useEffect, useState, useRef } from "react";
import Countdown from "./countdown";
import DialogBox from "./dialogBox";
import HeartBar from "./heartsBar";
// import { getCookieParser } from "next/dist/next-server/server/api-utils";

export default function Home() {
	const [activeView, setActiveView] = useState(false);
	const changeView = () => setActiveView(!activeView);
	const [choseActivityView, setChoseActivityView] = useState(false);

	const [timeLeft, setTimeLeft] = useState(null);
	const [timeOver, setTimeOver] = useState(false);
	const [activity, setActivity] = useState("welcome");

	const [lovePoints, setLovePoints] = useState(null);
	const [level, setLevel] = useState(null);

	const childRef = useRef();



	const updateLv = (lv, love) => {
		console.log('%cUPDATE HAPPENING',lv,love,'color:#97a1ff')
		document.cookie = `myLv=${lv}; myLovePoints=${love} my path=/; secure=Lax; sameSite=Lax; expires=Tue, 01 Jan 2030 00:00:00 GMT"`;
		setLevel(lv)
		setLovePoints(love)
	}

	

	useEffect(() => {
		if (document.cookie) {
// document.cookie.match(/^(.*;)?\s*MyLovePoints\s*=\s*[^;]+(.*)?$/)
			console.log('🍪 cookie exist', document.cookie,);
			
			let templove = document.cookie.match('(^|;)\\s*' + 'MyLovePoints' + '\\s*=\\s*([^;]+)')?.pop() || ''
			let templv = document.cookie.match('(^|;)\\s*' + 'MyLv' + '\\s*=\\s*([^;]+)')?.pop() || ''

			console.log('%c🍪', templove, templv, 'color:#9b5454')
			updateLv(templv, templove)
			
    } else {
			console.log('🍪 no cookie', document.cookie);
			updateLv(0,0)
    }
	}, [])

	useEffect(() => {
		console.log('💗💗💗Love points activated💗💗💗')
		document.cookie = `myLovePoints=${lovePoints}; path=/; secure=Lax; sameSite=Lax; expires=Tue, 01 Jan 2030 00:00:00 GMT"`;
		// console.log(
		// 	"%c♥️ love cookie " + loveCookieValue() + " love points " + lovePoints , 'color: #fa4a7f'
		// );

		lovePoints >= 10 && level === 1 && updateLv(2, lovePoints);
		lovePoints >= 5 && level === 0 && updateLv(1, lovePoints);

	}, [lovePoints]);

	useEffect(() => {
		if (timeLeft === 0) {
			// setLovePoints(lovePoints + 1);
			setTimeLeft(null);
			setTimeOver(true);
		}
		if (!timeLeft) return;
		if (timeLeft % 5 === 0 && timeLeft != 0 && timeLeft != null) {
			// TO MODIFY
			childRef.current.motivate();
		}
		if (timeLeft % 15 === 0) { // % du nombre de secondes pour avoir un point
			setLovePoints(lovePoints + 1);
			console.log("%cLOVE POINTS JUST INCREASED " + lovePoints, 'color:#a66af5');
		}
		// save intervalId to clear the interval when the component re-renders
		const intervalId = setInterval(() => {
			setTimeLeft(timeLeft - 1);
		}, 1000); // clear interval on re-render to avoid memory leaks
		return () => clearInterval(intervalId);
	}, [timeLeft]);

	return (
		<div className="bg">
			<Head>
				<title>Motivator</title>
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Architects+Daughter&family=PT+Mono&family=IBM+Plex+Mono&display=swap"
					rel="stylesheet"
				/>{" "}
			</Head>
			<main>
				<HeartBar timeLeft={timeLeft} lovePoints={lovePoints} />
				<h1>lp {lovePoints}</h1>
				{/* <button onClick={() => document.cookie = `myLv=3; my path=/; secure=Lax; samesite=Lax; 
expires=Tue, 01 Jan 2030 00:00:00 GMT"`}>BRING ME AT LEVEL 3</button>
<button onClick={() => document.cookie = `myLv=0; path=/; secure=Lax; samesite=Lax; 
expires=Tue, 01 Jan 2030 00:00:00 GMT"`}>BRING ME AT LEVEL 0</button> */}
				<button onClick={()=>console.log(document.cookie.indexOf('myLovePoints='))}>local?</button>
				{!activeView ? (
					<div className="content">
						<DialogBox
							screen={activity}
							timeLeft={timeLeft}
							ref={childRef}
							lovePoints={lovePoints}
						/>

						{!choseActivityView ? (
							<div className="action-box">
								<h3 className="action-box__title">
									What do you want to work on? {activity}
								</h3>
								<div className="action-box__btn">
									<button
										className="action-btn"
										onClick={() => {
											setActivity("study");
											setChoseActivityView(
												!choseActivityView
											);
										}}
									>
										Study
									</button>
									<button
										className="action-btn"
										onClick={() => {
											setActivity("workout");
											setChoseActivityView(
												!choseActivityView
											);
										}}
									>
										Workout
									</button>
									<button
										className="action-btn"
										onClick={() => {
											setActivity("other");
											setChoseActivityView(
												!choseActivityView
											);
										}}
									>
										Other
									</button>
								</div>
							</div>
						) : (
							<div className="action-box">
								<h3 className="action-box__title">
									For how long? --{activity}--
								</h3>
								<div className="action-box__btn">
									<button
										className="action-btn"
										onClick={() => {
											setTimeLeft(25 * 60);
											setActiveView(!activeView);
										}}
									>
										25min
									</button>
									<button
										className="action-btn"
										onClick={() => {
											setTimeLeft(62 * 60);
											setActiveView(!activeView);
										}}
									>
										1h
									</button>
									<button
										className="action-btn"
										onClick={() => {
											setTimeLeft(15);
											setActiveView(!activeView);
										}}
									>
										15s
									</button>
									<button
										onClick={() =>
											setChoseActivityView(
												!choseActivityView
											)
										}
									>
										Cancel
									</button>
								</div>
							</div>
						)}
						{/* <p>How long for?<input onChange={event => setDuration(parseInt(event.target.value))}></input></p> */}
					</div>
				) : (
					<div className="content">
						<DialogBox
							screen={activity + "On"}
							timeLeft={timeLeft}
							ref={childRef}
							lovePoints={lovePoints}
						/>
						<div className="action-box">
							<h3 className="action-box__title">
								{activity} session
							</h3>
							<Countdown timeLeft={timeLeft} />
							<button
								className="action-btn"
								onClick={() => {
									changeView;
									setTimeLeft(null);
									setActiveView(!activeView);
									setChoseActivityView(!choseActivityView);
									setActivity("keepGoing");
									childRef.current.keepGoing();
								}}
							>
								{!timeOver ? "Stop" : "Done"}
							</button>
						</div>
					</div>
				)}
			</main>
		</div>
	);
}

// TODO
// ---  Penser que c'est comme l'autre jeu débile ---
// √ Intro dialogue
// √ Choisir ce que je veux faire
// √ lancer le timer =>
// √ qd il est fini dialogue "inbetween"
// √ Nouveau dialogue "encouragements" selon activité
// √ Autre choix
// 1h display issue
// Actual intro dialogs
// When a new level is reach and timer is not active => show new level dial
// create upgraded level type of arrays

// Si activité est study mais countdown actif alors autre TextEncoder, on passe {activity}+timeon


// const loveCookieValue = () => {
	// 	if (
	// 		document.cookie
	// 			.split("; ")
	// 			.find((row) => row.startsWith("myLovePoints="))
	// 			.split("=")[1] === undefined ||
	// 		""
	// 	) {
	// 		// console.log("didn't find love cookie");
	// 		return "0";
	// 	} else {
	// 		// console.log("found love cookie");
	// 		return document.cookie
	// 			.split("; ")
	// 			.find((row) => row.startsWith("myLovePoints="))
	// 			.split("=")[1];
	// 	}
	// };

	// useEffect(() => {
	// 	document.cookie = `myLovePoints=0; path=/; secure=Lax; sameSite=Lax; expires=Tue, 01 Jan 2030 00:00:00 GMT"`;
	// 	// console.log(loveCookieValue());
	// 	parseInt(loveCookieValue()) !== undefined
	// 		? setLovePoints(parseInt(loveCookieValue()))
	// 		: setLovePoints(0);
	// }, []);