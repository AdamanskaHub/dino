import Head from "next/head";
import styles from "../styles/globals.scss";
import React, { useEffect, useState, useRef } from "react";
import Countdown from "./countdown";
import DialogBox from "./dialogBox";

export default function Home() {
	const [activeView, setActiveView] = useState(false);
	const changeView = () => setActiveView(!activeView);
	const [choseActivityView, setChoseActivityView] = useState(false);

	const [timeLeft, setTimeLeft] = useState(null);
	const [timeOver, setTimeOver] = useState(false);
	const [activity, setActivity] = useState("welcome");

	const [lovePoints, setLovePoints] = useState(0);

	const childRef = useRef();

	const loveCookieValue = () => {
		if (
			document.cookie
				.split("; ")
				.find((row) => row.startsWith("myLovePoints="))
				.split("=")[1] === undefined ||
			""
		) {
			// console.log("didn't find love cookie");
			return "0";
		} else {
			// console.log("found love cookie");
			return document.cookie
				.split("; ")
				.find((row) => row.startsWith("myLovePoints="))
				.split("=")[1];
		}
	};

	useEffect(() => {
		document.cookie = `myLovePoints=0; path=/; secure=Lax; samesite=Lax; expires=Tue, 01 Jan 2030 00:00:00 GMT"`;
		// console.log(loveCookieValue());
		parseInt(loveCookieValue()) !== undefined
			? setLovePoints(parseInt(loveCookieValue()))
			: setLovePoints(0);
	}, []);

	useEffect(() => {
		document.cookie = `myLovePoints=${lovePoints}; path=/; secure=Lax; samesite=Lax; expires=Tue, 01 Jan 2030 00:00:00 GMT"`;
		// console.log("love cookie " + loveCookieValue());
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
		if (timeLeft % 15 === 0) {
			setLovePoints(lovePoints + 1);
			console.log("LOVE POINTS JUST INCREASED " + lovePoints);
		}
		// save intervalId to clear the interval when the component re-renders
		const intervalId = setInterval(() => {
			setTimeLeft(timeLeft - 1);
		}, 1000);
		// clear interval on re-render to avoid memory leaks
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
				<h1>lp {lovePoints}</h1>
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
			<p style={{ color: "white", fontSize: "1rem" }}>test</p>
		</div>
	);
}

// TODO
// ---  Penser que c'est comme l'autre jeu débile ---
// Intro dialogue
// Choisir ce que je veux faire
// lancer le timer => qd il est fini dialogue "inbetween"
// Nouveau dialogue "encouragements" selon activité
// Autre choix

// Si activité est study mais countdown actif alors autre TextEncoder, on passe {activity}+timeon
