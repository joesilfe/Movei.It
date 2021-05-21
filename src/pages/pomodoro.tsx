import Head from 'next/head';
import { GetServerSideProps } from 'next'

import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";


import PageIndex from './index'

import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallegensContext';

type PomodoroProps = {
    level?: number,
    currentExperience?: number,
    challengesCompleted?: number
}

export default function Pomodoro({ level, currentExperience, challengesCompleted }: PomodoroProps) {
    return (
        <PageIndex>
            <ChallengesProvider
                level={level}
                currentExperience={currentExperience}
                challengesCompleted={challengesCompleted}
            >
                <Head>
                    <title>Pomodoro | Move.it</title>
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
            </ChallengesProvider>
        </ PageIndex>
    )

}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies

  console.log({ level, currentExperience, challengesCompleted })

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}