import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

export default function Home() {

  const [activeView, setActiveView] = useState(false);
  const changeView = () => setActiveView(!activeView)

  return (
    <div className={styles.container}>
      <Head>
        <title>Motivator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>


        {!activeView ? (
          <>
            <h1 className={styles.title}>
              Let's do this
        </h1>

            <p className={styles.question}>
              How long for?
          <input></input>
            </p>
            <p className={styles.question}>
              What are you working on?
          <input></input>
            </p>
            <button onClick={changeView}>Start</button>
          </>
        ) : (
            <>
              <p>active view</p>
              <button onClick={changeView}>End</button>
            </>
          )}

      </main>
    </div>
  )
}
