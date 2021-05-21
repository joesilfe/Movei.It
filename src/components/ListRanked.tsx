
import styles from '../styles/components/ListRanked.module.css'

export function ListRanked() {
    return (
        <div className={styles.containerRanked}>
            {/* <p>Em breve você poderar ver sua posição no ranked</p> */}
            <ul>
                <li>
                    <ul>
                        <li>Posição</li>
                        <li>Usuário</li>
                    </ul>
                    <ul>
                        <li>Desafio</li>
                        <li>Experiência</li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li>1</li>
                        <li>
                            <div>
                                <strong>Joel Silva</strong>
                                <p>
                                    <img src="/icons/level.svg" alt="level" width="14" height="16" />
                                Leve 2
                                </p>
                            </div>
                            <span>127 completados</span>
                            <span>154000 xp</span>
                        </li>
                    </ul>
                </li>
            </ul>
        </ div>
    )
}