import { ReturnIcon } from 'ui/assets'
import styles from './reports.module.scss'

const Reports = ({ reports, returnToAdminSelection }) => {
    return (
        <div className={`${styles.container} ${reports ? styles.openTransition : styles.closeTransition}`}>
            <div className={styles.atomPannel} />
            <div className={styles.reportsContainer}>
                <div className={styles.reportsSection}>

                </div>
                <button className={styles.returnButton} onClick={returnToAdminSelection}>
                    Voltar
                    <img className={styles.returnIcon} src={ReturnIcon} />
                </button>
            </div>
        </div>
    )
}

export { Reports }