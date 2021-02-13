import Head from 'next/head'
// import styles from '../styles/Home.css'
import { useState } from 'react'
import Countdown from './countdown'

export default function Home() {

  const [activeView, setActiveView] = useState(false);
  const changeView = () => setActiveView(!activeView)

  const [timeQty, setTime] = useState(0)



  return (
    <div >
      {/* <Head>
        <title>Motivator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <main>
        {!activeView ? (
          <>
            <h1 >
              Let's do this
        </h1>
            <p c>
              How long for?
          <input onChange={event => setTime(event.target.value)}></input>
            </p>
            <p >
              What are you working on?
          <input></input>
            </p>
            <button onClick={() => { changeView(); }}>Start</button>
          </>
        ) : (
            <>
              <p>active view</p>
              <Countdown timeQty={timeQty} />
              <button onClick={changeView}>End</button>
            </>
          )}

      </main>
    </div>
  )
}
