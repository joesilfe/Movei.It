import Link from 'next/link'

import style from './../styles/components/Navigation.module.css'

export function Navigation() {
    return (
        <div className={style.navigationContainer}>
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
                        <Link href="/leaderboard" >
                            <a>
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