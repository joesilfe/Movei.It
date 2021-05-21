import Link from 'next/link'
import { useRouter } from 'next/router'

import { useState, useEffect } from 'react'

import styles from './../styles/components/Navigation.module.css'

export function Navigation() {

    const router = useRouter()
    const { pathname } = router

    const [activeIcon, setActiveIcon] = useState(pathname)

    useEffect(() => {
        setActiveIcon(pathname)
    }, [activeIcon])

    return (
        <div className={styles.navigationContainer}>
            <header>
                <img src="/icons/logo.svg" alt="icone Move.it" width="48" height="42"/>
            </header>

            <nav>
                <ul>
                    <li>
                        <Link href="/pomodoro">
                            <a>{activeIcon.includes('/pomodoro') ?
                                <img src="/icons/home-active.svg" alt="ícone de uma casinha na cor roxa" />
                                :
                                <img src="/icons/home.svg" alt="ícone de uma casinha na cor cinza" />
                            }
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/leaderboard" >
                            <a className={styles.navigationSelected} >
                                {activeIcon.includes('/leaderboard') ?
                                    <img src="/icons/award-active.svg" alt="íconhe de uma medalha" />
                                    :
                                    <img src="/icons/award.svg" alt="íconhe de uma medalha" />
                                }
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>

        </div>
    )
}