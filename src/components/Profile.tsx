import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallegensContext'

import styles from '../styles/components/Profile.module.css'

export function Profile() {

    const { level } = useContext(ChallengesContext)

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/joesilfe.png" alt="Joel Silva" loading="lazy" width={88} height={88} />
            <div>
                <strong>Joel Silva</strong>
                <p>
                    <img src="icons/level.svg" alt="level" loading='lazy' />
                    Leve {level}
                </p>
            </div>
        </div>
    )
}