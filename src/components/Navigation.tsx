import { useState } from 'react'
import Link from 'next/link'


import styles from './../styles/components/Navigation.module.css'

export function Navigation() {

    return (
        <div className={styles.navigationContainer}>
            <header>
                <img src="/icons/logo.svg" alt="" />
            </header>

            <nav>
                <ul>
                    <li>
                        <Link href="/pomodoro">
                            <a>
                                <span></span>
                                <img src="/icons/home.svg" alt="ícone de uma casinha" />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/leaderboard">
                            <a className={styles.navigationSelected}>
                                <span></span>
                                <img src="/icons/award.svg" alt="íconhe de uma medalha" />
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>

        </div>
    )
}