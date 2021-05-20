import Head from 'next/head';

import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";


import PageIndex from './index'

import { CountdownProvider } from '../contexts/CountdownContext';

export default function Pomodoro() {
    return (
        <PageIndex>
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
        </ PageIndex>
    )

}