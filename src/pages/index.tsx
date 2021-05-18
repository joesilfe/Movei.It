import Head from 'next/head';
import { GetServerSideProps } from 'next'

import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";

import { CountdownProvider } from '../contexts/CountdownContext';


import styles from '../styles/pages/Home.module.css'
import { ChallengesProvider } from '../contexts/ChallegensContext';

type HomeProps = {
  level: number,
  currentExperience: number,
  challengesCompleted: number
}

export default function Home({ level, currentExperience, challengesCompleted }: HomeProps) {

  return (
    <ChallengesProvider
      level={level}
      currentExperience={currentExperience}
      challengesCompleted={challengesCompleted}
    >
      <div className={styles.container}>

        <Head>
            <title>Início | Move.it</title>
            <meta name="description" content="O Move.it é um App que utiliza a técnica de pomodoro, com o objetivo de melhorar sua produtividade e foco." />
        </Head>

          <ExperienceBar />

          <CountdownProvider>
            <section>
              <div>
                <Profile />
                <CompletedChallenges />
                <Countdown />
              </div>
              <div>
                <ChallengeBox />
              </div>
            </section>
          </ CountdownProvider >
      </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { level, currentExperience, challengesCompleted} = ctx.req.cookies

  return {
        props: {
        level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}