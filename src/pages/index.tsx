
import { ReactNode } from 'react'

import { Navigation } from '../components/Navigation';

import styles from '../styles/pages/Home.module.css'

type HomeProps = {
  children: ReactNode,
}

export default function Index({ children }: HomeProps) {

  return (
    <div className={styles.container}>
      <aside>
        <Navigation />
      </aside>

      <main>
        {children}
      </main>
    </div>
  )
}

