import Head from "next/head";
import styles from "../styles/globals.css";
import { useState } from "react";
import Countdown from "./countdown";
import DialogBox from "./dialogBox";

export default function Home() {
	const [activeView, setActiveView] = useState(false);
	const changeView = () => setActiveView(!activeView);
	const [choseActivityView, setChoseActivityView] = useState(false);

	const [duration, setDuration] = useState(0);
	const [timeOver, setTimeOver] = useState(false);
	const [activity, setActivity] = useState("welcome");

	return (
		<div className="bg">
			<Head>
				<title>Motivator</title>
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Architects+Daughter&family=IBM+Plex+Mono&display=swap"
					rel="stylesheet"
				/>{" "}
			</Head>
			<main>
				{!activeView ? (
					<div className="content">
						<DialogBox screen={activity} />

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
										onClick={() => setDuration(25 * 60)}
									>
										25min
									</button>
									<button
										className="action-btn"
										onClick={() => setDuration(60 * 60)}
									>
										1h
									</button>
									<button
										className="action-btn"
										onClick={() => {
											setDuration(10);
											setActiveView(!activeView);
										}}
									>
										errrr
									</button>
								</div>
							</div>
						)}
						{/* <p>How long for?<input onChange={event => setDuration(parseInt(event.target.value))}></input></p> */}
					</div>
				) : (
					<div className="content">
						<DialogBox screen={activity} />
						<div className="action-box">
							<h3 className="action-box__title">
								{activity} session
							</h3>
							<Countdown
								duration={duration}
								countdownFinished={(timeOver) => {
									setTimeOver(true),
										// (changeView()),
										console.log("FINISHED");
								}}
							/>

							{timeOver ? (
								<button
									className="action-btn"
									onClick={changeView}
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
