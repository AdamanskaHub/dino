import Head from "next/head";
import styles from "../styles/globals.css";
import { useState } from "react";
import Countdown from "./countdown";
import DialogBox from "./dialogBox";

export default function Home() {
	const [activeView, setActiveView] = useState(false);
	const changeView = () => setActiveView(!activeView);

	const [duration, setDuration] = useState(0);
	const [timeOver, setTimeOver] = useState(false);
	const [activity, setActivity] = useState("welcome");

	return (
		<div className="bg">
			{/* <Head><title>Motivator</title><link rel="icon" href="/favicon.ico" /></Head> */}
			<main>
				{!activeView ? (
					<>
						<DialogBox screen={activity} />
						<div className="action-box">
							<h3 className="action-box action-box__title">
								Title
							</h3>
							<div className="action-box action-box__buttons">
								<button
									className="action-btn"
									onClick={() => setActivity("study")}
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
						{/* <p>How long for?<input onChange={event => setDuration(parseInt(event.target.value))}></input></p> */}
						<p>What are you working on?</p>
						<p>{activity}</p>
						<p>How long for?</p>
						{/* <button  onClick={()=>{setDuration(12); changeView()}}>12min</button><button  onClick={()=>{setDuration(5); changeView()}}>5min</button> */}
						<button onClick={() => setDuration(12)}>12min</button>
						<button onClick={() => setDuration(5)}>5min</button>

						{activity != "" && duration != 0 && (
							<button
								className="action-btn action-btn--special"
								onClick={changeView}
							>
								Let's {activity} for {duration}min
							</button>
						)}
					</>
				) : (
					<>
						<h3 className="action-box action-box__title">
							{activity} session
						</h3>
						<DialogBox screen={activity} />
						<Countdown
							duration={duration}
							countdownFinished={(timeOver) => {
								setTimeOver(true),
									// (changeView()),
									console.log("FINISHED");
							}}
						/>
						<button onClick={changeView}>End</button>
					</>
				)}
				{timeOver && <p>countdown finished</p>}
			</main>
		</div>
	);
}

// TODO
// ---  Penser que c'est comme l'autre jeu débile ---
// Intro dialogue
// Choisir ce que je veux faire
// lancer le timer
// Plus de dialogue
// Autre choix
