import Head from "next/head";
import styles from "../styles/globals.css";
import React, { useEffect, useState } from "react";
import Countdown from "./countdown";
import DialogBox from "./dialogBox";

export default function Home() {
	const [activeView, setActiveView] = useState(false);
	const changeView = () => setActiveView(!activeView);
	const [choseActivityView, setChoseActivityView] = useState(false);

	const [timeOver, setTimeOver] = useState(false);
	const [activity, setActivity] = useState("welcome");

	const [timeLeft, setTimeLeft] = useState(null);
	const motivateMe = () => console.log("nooooo" + (timeLeft % 5));

	useEffect(() => {
		// save intervalId to clear the interval when the component re-renders
		if (timeLeft === 0) {
			setTimeLeft(null);
			console.log("TIME'S UP");
			setTimeOver(true);
		}
		if (!timeLeft) return;
		if (timeLeft % 5 === 0) {
			// setActivity("motivate");
			motivateMe();
		}

		const intervalId = setInterval(() => {
			setTimeLeft(timeLeft - 1);
			console.log(timeLeft);
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
				<p>{timeLeft} = time left</p>
				{!activeView ? (
					<div className="content">
						<DialogBox screen={activity} motivateDialog />

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
										onClick={() => setActivity("workout")}
									>
										Workout
									</button>
									<button
										className="action-btn"
										onClick={() => setActivity("other")}
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
								</div>
							</div>
						)}
						{/* <p>How long for?<input onChange={event => setDuration(parseInt(event.target.value))}></input></p> */}
					</div>
				) : (
					<div className="content">
						<DialogBox
							screen={activity + "On"}
							motivate={motivateMe()}
						/>
						<div className="action-box">
							<h3 className="action-box__title">
								{activity} session
							</h3>
							<p>{timeLeft}</p>
							<Countdown timeLeft={timeLeft} />

							{!timeOver ? (
								<button
									className="action-btn"
									onClick={() => {
										changeView;
										setTimeLeft(null);
									}}
								>
									End
								</button>
							) : (
								<p>countdown finished</p>
							)}
						</div>
					</div>
				)}
			</main>
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
