import React, { useRef, useEffect, useState } from "react";

export default function Countdown() {
    // interface Props {
    //     successState?: boolean;
    //     }

    const [num, setNum] = useState(9);
    const [pause, setPause] = useState(true);
    let intervalRef = useRef();

    // const decreaseNum = () => setNum((prev) => prev - 1);
    const decreaseNum = () => setNum((prev) => prev == 0 ? prev = 'DONE' : prev - 1);

    useEffect(() => {
        console.log("USE EFFECT")
        setPause(false);
        intervalRef.current = setInterval
            (decreaseNum, 1000);
        return () => clearInterval(intervalRef.current);
    }, []);

    const handleClick = () => {
        if (!pause) {
            clearInterval(intervalRef.current);
        } else {
            intervalRef.current = setInterval
                (decreaseNum, 1000);
        }
        setPause((prev) => !prev);
    };

    return (
        <div>
            <div>{num}</div>
            <button onClick={handleClick}>{pause ? "Run" : "Pause"}</button>
        </div>
    )

}