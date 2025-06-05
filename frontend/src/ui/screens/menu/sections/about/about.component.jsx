import styles from './about.module.scss'
import { ReturnIcon } from 'ui/assets'

const About = ({ about, returnToMenuSelection }) => {
    return (
        <div className={`${styles.container} ${about ? styles.openTransition : styles.closeTransition}`}>
            <div className={styles.aboutContainer}>
                <div className={styles.aboutSection}>

                </div>
                <button className={styles.returnButton} onClick={returnToMenuSelection}>
                    Voltar
                    <img className={styles.returnIcon} src={ReturnIcon} />
                </button>
            </div>
        </div>
    )
}

export { About }