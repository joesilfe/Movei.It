
import { useEffect, ReactNode } from 'react'

import { GetServerSideProps } from 'next'

import { Navigation } from '../components/Navigation';

import { ChallengesProvider } from '../contexts/ChallegensContext';

import styles from '../styles/pages/Home.module.css'

type HomeProps = {
  level?: number,
  currentExperience?: number,
  challengesCompleted?: number,
  children: ReactNode,
}

export default function Home({ level, currentExperience, challengesCompleted, children }: HomeProps) {

  return (
    <ChallengesProvider
      level={level}
      currentExperience={currentExperience}
      challengesCompleted={challengesCompleted}
    >
      <div className={styles.container}>
        <aside>
          <Navigation />
        </aside>


        <main>
          {children}
        </main>
      </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}